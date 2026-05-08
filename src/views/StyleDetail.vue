<template>
  <div class="detail-page">
    <!-- 全屏预览 -->
    <div class="preview-fullscreen">
      <iframe
        :srcdoc="previewDoc"
        class="preview-iframe"
        sandbox="allow-scripts"
      ></iframe>

      <!-- 左上角返回按钮和标签 -->
      <transition name="float-in">
        <div class="top-left">
          <button @click="goBack" class="btn-back">
            <span class="btn-icon">←</span>
            <span>返回</span>
          </button>
          <span class="category-tag">
            <span class="tag-icon">{{ getCategoryIcon(currentStyle?.category) }}</span>
            {{ currentStyle?.category }}
          </span>
        </div>
      </transition>

      <!-- 右上角毛玻璃按钮 -->
      <transition name="float-in">
        <button @click="toggleSidebar" class="btn-glass-float">
          <span class="glass-icon">{{ showSidebar ? '✕' : '📄' }}</span>
          <span class="glass-text">{{ showSidebar ? '关闭' : '源码' }}</span>
        </button>
      </transition>
    </div>

    <!-- 侧边源码面板 -->
    <transition name="slide-right">
      <div v-if="showSidebar" class="code-sidebar">
        <div class="sidebar-header">
          <h3>
            <span class="header-icon">✨</span>
            源码
          </h3>
          <button @click="showSidebar = false" class="btn-close">
            <span>✕</span>
          </button>
        </div>

        <div class="sidebar-tabs">
          <button
            :class="['sidebar-tab', { active: activeTab === 'html' }]"
            @click="activeTab = 'html'"
          >
            <span class="tab-icon">🎨</span>
            HTML
          </button>
          <button
            :class="['sidebar-tab', { active: activeTab === 'css' }]"
            @click="activeTab = 'css'"
          >
            <span class="tab-icon">🎀</span>
            CSS
          </button>
        </div>

        <div class="sidebar-actions">
          <button @click="copyCode" class="btn-copy">
            <span class="copy-icon">{{ copied ? '✓' : '📋' }}</span>
            <span>{{ copied ? '已复制!' : '复制源码' }}</span>
          </button>
        </div>

        <div class="sidebar-code">
          <pre><code v-html="highlightedCode"></code></pre>
        </div>
      </div>
    </transition>

    <!-- 复制成功提示 -->
    <transition name="toast">
      <div v-if="copied" class="toast-notification">
        <span class="toast-icon">🎉</span>
        <span>复制成功!</span>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { allStyles } from '../data/index.js'
import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'

hljs.registerLanguage('xml', xml)
hljs.registerLanguage('css', css)

const route = useRoute()
const router = useRouter()
const activeTab = ref('html')
const copied = ref(false)
const showSidebar = ref(false)

const currentStyle = computed(() => {
  const id = parseInt(route.params.id)
  return allStyles.find(s => s.id === id)
})

// 获取分类图标
const getCategoryIcon = (category) => {
  const icons = {
    '按钮': '🔘',
    '开关': '🔌',
    '加载动画': '⏳',
    '卡片': '🃏',
    '导航': '🧭',
    '输入框': '✏️',
    '滑动条': '🎚️',
    '复选框': '☑️',
    '气泡': '💬',
    '折叠': '📂',
    '背景': '🌈',
    '表单': '📝'
  }
  return icons[category] || '✨'
}

const previewDoc = computed(() => {
  if (!currentStyle.value) return ''
  // If the style has custom html (with JS like canvas animations), use it directly
  if (currentStyle.value.html) {
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
      background: #fef0f5;
      font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    ${currentStyle.value.css}
  </style>
</head>
<body>
  ${currentStyle.value.html}
</body>
</html>`
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
      background: #fef0f5;
      font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    ${currentStyle.value.css}
  </style>
</head>
<body>
  ${currentStyle.value.preview}
</body>
</html>`
})

const highlightedCode = computed(() => {
  if (!currentStyle.value) return ''
  let code
  if (activeTab.value === 'html') {
    // Use full HTML if available, otherwise build from CSS + preview
    code = currentStyle.value.html || getFullSource()
  } else {
    code = currentStyle.value.css
  }
  return hljs.highlight(code, { language: activeTab.value === 'html' ? 'xml' : 'css' }).value
})

const getFullSource = () => {
  if (!currentStyle.value) return ''
  // If the style has custom html (with JS), use it
  if (currentStyle.value.html) {
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
      background: #fef0f5;
      font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    ${currentStyle.value.css}
  </style>
</head>
<body>
  ${currentStyle.value.html}
</body>
</html>`
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
      background: #fef0f5;
      font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    ${currentStyle.value.css}
  </style>
</head>
<body>
  ${currentStyle.value.preview}
</body>
</html>`
}

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value
}

const goBack = () => {
  router.push('/')
}

const copyCode = async () => {
  let code
  if (activeTab.value === 'html') {
    code = currentStyle.value.html || getFullSource()
  } else {
    code = currentStyle.value.css
  }
  await navigator.clipboard.writeText(code)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<style scoped>
.detail-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    #fff5f7 0%,
    #fef0f5 25%,
    #fdf2f8 50%,
    #fce7f3 75%,
    #fbcfe8 100%
  );
}

