// 按钮组件样式数据

export const buttons = [
  {
    id: 1001,
    name: '新拟物按钮',
    category: '按钮',
    tags: ['neumorphism', '按钮', '新拟物'],
    css: ".btn-base {\n    padding: 15px 40px;\n    font-size: 16px;\n    font-weight: bold;\n    border: none;\n    cursor: pointer;\n    outline: none;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n}\n.btn-neo {\n    background-color: #1e1e2f;\n    color: #a3a3c2;\n    border-radius: 50px;\n    box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.05),\n                -6px -6px 10px rgba(255, 255, 255, 0.05),\n                6px 6px 8px rgba(0, 0, 0, 0.3),\n                6px 6px 10px rgba(0, 0, 0, 0.3);\n    transition: all 0.2s ease;\n}\n.btn-neo:hover { color: #fff; }\n.btn-neo:active {\n    box-shadow: inset -6px -6px 14px rgba(255, 255, 255, 0.05),\n                inset 6px 6px 10px rgba(0, 0, 0, 0.3);\n}",
    preview: '<button class="btn-base btn-neo">Neumorphism</button>'
  },
  {
    id: 1002,
    name: '流光渐变按钮',
    category: '按钮',
    tags: ['gradient', '按钮', '流光'],
    css: ".btn-base {\n    padding: 15px 40px;\n    font-size: 16px;\n    font-weight: bold;\n    border: none;\n    cursor: pointer;\n    outline: none;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n}\n.btn-gradient {\n    color: #fff;\n    border-radius: 50px;\n    background: linear-gradient(90deg, #00d2ff, #3a7bd5, #00d2ff);\n    background-size: 200% auto;\n    transition: 0.5s;\n    box-shadow: 0 0 20px rgba(58, 123, 213, 0.5);\n}\n.btn-gradient:hover {\n    background-position: right center;\n    box-shadow: 0 0 30px rgba(58, 123, 213, 0.8);\n    transform: translateY(-2px);\n}",
    preview: '<button class="btn-base btn-gradient">Gradient</button>'
  },
  {
    id: 1003,
    name: '赛博朋克按钮',
    category: '按钮',
    tags: ['cyberpunk', '按钮', '霓虹'],
    css: ".btn-base {\n    padding: 15px 40px;\n    font-size: 16px;\n    font-weight: bold;\n    border: none;\n    cursor: pointer;\n    outline: none;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n}\n.btn-cyber {\n    background: #fce043;\n    color: #111;\n    clip-path: polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px);\n    border-right: 3px solid #ff003c;\n    border-bottom: 3px solid #ff003c;\n    transition: 0.2s;\n    position: relative;\n}\n.btn-cyber:hover {\n    background: #ff003c;\n    color: #fce043;\n    border-right: 3px solid #fce043;\n    border-bottom: 3px solid #fce043;\n}",
    preview: '<button class="btn-base btn-cyber">Cyberpunk</button>'
  },
  {
    id: 1004,
    name: '幽灵滑块按钮',
    category: '按钮',
    tags: ['ghost', '按钮', '滑块'],
    css: ".btn-base {\n    padding: 15px 40px;\n    font-size: 16px;\n    font-weight: bold;\n    border: none;\n    cursor: pointer;\n    outline: none;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n}\n.btn-ghost {\n    background: transparent;\n    color: #00ffcc;\n    border: 2px solid #00ffcc;\n    border-radius: 8px;\n    position: relative;\n    overflow: hidden;\n    transition: color 0.4s ease-in-out;\n    z-index: 1;\n}\n.btn-ghost::before {\n    content: '';\n    position: absolute;\n    top: 0; left: 0;\n    width: 100%; height: 100%;\n    background: #00ffcc;\n    z-index: -1;\n    transform: scaleX(0);\n    transform-origin: left;\n    transition: transform 0.4s ease-in-out;\n}\n.btn-ghost:hover { color: #1e1e2f; }\n.btn-ghost:hover::before { transform: scaleX(1); }",
    preview: '<button class="btn-base btn-ghost">Ghost Fill</button>'
  },
  {
    id: 1005,
    name: '3D按压按钮',
    category: '按钮',
    tags: ['3d', '按钮', '按压'],
    css: ".btn-base {\n    padding: 15px 40px;\n    font-size: 16px;\n    font-weight: bold;\n    border: none;\n    cursor: pointer;\n    outline: none;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n}\n.btn-3d {\n    background-color: #ff4757;\n    color: white;\n    border-radius: 12px;\n    box-shadow: 0 6px 0 #ff1e34;\n    transition: all 0.1s;\n    position: relative;\n}\n.btn-3d:hover { filter: brightness(1.1); }\n.btn-3d:active {\n    transform: translateY(4px);\n    box-shadow: 0 2px 0 #ff1e34;\n}",
    preview: '<button class="btn-base btn-3d">3D Press</button>'
  }
];
