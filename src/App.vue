<template>
  <div class="app-background">
    <!-- 装饰性浮动元素 -->
    <div class="deco-container">
      <div class="star star-1">✦</div>
      <div class="star star-2">✧</div>
      <div class="star star-3">⋆</div>
      <div class="star star-4">✦</div>
      <div class="star star-5">✧</div>
      <div class="cloud cloud-1">☁</div>
      <div class="cloud cloud-2">☁</div>
      <div class="bubble bubble-1"></div>
      <div class="bubble bubble-2"></div>
      <div class="bubble bubble-3"></div>
      <div class="sparkle sparkle-1">✨</div>
      <div class="sparkle sparkle-2">✨</div>
      <div class="sparkle sparkle-3">✨</div>
    </div>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="page" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');

.app-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(
    135deg,
    #fff5f7 0%,
    #fef0f5 25%,
    #fdf2f8 50%,
    #fce7f3 75%,
    #fbcfe8 100%
  );
  overflow: hidden;
}

/* 浮动星星 */
.star {
  position: absolute;
  color: #ffb6c1;
  font-size: 20px;
  animation: twinkle 2s ease-in-out infinite;
  text-shadow: 0 0 10px rgba(255, 182, 193, 0.5);
}
.star-1 { top: 8%; left: 5%; animation-delay: 0s; font-size: 24px; }
.star-2 { top: 15%; right: 10%; animation-delay: 0.3s; font-size: 18px; }
.star-3 { top: 30%; left: 8%; animation-delay: 0.6s; font-size: 16px; }
.star-4 { bottom: 20%; right: 15%; animation-delay: 0.9s; font-size: 22px; }
.star-5 { top: 50%; left: 3%; animation-delay: 1.2s; font-size: 14px; }

/* 浮动云朵 */
.cloud {
  position: absolute;
  color: rgba(255, 255, 255, 0.8);
  font-size: 60px;
  animation: floatCloud 20s ease-in-out infinite;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}
.cloud-1 { top: 10%; right: 5%; animation-delay: 0s; }
.cloud-2 { bottom: 15%; left: 8%; animation-delay: -8s; }

/* 浮动泡泡 */
.bubble {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 182, 193, 0.3), rgba(221, 160, 221, 0.3));
  animation: floatBubble 15s ease-in-out infinite;
}
.bubble-1 { width: 40px; height: 40px; top: 20%; left: 15%; animation-delay: 0s; }
.bubble-2 { width: 25px; height: 25px; top: 60%; right: 20%; animation-delay: -5s; }
.bubble-3 { width: 35px; height: 35px; bottom: 30%; left: 25%; animation-delay: -10s; }

/* 闪光效果 */
.sparkle {
  position: absolute;
  color: #ffd700;
  font-size: 16px;
  animation: sparkle 3s ease-in-out infinite;
}
.sparkle-1 { top: 25%; right: 20%; animation-delay: 0s; }
.sparkle-2 { bottom: 25%; left: 15%; animation-delay: -1s; }
.sparkle-3 { top: 45%; left: 25%; animation-delay: -2s; }

@keyframes twinkle {
  0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
  50% { opacity: 0.5; transform: scale(0.8) rotate(180deg); }
}

@keyframes floatCloud {
  0%, 100% { transform: translateX(0) translateY(0); }
  25% { transform: translateX(30px) translateY(-10px); }
  50% { transform: translateX(50px) translateY(5px); }
  75% { transform: translateX(20px) translateY(-5px); }
}

@keyframes floatBubble {
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
  50% { transform: translateY(-30px) scale(1.1); opacity: 0.8; }
}

@keyframes sparkle {
  0%, 100% { opacity: 0; transform: scale(0); }
  50% { opacity: 1; transform: scale(1); }
}

/* 页面切换动画 - 简单淡入淡出 */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  overflow-x: hidden;
  font-family: 'Nunito', -apple-system, BlinkMacSystemFont, sans-serif;
}
</style>