/* 全屏预览 */
.preview-fullscreen {
  width: 100%;
  height: 100%;
  position: relative;
}

.preview-iframe {
  width: 100%;
  height: 100%;
  border: none;
  background: #fef0f5;
}

/* 左上角返回和标签 */
.top-left {
  position: fixed;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 100;
}

.btn-back {
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 143, 171, 0.3);
  border-radius: 50px;
  color: #ff8fab;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Nunito', sans-serif;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 20px rgba(255, 143, 171, 0.2);
  display: flex;
  align-items: center;
  gap: 6px;
}

.btn-icon {
  font-size: 16px;
  transition: transform 0.3s ease;
}

.btn-back:hover {
  background: rgba(255, 143, 171, 0.95);
  color: white;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 25px rgba(255, 143, 171, 0.4);
}

.btn-back:hover .btn-icon {
  transform: translateX(-3px);
}

.top-left .category-tag {
  padding: 12px 18px;
  background: linear-gradient(135deg, rgba(199, 125, 255, 0.9), rgba(125, 211, 252, 0.9));
  backdrop-filter: blur(20px);
  border: 2px solid rgba(199, 125, 255, 0.5);
  border-radius: 50px;
  color: white;
  font-size: 13px;
  font-weight: 600;
  box-shadow: 0 4px 20px rgba(199, 125, 255, 0.3);
  display: flex;
  align-items: center;
  gap: 6px;
}

.tag-icon {
  font-size: 14px;
}

/* 右上角毛玻璃按钮 */
.btn-glass-float {
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 22px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 2px solid rgba(199, 125, 255, 0.3);
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 100;
  box-shadow: 0 4px 20px rgba(199, 125, 255, 0.2);
}

.btn-glass-float:hover {
  background: linear-gradient(135deg, rgba(199, 125, 255, 0.95), rgba(125, 211, 252, 0.95));
  color: white;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 25px rgba(199, 125, 255, 0.4);
  border-color: transparent;
}

.glass-icon {
  font-size: 18px;
}

.glass-text {
  color: #c77dff;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Nunito', sans-serif;
}

.btn-glass-float:hover .glass-text {
  color: white;
}

/* 侧边栏 */
.code-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 500px;
  max-width: 90vw;
  height: 100vh;
  background: linear-gradient(180deg, #fff5f7 0%, #fef0f5 100%);
  box-shadow: -8px 0 40px rgba(255, 143, 171, 0.2);
  z-index: 200;
  display: flex;
  flex-direction: column;
  border-left: 2px solid rgba(255, 143, 171, 0.2);
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 2px solid rgba(255, 143, 171, 0.15);
}

.sidebar-header h3 {
  margin: 0;
  color: #ff8fab;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
}

.header-icon {
  font-size: 22px;
  animation: sparkle-rotate 2s ease-in-out infinite;
}

@keyframes sparkle-rotate {
  0%, 100% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.1); }
}

.btn-close {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 143, 171, 0.15);
  border: none;
  border-radius: 50%;
  color: #ff8fab;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-close:hover {
  background: #ff8fab;
  color: white;
  transform: rotate(90deg) scale(1.1);
}

.sidebar-tabs {
  display: flex;
  padding: 0 24px;
  gap: 10px;
  border-bottom: 2px solid rgba(255, 143, 171, 0.15);
}

.sidebar-tab {
  padding: 14px 24px;
  background: transparent;
  border: none;
  color: #999;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Nunito', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  border-radius: 50px;
}

.tab-icon {
  font-size: 16px;
}

.sidebar-tab:hover {
  color: #c77dff;
  background: rgba(199, 125, 255, 0.1);
}

.sidebar-tab.active {
  color: white;
  background: linear-gradient(135deg, #c77dff, #7dd3fc);
  box-shadow: 0 4px 15px rgba(199, 125, 255, 0.3);
}

.sidebar-tab.active::after {
  display: none;
}

.sidebar-actions {
  padding: 16px 24px;
  border-bottom: 2px solid rgba(255, 143, 171, 0.15);
}

.btn-copy {
  width: 100%;
  padding: 14px 20px;
  background: linear-gradient(135deg, #ff8fab 0%, #c77dff 100%);
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Nunito', sans-serif;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 20px rgba(255, 143, 171, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.copy-icon {
  font-size: 18px;
}

.btn-copy:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 25px rgba(255, 143, 171, 0.5);
}

.btn-copy:active {
  transform: translateY(0) scale(0.98);
}

.sidebar-code {
  flex: 1;
  overflow: auto;
  background: rgba(255, 255, 255, 0.5);
}

.sidebar-code pre {
  margin: 0;
  padding: 20px 24px;
}

.sidebar-code code {
  font-family: 'Consolas', 'Monaco', 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.7;
  color: #666;
}

/* Toast 提示 */
.toast-notification {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #86efac 0%, #7dd3fc 100%);
  padding: 16px 28px;
  border-radius: 50px;
  color: white;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Nunito', sans-serif;
  box-shadow: 0 8px 30px rgba(134, 239, 172, 0.4);
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 300;
}

.toast-icon {
  font-size: 20px;
}

/* 过渡动画 */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.float-in-enter-active {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: 0.2s;
}

.float-in-enter-from {
  opacity: 0;
  transform: translateY(-20px) scale(0.8);
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(20px) scale(0.8);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px) scale(0.8);
}
</style>
