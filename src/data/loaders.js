// 加载动画组件样式数据

export const loaders = [
  {
    id: 4001,
    name: '流光圆环加载动画',
    category: '加载动画',
    tags: ['spinner', '加载', '渐变'],
    css: ".loader-container {\n    width: 100px;\n    height: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n.loader-gradient {\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0%, #00d2ff 20%, #3a7bd5 100%);\n    animation: spin 1s linear infinite;\n    -webkit-mask: radial-gradient(transparent 55%, #000 56%);\n    mask: radial-gradient(transparent 55%, #000 56%);\n}\n@keyframes spin { 100% { transform: rotate(360deg); } }",
    preview: '<div class="loader-container"><div class="loader-gradient"></div></div>'
  },
  {
    id: 4002,
    name: '脉冲波纹加载动画',
    category: '加载动画',
    tags: ['ripple', '加载', '脉冲'],
    css: ".loader-container {\n    width: 100px;\n    height: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n.loader-ripple { width: 80px; height: 80px; }\n.loader-ripple div {\n    position: absolute;\n    border: 4px solid #ff4757;\n    opacity: 1;\n    border-radius: 50%;\n    animation: ripple 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n.loader-ripple div:nth-child(2) { animation-delay: -0.5s; }\n@keyframes ripple {\n    0% { top: 36px; left: 36px; width: 0; height: 0; opacity: 1; }\n    100% { top: 0px; left: 0px; width: 72px; height: 72px; opacity: 0; }\n}",
    preview: '<div class="loader-container"><div class="loader-ripple"><div></div><div></div></div></div>'
  },
  {
    id: 4003,
    name: '跳动音符加载动画',
    category: '加载动画',
    tags: ['bars', '加载', '音符'],
    css: ".loader-container {\n    width: 100px;\n    height: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n.loader-bars {\n    display: flex;\n    gap: 6px;\n    align-items: center;\n}\n.loader-bars div {\n    width: 8px;\n    height: 40px;\n    background: #2ed573;\n    border-radius: 4px;\n    animation: bounce 1s ease-in-out infinite;\n}\n.loader-bars div:nth-child(1) { animation-delay: -0.4s; }\n.loader-bars div:nth-child(2) { animation-delay: -0.2s; }\n.loader-bars div:nth-child(3) { animation-delay: 0s; }\n.loader-bars div:nth-child(4) { animation-delay: -0.2s; }\n.loader-bars div:nth-child(5) { animation-delay: -0.4s; }\n@keyframes bounce {\n    0%, 100% { transform: scaleY(0.4); opacity: 0.5; }\n    50% { transform: scaleY(1); opacity: 1; }\n}",
    preview: '<div class="loader-container"><div class="loader-bars"><div></div><div></div><div></div><div></div><div></div></div></div>'
  },
  {
    id: 4004,
    name: '3D翻转方块加载动画',
    category: '加载动画',
    tags: ['cube', '加载', '3d'],
    css: ".loader-container {\n    width: 100px;\n    height: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n.loader-cube {\n    width: 50px;\n    height: 50px;\n    background-color: #ffa502;\n    animation: flipCube 1.2s infinite ease-in-out;\n}\n@keyframes flipCube {\n    0% { transform: perspective(120px) rotateX(0deg) rotateY(0deg); }\n    50% { transform: perspective(120px) rotateX(-180deg) rotateY(0deg); }\n    100% { transform: perspective(120px) rotateX(-180deg) rotateY(-180deg); }\n}",
    preview: '<div class="loader-container"><div class="loader-cube"></div></div>'
  },
  {
    id: 4005,
    name: '赛博故障文字加载动画',
    category: '加载动画',
    tags: ['glitch', '加载', '故障'],
    css: ".loader-container {\n    width: 100px;\n    height: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n.loader-glitch {\n    font-size: 24px;\n    font-weight: bold;\n    color: #fff;\n    position: relative;\n    letter-spacing: 5px;\n    text-transform: uppercase;\n}\n.loader-glitch::before,\n.loader-glitch::after {\n    content: \"LOADING\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n.loader-glitch::before {\n    color: #ff003c;\n    z-index: -1;\n    animation: glitch-anim-1 2s infinite linear alternate-reverse;\n}\n.loader-glitch::after {\n    color: #00ffcc;\n    z-index: -2;\n    animation: glitch-anim-2 3s infinite linear alternate-reverse;\n}\n@keyframes glitch-anim-1 {\n    0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }\n    20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }\n    40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); }\n    60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }\n    80% { clip-path: inset(10% 0 70% 0); transform: translate(-1px, 1px); }\n    100% { clip-path: inset(30% 0 20% 0); transform: translate(1px, -1px); }\n}\n@keyframes glitch-anim-2 {\n    0% { clip-path: inset(10% 0 60% 0); transform: translate(2px, -1px); }\n    20% { clip-path: inset(30% 0 20% 0); transform: translate(-2px, 1px); }\n    40% { clip-path: inset(70% 0 10% 0); transform: translate(2px, 2px); }\n    60% { clip-path: inset(20% 0 50% 0); transform: translate(-2px, -2px); }\n    80% { clip-path: inset(50% 0 30% 0); transform: translate(1px, -1px); }\n    100% { clip-path: inset(5% 0 80% 0); transform: translate(-1px, 1px); }\n}",
    preview: '<div class="loader-container"><div class="loader-glitch">LOADING</div></div>'
  }
];
