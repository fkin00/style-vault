// 搜索框组件样式数据

export const searches = [
  {
    id: 3002,
    name: '新拟物搜索框',
    category: '输入框',
    tags: ['neumorphism', '搜索框'],
    css: ".search-neo {\n    display: flex;\n    align-items: center;\n    width: 300px;\n    height: 50px;\n    background: #1e1e2f;\n    border-radius: 25px;\n    padding: 0 20px;\n    box-shadow: inset 6px 6px 12px rgba(0, 0, 0, 0.5),\n                inset -6px -6px 12px rgba(255, 255, 255, 0.05);\n    transition: 0.3s;\n}\n.search-neo:focus-within {\n    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.5),\n                -6px -6px 12px rgba(255, 255, 255, 0.05),\n                0 0 15px rgba(0, 210, 255, 0.3);\n}\n.search-neo input {\n    width: 100%;\n    padding-left: 10px;\n    border: none;\n    outline: none;\n    background: transparent;\n    color: #fff;\n    font-size: 16px;\n}\n.search-neo input::placeholder { color: rgba(255, 255, 255, 0.5); }\n.search-neo .icon { font-size: 18px; color: #a3a3c2; transition: 0.3s; }\n.search-neo:focus-within .icon { color: #00d2ff; }",
    preview: '<div class="search-neo"><div class="icon">🔍</div><input type="text" placeholder="Neumorphism search..."></div>'
  },
  {
    id: 3003,
    name: '毛玻璃搜索框',
    category: '输入框',
    tags: ['glassmorphism', '搜索框', '毛玻璃'],
    css: ".search-glass {\n    display: flex;\n    align-items: center;\n    width: 300px;\n    height: 50px;\n    background: rgba(255, 255, 255, 0.1);\n    backdrop-filter: blur(15px);\n    -webkit-backdrop-filter: blur(15px);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    border-radius: 15px;\n    padding: 0 20px;\n    transition: 0.3s;\n}\n.search-glass:focus-within {\n    background: rgba(255, 255, 255, 0.2);\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    box-shadow: 0 10px 25px rgba(0,0,0,0.2);\n    transform: translateY(-2px);\n}\n.search-glass input {\n    width: 100%;\n    padding-left: 10px;\n    border: none;\n    outline: none;\n    background: transparent;\n    color: #fff;\n    font-size: 16px;\n}\n.search-glass input::placeholder { color: rgba(255, 255, 255, 0.5); }\n.search-glass .icon { font-size: 18px; }",
    preview: '<div class="search-glass"><div class="icon">🔍</div><input type="text" placeholder="Glassmorphism search..."></div>'
  },
  {
    id: 3004,
    name: '赛博朋克搜索框',
    category: '输入框',
    tags: ['cyberpunk', '搜索框', '霓虹'],
    css: ".search-cyber {\n    display: flex;\n    align-items: center;\n    width: 300px;\n    height: 50px;\n    background: transparent;\n    border: 2px solid #ff003c;\n    padding: 0 20px;\n    clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);\n    transition: 0.3s ease-in-out;\n    position: relative;\n}\n.search-cyber input {\n    width: 100%;\n    padding-left: 10px;\n    border: none;\n    outline: none;\n    background: transparent;\n    color: #ff003c;\n    font-weight: bold;\n    font-size: 16px;\n}\n.search-cyber input::placeholder { color: rgba(255, 0, 60, 0.4); }\n.search-cyber .icon { font-size: 18px; color: #ff003c; }\n.search-cyber:focus-within {\n    border-color: #00ffcc;\n    background: rgba(0, 255, 204, 0.05);\n    filter: drop-shadow(0 0 8px #00ffcc);\n}\n.search-cyber:focus-within input,\n.search-cyber:focus-within .icon { color: #00ffcc; }\n.search-cyber:focus-within input::placeholder { color: rgba(0, 255, 204, 0.4); }",
    preview: '<div class="search-cyber"><div class="icon">🔍</div><input type="text" placeholder="Cyberpunk search..."></div>'
  },
  {
    id: 3005,
    name: '极简下划线搜索框',
    category: '输入框',
    tags: ['minimalist', '搜索框', '下划线'],
    css: ".search-minimal {\n    position: relative;\n    display: flex;\n    align-items: center;\n    width: 300px;\n    padding: 10px 5px;\n}\n.search-minimal input {\n    width: 100%;\n    padding-left: 35px;\n    border: none;\n    outline: none;\n    background: transparent;\n    color: #fff;\n    font-size: 16px;\n}\n.search-minimal input::placeholder { color: rgba(255, 255, 255, 0.5); }\n.search-minimal .icon {\n    position: absolute;\n    left: 5px;\n    font-size: 18px;\n    color: #888;\n    transition: 0.3s;\n}\n.search-minimal::after {\n    content: '';\n    position: absolute;\n    bottom: 0; left: 0;\n    width: 100%;\n    height: 2px;\n    background: #555;\n    z-index: 1;\n}\n.search-minimal::before {\n    content: '';\n    position: absolute;\n    bottom: 0; left: 50%;\n    width: 0;\n    height: 2px;\n    background: #ff4757;\n    z-index: 2;\n    transition: 0.4s ease;\n}\n.search-minimal:focus-within::before { left: 0; width: 100%; }\n.search-minimal:focus-within .icon { color: #ff4757; }",
    preview: '<div class="search-minimal"><div class="icon">🔍</div><input type="text" placeholder="Minimalist search..."></div>'
  }
];
