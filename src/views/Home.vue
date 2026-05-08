<template>
  <div class="home">
    <!-- 浮动装饰 -->
    <div class="floating-decorations">
      <div class="float-icon float-icon-1">🌸</div>
      <div class="float-icon float-icon-2">🎀</div>
      <div class="float-icon float-icon-3">💫</div>
      <div class="float-icon float-icon-4">✨</div>
      <div class="float-icon float-icon-5">🌟</div>
    </div>

    <header class="header">
      <div class="header-left">
        <div class="logo-wrapper">
          <span class="logo-icon">🎨</span>
          <h1 class="logo">StyleVault</h1>
        </div>
        <span class="tagline">让你的界面可爱起来~</span>
      </div>
      <nav class="main-nav">
        <button
          v-for="group in mainGroups"
          :key="group"
          :class="['nav-btn', { active: currentGroup === group }]"
          @click="selectGroup(group)"
        >
          <span class="btn-icon">{{ getGroupIcon(group) }}</span>
          {{ group }}
        </button>
      </nav>
    </header>

    <transition name="fade-slide" mode="out-in">
      <div class="search-section" :key="currentGroup">
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input
            v-model="searchKeyword"
            type="text"
            placeholder="搜索你喜欢的样式..."
          />
          <transition name="fade">
            <span v-if="searchKeyword" class="clear-btn" @click="searchKeyword = ''">✕</span>
          </transition>
        </div>
      </div>
    </transition>

    <!-- 子分类（仅组件分组显示） -->
    <transition name="fade-slide" mode="out-in">
      <div class="category-section" v-if="currentGroup === '组件'" :key="'cat-' + currentGroup">
        <button
          v-for="(cat, index) in currentCategories"
          :key="cat"
          :class="['category-btn', { active: currentCategory === cat }]"
          @click="selectCategory(cat)"
          :style="{ animationDelay: index * 0.05 + 's' }"
        >
          <span class="cat-icon">{{ getCategoryIcon(cat) }}</span>
          {{ cat }}
        </button>
      </div>
    </transition>

    <main class="main-content">
      <!-- 背景分组：单列大卡片展示 -->
      <transition-group name="card" tag="div" v-if="currentGroup === '背景'" class="bg-grid">
        <div
          v-for="(style, index) in filteredStyles"
          :key="style.id"
          class="bg-card"
          :style="{ animationDelay: index * 0.1 + 's' }"
          @click="goToDetail(style.id)"
        >
          <div class="bg-preview">
            <iframe
              :srcdoc="getPreviewDoc(style)"
              class="bg-iframe"
              sandbox="allow-scripts"
              loading="lazy"
            ></iframe>
          </div>
          <div class="card-info">
            <h3>{{ style.name }}</h3>
            <div class="tags">
              <span v-for="tag in style.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </transition-group>

      <!-- 组件/页面分组：原有网格布局 -->
      <transition-group name="card" tag="div" v-else :class="['styles-grid', currentGroup === '页面' ? 'page-grid' : 'component-grid']">
        <div
          v-for="(style, index) in filteredStyles"
          :key="style.id"
          class="style-card"
          :style="{ animationDelay: index * 0.08 + 's' }"
          @click="goToDetail(style.id)"
        >
          <div :class="['card-preview', currentGroup === '页面' ? 'page-preview' : 'component-preview']">
            <iframe
              :srcdoc="getPreviewDoc(style)"
              :class="['preview-iframe', currentGroup === '页面' ? 'page-iframe' : 'component-iframe']"
              sandbox="allow-scripts"
              loading="lazy"
            ></iframe>
          </div>
          <div class="card-info">
            <h3>{{ style.name }}</h3>
            <span class="category-tag">{{ style.category }}</span>
            <div class="tags">
              <span v-for="tag in style.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </transition-group>

      <transition name="fade">
        <div v-if="filteredStyles.length === 0" class="empty-state">
          <div class="empty-icon">🌈</div>
          <p>暂无匹配的样式</p>
          <span>换个关键词试试吧~</span>
        </div>
      </transition>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import {
  allStyles,
  mainGroups,
  componentCategories,
  pageCategories
} from '../data/index.js'

const router = useRouter()

// 搜索关键词（防抖处理）
const searchKeyword = ref('')
const debouncedSearch = ref('')
let searchTimer = null

