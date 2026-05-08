// 高级组件样式数据

export const advancedComponents = [
  {
    id: 7001,
    name: '灵动指示器导航栏',
    category: '导航',
    tags: ['liquid', '导航', '指示器'],
    css: ".nav-menu {\n    position: relative;\n    display: flex;\n    background: rgba(255, 255, 255, 0.05);\n    border-radius: 50px;\n    padding: 10px;\n    box-shadow: 0 10px 30px rgba(0,0,0,0.3);\n}\n.nav-item {\n    position: relative;\n    padding: 12px 30px;\n    color: rgba(255, 255, 255, 0.5);\n    text-decoration: none;\n    font-weight: bold;\n    z-index: 1;\n    transition: color 0.3s ease;\n}\n.nav-item:hover, .nav-item.active { color: #fff; }\n.nav-indicator {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    width: 100px;\n    height: calc(100% - 20px);\n    background: #00d2ff;\n    border-radius: 30px;\n    transition: left 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    box-shadow: 0 5px 15px rgba(0, 210, 255, 0.4);\n    z-index: 0;\n}\n.nav-menu .nav-item:nth-child(1):hover ~ .nav-indicator { left: 10px; width: 95px; }\n.nav-menu .nav-item:nth-child(2):hover ~ .nav-indicator { left: 105px; width: 110px; }\n.nav-menu .nav-item:nth-child(3):hover ~ .nav-indicator { left: 215px; width: 105px; }\n.nav-menu .nav-item:nth-child(4):hover ~ .nav-indicator { left: 320px; width: 115px; }",
    preview: '<div class="nav-menu"><a href="#" class="nav-item active">Home</a><a href="#" class="nav-item">Products</a><a href="#" class="nav-item">Services</a><a href="#" class="nav-item">Contact</a><div class="nav-indicator"></div></div>'
  },
  {
    id: 7002,
    name: '霓虹发光滑动条',
    category: '滑动条',
    tags: ['range', 'slider', '霓虹'],
    css: ".slider-container { width: 300px; }\ninput[type=\"range\"] {\n    -webkit-appearance: none;\n    width: 100%;\n    height: 8px;\n    background: rgba(255, 255, 255, 0.1);\n    border-radius: 5px;\n    outline: none;\n}\ninput[type=\"range\"]::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 8px;\n    border-radius: 5px;\n}\ninput[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    width: 24px;\n    height: 24px;\n    background: #fff;\n    border-radius: 50%;\n    margin-top: -8px;\n    cursor: pointer;\n    border: 4px solid #ff00cc;\n    box-shadow: 0 0 15px #ff00cc, 0 0 30px #ff00cc;\n    transition: 0.2s;\n}\ninput[type=\"range\"]:active::-webkit-slider-thumb { transform: scale(1.2); }",
    preview: '<div class="slider-container"><input type="range" min="1" max="100" value="50"></div>'
  },
  {
    id: 7003,
    name: 'Q弹复选框',
    category: '复选框',
    tags: ['checkbox', '弹性', '动画'],
    css: ".bouncy-checkbox {\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    color: #fff;\n    cursor: pointer;\n    font-size: 18px;\n    user-select: none;\n}\n.bouncy-checkbox input { display: none; }\n.check-box {\n    position: relative;\n    width: 28px;\n    height: 28px;\n    background: transparent;\n    border: 2px solid #a3a3c2;\n    border-radius: 8px;\n    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.check-box::after {\n    content: '';\n    position: absolute;\n    top: 4px;\n    left: 9px;\n    width: 6px;\n    height: 12px;\n    border-right: 3px solid #fff;\n    border-bottom: 3px solid #fff;\n    transform: rotate(45deg) scale(0);\n    opacity: 0;\n    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.bouncy-checkbox input:checked + .check-box {\n    background: #34c759;\n    border-color: #34c759;\n    transform: scale(1.1);\n}\n.bouncy-checkbox input:checked + .check-box::after {\n    transform: rotate(45deg) scale(1);\n    opacity: 1;\n}",
    preview: '<label class="bouncy-checkbox"><input type="checkbox"><div class="check-box"></div>Remember Me</label>'
  },
  {
    id: 7004,
    name: '悬浮提示气泡',
    category: '气泡',
    tags: ['tooltip', '提示', '气泡'],
    css: ".tooltip-wrap {\n    position: relative;\n    color: #00d2ff;\n    font-weight: bold;\n    font-size: 20px;\n    cursor: pointer;\n    border-bottom: 1px dashed #00d2ff;\n}\n.tooltip-wrap::before {\n    content: attr(data-tooltip);\n    position: absolute;\n    bottom: 150%;\n    left: 50%;\n    transform: translateX(-50%) translateY(10px);\n    background: #fff;\n    color: #111;\n    padding: 8px 15px;\n    border-radius: 8px;\n    font-size: 14px;\n    white-space: nowrap;\n    opacity: 0;\n    visibility: hidden;\n    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    box-shadow: 0 5px 15px rgba(0,0,0,0.3);\n}\n.tooltip-wrap::after {\n    content: '';\n    position: absolute;\n    bottom: 110%;\n    left: 50%;\n    transform: translateX(-50%) translateY(10px);\n    border-width: 8px;\n    border-style: solid;\n    border-color: #fff transparent transparent transparent;\n    opacity: 0;\n    visibility: hidden;\n    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.tooltip-wrap:hover::before,\n.tooltip-wrap:hover::after {\n    opacity: 1;\n    visibility: visible;\n    transform: translateX(-50%) translateY(0);\n}",
    preview: '<span class="tooltip-wrap" data-tooltip="This is a pure CSS tooltip!">Hover me</span>'
  },
  {
    id: 7005,
    name: '丝滑手风琴折叠面板',
    category: '折叠',
    tags: ['accordion', '折叠', '手风琴'],
    css: ".accordion { width: 400px; background: rgba(255, 255, 255, 0.05); border-radius: 10px; overflow: hidden; }\n.accordion-item { border-bottom: 1px solid rgba(255,255,255,0.1); }\n.accordion-item:last-child { border-bottom: none; }\n.accordion-item input { display: none; }\n.accordion-title {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n    color: #fff;\n    cursor: pointer;\n    font-weight: bold;\n    transition: 0.3s;\n}\n.accordion-title:hover { background: rgba(255, 255, 255, 0.1); }\n.accordion-title::after {\n    content: '+';\n    font-size: 24px;\n    color: #00d2ff;\n    transition: transform 0.3s;\n}\n.accordion-content {\n    max-height: 0;\n    padding: 0 20px;\n    color: rgba(255, 255, 255, 0.6);\n    line-height: 1.6;\n    overflow: hidden;\n    transition: max-height 0.4s ease, padding 0.4s ease;\n}\n.accordion-item input:checked + .accordion-title::after {\n    transform: rotate(45deg);\n    color: #ff4757;\n}\n.accordion-item input:checked ~ .accordion-content {\n    max-height: 200px;\n    padding: 0 20px 20px 20px;\n}",
    preview: '<div class="accordion"><div class="accordion-item"><input type="radio" name="faq" id="faq1" checked><label class="accordion-title" for="faq1">What is this component?</label><div class="accordion-content">This is a CSS-only accordion using radio buttons.</div></div><div class="accordion-item"><input type="radio" name="faq" id="faq2"><label class="accordion-title" for="faq2">How does it work?</label><div class="accordion-content">It uses max-height for smooth animation.</div></div></div>'
  }
];
