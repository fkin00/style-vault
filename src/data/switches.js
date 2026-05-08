// 开关组件样式数据

export const switches = [
  {
    id: 2001,
    name: 'iOS经典开关',
    category: '开关',
    tags: ['ios', '开关', 'toggle'],
    css: "input[type=\"checkbox\"] { display: none; }\n.switch-label { display: flex; align-items: center; gap: 20px; color: #fff; font-size: 16px; font-weight: bold; cursor: pointer; }\n.ios-switch {\n    position: relative;\n    width: 60px;\n    height: 32px;\n    background: #39393d;\n    border-radius: 32px;\n    transition: 0.3s;\n}\n.ios-switch::after {\n    content: '';\n    position: absolute;\n    top: 2px;\n    left: 2px;\n    width: 28px;\n    height: 28px;\n    background: #fff;\n    border-radius: 50%;\n    transition: 0.3s;\n    box-shadow: 0 2px 5px rgba(0,0,0,0.2);\n}\ninput:checked + .ios-switch { background: #34c759; }\ninput:checked + .ios-switch::after { transform: translateX(28px); }",
    preview: '<label class="switch-label"><input type="checkbox"><div class="ios-switch"></div>iOS Classic</label>'
  },
  {
    id: 2002,
    name: '新拟物开关',
    category: '开关',
    tags: ['neumorphism', '开关', 'toggle'],
    css: "input[type=\"checkbox\"] { display: none; }\n.switch-label { display: flex; align-items: center; gap: 20px; color: #fff; font-size: 16px; font-weight: bold; cursor: pointer; }\n.neo-switch {\n    position: relative;\n    width: 80px;\n    height: 40px;\n    background: #1e1e2f;\n    border-radius: 40px;\n    box-shadow: inset 5px 5px 10px rgba(0,0,0,0.5),\n                inset -5px -5px 10px rgba(255,255,255,0.05);\n}\n.neo-switch::after {\n    content: '';\n    position: absolute;\n    top: 4px;\n    left: 4px;\n    width: 32px;\n    height: 32px;\n    background: #1e1e2f;\n    border-radius: 50%;\n    box-shadow: 4px 4px 8px rgba(0,0,0,0.5),\n               -4px -4px 8px rgba(255,255,255,0.05);\n    transition: 0.4s ease;\n}\ninput:checked + .neo-switch::after {\n    transform: translateX(40px);\n    background: #00d2ff;\n    box-shadow: 0 0 15px #00d2ff,\n                inset 2px 2px 5px rgba(255,255,255,0.5);\n}",
    preview: '<label class="switch-label"><input type="checkbox"><div class="neo-switch"></div>Neumorphism</label>'
  },
  {
    id: 2003,
    name: '赛博朋克开关',
    category: '开关',
    tags: ['cyberpunk', '开关', 'toggle'],
    css: "input[type=\"checkbox\"] { display: none; }\n.switch-label { display: flex; align-items: center; gap: 20px; color: #fff; font-size: 16px; font-weight: bold; cursor: pointer; }\n.cyber-switch {\n    position: relative;\n    width: 70px;\n    height: 30px;\n    border: 2px solid #ff003c;\n    background: transparent;\n    clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);\n    transition: 0.3s;\n}\n.cyber-switch::after {\n    content: '';\n    position: absolute;\n    top: 2px;\n    left: 2px;\n    width: 20px;\n    height: 22px;\n    background: #ff003c;\n    transition: 0.3s;\n    clip-path: polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px);\n}\ninput:checked + .cyber-switch {\n    border-color: #fce043;\n    background: rgba(252, 224, 67, 0.1);\n}\ninput:checked + .cyber-switch::after {\n    background: #fce043;\n    transform: translateX(42px);\n}",
    preview: '<label class="switch-label"><input type="checkbox"><div class="cyber-switch"></div>Cyberpunk</label>'
  },
  {
    id: 2004,
    name: '日夜切换开关',
    category: '开关',
    tags: ['day-night', '开关', 'toggle'],
    css: "input[type=\"checkbox\"] { display: none; }\n.switch-label { display: flex; align-items: center; gap: 20px; color: #fff; font-size: 16px; font-weight: bold; cursor: pointer; }\n.dn-switch {\n    position: relative;\n    width: 80px;\n    height: 40px;\n    background: #2c3e50;\n    border-radius: 40px;\n    overflow: hidden;\n    transition: 0.5s;\n}\n.dn-switch::before {\n    content: '🌙';\n    position: absolute;\n    right: 12px;\n    top: 9px;\n    font-size: 18px;\n    transition: 0.5s;\n}\n.dn-switch::after {\n    content: '';\n    position: absolute;\n    top: 4px;\n    left: 4px;\n    width: 32px;\n    height: 32px;\n    background: #ecf0f1;\n    border-radius: 50%;\n    transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    box-shadow: inset -4px -2px 6px rgba(0,0,0,0.3);\n}\ninput:checked + .dn-switch { background: #3498db; }\ninput:checked + .dn-switch::before {\n    content: '☀️';\n    transform: translateX(-40px) rotate(180deg);\n}\ninput:checked + .dn-switch::after {\n    transform: translateX(40px);\n    background: #f1c40f;\n    box-shadow: 0 0 15px #f1c40f;\n}",
    preview: '<label class="switch-label"><input type="checkbox"><div class="dn-switch"></div>Day / Night</label>'
  },
  {
    id: 2005,
    name: '果冻弹性开关',
    category: '开关',
    tags: ['elastic', '开关', '果冻'],
    css: "input[type=\"checkbox\"] { display: none; }\n.switch-label { display: flex; align-items: center; gap: 20px; color: #fff; font-size: 16px; font-weight: bold; cursor: pointer; }\n.elastic-switch {\n    position: relative;\n    width: 64px;\n    height: 32px;\n    background: #444;\n    border-radius: 32px;\n    transition: 0.3s;\n}\n.elastic-switch::after {\n    content: '';\n    position: absolute;\n    top: 4px;\n    left: 4px;\n    width: 24px;\n    height: 24px;\n    background: #fff;\n    border-radius: 24px;\n    transition: width 0.2s ease, transform 0.3s ease;\n}\n.switch-label:active .elastic-switch::after { width: 38px; }\ninput:checked + .elastic-switch { background: #8e44ad; }\ninput:checked + .elastic-switch::after { transform: translateX(32px); }\n.switch-label:active input:checked + .elastic-switch::after { transform: translateX(18px); }",
    preview: '<label class="switch-label"><input type="checkbox"><div class="elastic-switch"></div>Elastic</label>'
  }
];