watch(searchKeyword, (val) => {
  clearTimeout(searchTimer)
  searchTimer = setTimeout(() => {
    debouncedSearch.value = val
  }, 300)
})

const currentGroup = ref('组件')
const currentCategory = ref('全部')

const currentCategories = computed(() => {
  return currentGroup.value === '组件' ? componentCategories : pageCategories
})

const filteredStyles = computed(() => {
  let result

  if (currentGroup.value === '组件') {
    // 全部按钮、开关、加载动画、卡片、导航、输入框、滑动条、复选框、气泡、折叠
    result = allStyles.filter(s =>
      ['按钮', '开关', '加载动画', '卡片', '导航', '输入框', '滑动条', '复选框', '气泡', '折叠'].includes(s.category)
    )
  } else if (currentGroup.value === '页面') {
    result = allStyles.filter(s => s.category === '表单')
  } else if (currentGroup.value === '背景') {
    result = allStyles.filter(s => s.category === '背景')
  }

  // 子分类过滤
  if (currentCategory.value !== '全部' && currentGroup.value !== '背景') {
    result = result.filter(s => s.category === currentCategory.value)
  }

  // 搜索过滤（使用防抖后的值）
  if (debouncedSearch.value) {
    const keyword = debouncedSearch.value.toLowerCase()
    result = result.filter(s =>
      s.name.toLowerCase().includes(keyword) ||
      s.tags.some(tag => tag.toLowerCase().includes(keyword))
    )
  }

  return result
})

const selectGroup = (group) => {
  currentGroup.value = group
  currentCategory.value = '全部'
}

const selectCategory = (cat) => {
  currentCategory.value = cat
}

const goToDetail = (id) => {
  router.push(`/style/${id}`)
}

// 获取分组图标
const getGroupIcon = (group) => {
  const icons = {
    '组件': '🎀',
    '页面': '📄',
    '背景': '🌈'
  }
  return icons[group] || '✨'
}

// 获取分类图标
const getCategoryIcon = (cat) => {
  const icons = {
    '全部': '🌟',
    '按钮': '🔘',
    '开关': '🔌',
    '加载动画': '⏳',
    '卡片': '🃏',
    '导航': '🧭',
    '输入框': '✏️',
    '滑动条': '🎚️',
    '复选框': '☑️',
    '气泡': '💬',
    '折叠': '📂'
  }
  return icons[cat] || '✨'
}

// ============================================
// 预览文档缓存（memoization）
// ============================================
const previewCache = new Map()

const getPreviewDoc = (style) => {
  const cacheKey = `${style.id}-${currentGroup.value}`
  if (previewCache.has(cacheKey)) {
    return previewCache.get(cacheKey)
  }

  const doc = buildPreviewDoc(style)
  previewCache.set(cacheKey, doc)
  return doc
}

// 构建预览文档
const buildPreviewDoc = (style) => {
  // 背景样式：使用完整 html 字段，全屏展示
  if (style.category === '背景' && style.html) {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body, html {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    ${style.css}
  </style>
</head>
<body>
  ${style.html}
</body>
</html>`
  }

  // 三个复杂登录页面：使用完整 html，并修复尺寸适配
  const complexLoginIds = [9014, 9015, 9017]
  if (complexLoginIds.includes(style.id) && style.html) {
    let containerStyle = ''
    if (style.id === 9014) {
      // 滑动面板登录：容器宽度850px，需要缩放适配
      containerStyle = `
        .container { width: 100% !important; max-width: 100% !important; min-height: 100% !important; }
      `
    } else if (style.id === 9015) {
      // 极光磁吸登录：scene宽度1000px高度620px，需要缩放
      containerStyle = `
        .scene { width: 100% !important; max-width: 100% !important; height: 100% !important; }
        .aurora-wrapper { width: 100% !important; height: 100% !important; }
      `
    } else if (style.id === 9017) {
      // 光效玻璃按钮登录：glass-card宽度380px，需要居中适配
      containerStyle = `
        .glass-card { width: 90% !important; max-width: 90% !important; }
      `
    }

    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: #fff5f7;
      font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      overflow: hidden;
    }
    ${containerStyle}
    ${style.css}
  </style>
</head>
<body>
  ${style.html}
</body>
</html>`
  }

  // 页面/组件样式：使用 preview 字段
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: #fff5f7;
      font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      overflow: hidden;
    }
    ${style.css}
  </style>
</head>
<body>
  <div class="preview-wrapper">${style.preview}</div>
</body>
</html>`
}

// 切换分组时清除缓存
watch(currentGroup, () => {
  previewCache.clear()
})
</script>

<style scoped>
/* Kawaii 糖果配色变量 */
.home {
  --primary-pink: #ff8fab;
  --primary-purple: #c77dff;
  --primary-blue: #7dd3fc;
  --primary-yellow: #fcd34d;
  --primary-green: #86efac;
  --pastel-pink: #ffc8dd;
  --pastel-purple: #e0aaff;
  --pastel-blue: #bde0fe;
  --pastel-yellow: #fef08a;
  --glass-bg: rgba(255, 255, 255, 0.7);
  --glass-border: rgba(255, 255, 255, 0.5);
  --shadow-soft: 0 8px 32px rgba(255, 143, 171, 0.15);
  --shadow-hover: 0 12px 40px rgba(255, 143, 171, 0.25);

  min-height: 100vh;
  background: transparent;
}

/* 浮动装饰图标 */
.floating-decorations {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.float-icon {
  position: absolute;
  font-size: 28px;
  animation: floatAround 12s ease-in-out infinite;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.float-icon-1 { top: 15%; left: 5%; animation-delay: 0s; }
.float-icon-2 { top: 25%; right: 8%; animation-delay: -3s; }
.float-icon-3 { bottom: 20%; left: 12%; animation-delay: -6s; }
.float-icon-4 { top: 60%; right: 5%; animation-delay: -9s; }
.float-icon-5 { bottom: 35%; right: 15%; animation-delay: -2s; }

@keyframes floatAround {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-15px) rotate(5deg); }
  50% { transform: translateY(5px) rotate(-3deg); }
  75% { transform: translateY(-10px) rotate(3deg); }
}

/* 导航栏 - 毛玻璃效果 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 40px;
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--glass-border);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: var(--shadow-soft);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  font-size: 32px;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* Logo - 渐变糖果色 */
.logo {
  margin: 0;
  font-size: 26px;
  font-weight: 800;
  letter-spacing: 1px;
  background: linear-gradient(135deg, var(--primary-pink), var(--primary-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tagline {
  font-size: 14px;
  font-weight: 500;
  color: var(--primary-purple);
  opacity: 0.8;
}

/* 搜索区域 */
.search-section {
  padding: 40px 40px 30px;
  display: flex;
  justify-content: center;
}

.search-box {
  position: relative;
  width: 100%;
  max-width: 550px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.search-box:focus-within {
  width: 600px;
  transform: scale(1.02);
}

.search-box input {
  width: 100%;
  padding: 18px 50px 18px 55px;
  border-radius: 50px;
  background: var(--glass-bg);
  border: 2px solid var(--glass-border);
  color: #4a4a4a;
  font-size: 16px;
  font-family: 'Nunito', sans-serif;
  backdrop-filter: blur(10px);
  outline: none;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-soft);
}

.search-box input::placeholder {
  color: #999;
}

.search-box input:focus {
  border-color: var(--primary-pink);
  box-shadow: 0 0 0 4px rgba(255, 143, 171, 0.2), var(--shadow-soft);
  background: rgba(255, 255, 255, 0.9);
}

/* 搜索图标 */
.search-icon {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  transition: all 0.3s ease;
}

.search-box:focus-within .search-icon {
  transform: translateY(-50%) scale(1.1);
}

.clear-btn {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pastel-pink);
  border-radius: 50%;
  color: var(--primary-pink);
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.clear-btn:hover {
  background: var(--primary-pink);
  color: white;
  transform: translateY(-50%) scale(1.1) rotate(90deg);
}

/* 导航按钮 */
.main-nav {
  display: flex;
  gap: 12px;
}

.nav-btn {
  background: rgba(255, 255, 255, 0.5);
  color: #666;
  border: 2px solid transparent;
  padding: 10px 22px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Nunito', sans-serif;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  align-items: center;
  gap: 6px;
}

.btn-icon {
  font-size: 16px;
}

.nav-btn:hover {
  color: var(--primary-pink);
  background: rgba(255, 143, 171, 0.15);
  border-color: var(--primary-pink);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 143, 171, 0.3);
}

.nav-btn.active {
  color: white;
  background: linear-gradient(135deg, var(--primary-pink), var(--primary-purple));
  border-color: transparent;
  box-shadow: 0 6px 25px rgba(255, 143, 171, 0.4);
  transform: translateY(-2px);
}

/* 分类标签 */
.category-section {
  padding: 0 40px 30px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.category-btn {
  background: rgba(255, 255, 255, 0.6);
  color: #777;
  border: 2px solid var(--glass-border);
  padding: 8px 18px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Nunito', sans-serif;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  align-items: center;
  gap: 6px;
  animation: fadeInUp 0.5s ease backwards;
}

.cat-icon {
  font-size: 14px;
}

.category-btn:hover {
  color: var(--primary-purple);
  background: rgba(199, 125, 255, 0.15);
  border-color: var(--primary-purple);
  transform: translateY(-2px) scale(1.05);
}

.category-btn.active {
  color: white;
  background: linear-gradient(135deg, var(--primary-purple), var(--primary-blue));
  border-color: transparent;
  box-shadow: 0 6px 20px rgba(199, 125, 255, 0.35);
  transform: scale(1.05);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.main-content {
  padding: 0 10px 40px;
  max-width: 1800px;
  margin: 0 auto;
}

.styles-grid {
  display: grid;
  gap: 24px;
}

.component-grid {
  grid-template-columns: repeat(4, 1fr);
}

.page-grid {
  grid-template-columns: repeat(3, 1fr);
}

/* 背景分组大卡片样式 */
.bg-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.bg-card {
  background: var(--glass-bg);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 2px solid var(--glass-border);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: fadeInUp 0.6s ease backwards;
}

.bg-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: var(--shadow-hover), 0 0 30px rgba(255, 143, 171, 0.2);
  border-color: var(--primary-pink);
}

.bg-card:hover .bg-preview {
  transform: scale(1.05);
}

.bg-preview {
  width: 100%;
  height: 500px;
  background: #fff5f7;
  overflow: hidden;
  transition: transform 0.5s ease;
}

.bg-iframe {
  width: 100%;
  height: 100%;
  border: none;
  background: #fff5f7;
}

/* 原有卡片样式 - 糖果风格 */
.style-card {
  background: var(--glass-bg);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 2px solid var(--glass-border);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: fadeInUp 0.6s ease backwards;
}

.style-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: var(--shadow-hover), 0 0 30px rgba(199, 125, 255, 0.2);
  border-color: var(--primary-purple);
}

.style-card:hover .card-preview {
  transform: scale(1.05);
}

.card-preview {
  background: #fff5f7;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid var(--glass-border);
  overflow: hidden;
  transition: transform 0.5s ease;
}

.component-preview {
  height: 320px;
}

.page-preview {
  height: 400px;
}

.preview-iframe {
  width: 100%;
  border: none;
  background: #fff5f7;
  transform-origin: top center;
}

.component-iframe {
  height: 320px;
}

.page-iframe {
  height: 400px;
}

.card-info {
  padding: 20px;
}

.card-info h3 {
  margin: 0 0 10px;
  font-size: 16px;
  color: #4a4a4a;
  font-weight: 700;
}

.category-tag {
  display: inline-block;
  padding: 5px 12px;
  background: linear-gradient(135deg, rgba(255, 143, 171, 0.2), rgba(199, 125, 255, 0.2));
  color: var(--primary-purple);
  border: 1px solid var(--primary-purple);
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  padding: 3px 10px;
  background: rgba(125, 211, 252, 0.2);
  color: var(--primary-blue);
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  border: 1px solid rgba(125, 211, 252, 0.3);
}

.empty-state {
  text-align: center;
  padding: 80px;
  animation: fadeInUp 0.5s ease;
}

.empty-icon {
  font-size: 80px;
  margin-bottom: 20px;
  animation: float 3s ease-in-out infinite;
}

.empty-state p {
  font-size: 20px;
  color: #888;
  font-weight: 600;
  margin-bottom: 8px;
}

.empty-state span {
  font-size: 14px;
  color: #aaa;
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.card-enter-active {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.card-leave-active {
  transition: all 0.3s ease;
}

.card-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
}

.card-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.card-move {
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
</style>
