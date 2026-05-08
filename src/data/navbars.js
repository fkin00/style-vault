// 导航栏组件样式数据

export const navbars = [
  {
    id: 6001,
    name: '毛玻璃全宽导航栏',
    category: '导航',
    tags: ['glassmorphism', '导航栏', '毛玻璃'],
    css: ".nav-glass {\n    width: 100%;\n    height: 70px;\n    background: rgba(255, 255, 255, 0.05);\n    backdrop-filter: blur(20px);\n    -webkit-backdrop-filter: blur(20px);\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 50px;\n    box-shadow: 0 10px 30px rgba(0,0,0,0.1);\n}\n.nav-glass ul { display: flex; gap: 30px; list-style: none; margin: 0; padding: 0; }\n.nav-glass a { color: rgba(255, 255, 255, 0.7); font-weight: 500; text-decoration: none; transition: 0.3s; }\n.nav-glass a:hover { color: #fff; text-shadow: 0 0 10px rgba(255,255,255,0.5); }\n.glass-btn {\n    background: rgba(255, 255, 255, 0.1);\n    border: 1px solid rgba(255,255,255,0.2);\n    padding: 8px 20px;\n    border-radius: 20px;\n    color: #fff;\n    text-decoration: none;\n    transition: 0.3s;\n}\n.glass-btn:hover { background: #fff; color: #111; }\n.logo { font-size: 24px; font-weight: bold; color: #fff; letter-spacing: 1px; margin: 0; }",
    preview: '<nav class="nav-glass"><h1 class="logo">GlassNav</h1><ul><li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Work</a></li></ul><a href="#" class="glass-btn">Get Started</a></nav>'
  },
  {
    id: 6002,
    name: '悬浮胶囊导航栏',
    category: '导航',
    tags: ['pill', '导航栏', '胶囊'],
    css: ".nav-pill {\n    width: 90%;\n    max-width: 800px;\n    height: 60px;\n    margin: 0 auto;\n    background: #2a2a40;\n    border-radius: 50px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 30px;\n    box-shadow: 0 15px 35px rgba(0,0,0,0.3);\n    border: 1px solid rgba(255,255,255,0.05);\n}\n.nav-pill ul { display: flex; gap: 10px; list-style: none; margin: 0; padding: 0; }\n.nav-pill a {\n    color: #a3a3c2;\n    padding: 8px 16px;\n    border-radius: 20px;\n    font-weight: 600;\n    text-decoration: none;\n    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.nav-pill a:hover { background: #3a3a5c; color: #fff; transform: translateY(-2px); }\n.nav-pill .active { background: #00d2ff; color: #111; }\n.nav-pill .active:hover { background: #00d2ff; }\n.logo { font-size: 24px; font-weight: bold; color: #fff; letter-spacing: 1px; margin: 0; }",
    preview: '<nav class="nav-pill"><h1 class="logo">Pill.io</h1><ul><li><a href="#" class="active">Dashboard</a></li><li><a href="#">Projects</a></li><li><a href="#">Team</a></li></ul></nav>'
  },
  {
    id: 6003,
    name: '新拟物导航栏',
    category: '导航',
    tags: ['neumorphism', '导航栏'],
    css: ".nav-neo {\n    width: 100%;\n    height: 80px;\n    background: #1e1e2f;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 50px;\n    box-shadow: 0 10px 15px rgba(0,0,0,0.3), 0 -5px 10px rgba(255,255,255,0.02);\n}\n.nav-neo ul { display: flex; gap: 20px; list-style: none; margin: 0; padding: 0; }\n.nav-neo a {\n    color: #a3a3c2;\n    padding: 10px 20px;\n    border-radius: 12px;\n    font-weight: bold;\n    text-decoration: none;\n    transition: 0.3s;\n}\n.nav-neo a:hover {\n    color: #fff;\n    box-shadow: inset 4px 4px 8px rgba(0,0,0,0.5), inset -4px -4px 8px rgba(255,255,255,0.05);\n}\n.logo { font-size: 24px; font-weight: bold; color: #fff; letter-spacing: 1px; margin: 0; }",
    preview: '<nav class="nav-neo"><h1 class="logo">NeoUI</h1><ul><li><a href="#">Store</a></li><li><a href="#">Mac</a></li><li><a href="#">iPad</a></li></ul></nav>'
  },
  {
    id: 6004,
    name: '赛博朋克装甲导航栏',
    category: '导航',
    tags: ['cyberpunk', '导航栏', '装甲'],
    css: ".nav-cyber {\n    width: 100%;\n    height: 65px;\n    background: transparent;\n    border-bottom: 2px solid #ff003c;\n    border-top: 1px solid rgba(255,0,60,0.3);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 40px;\n    position: relative;\n}\n.nav-cyber::before {\n    content: 'SYS.NAV // 89.2';\n    position: absolute;\n    left: 40px;\n    bottom: -20px;\n    background: #ff003c;\n    color: #111;\n    font-size: 10px;\n    font-weight: bold;\n    padding: 2px 10px;\n    clip-path: polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%);\n}\n.nav-cyber .logo { color: #fce043; text-shadow: 2px 0 #ff003c; font-size: 24px; font-weight: bold; margin: 0; letter-spacing: 1px; }\n.nav-cyber ul { display: flex; list-style: none; margin: 0; padding: 0; }\n.nav-cyber a {\n    color: #fff;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    padding: 0 25px;\n    line-height: 65px;\n    height: 65px;\n    display: block;\n    text-decoration: none;\n    position: relative;\n    transition: 0.2s;\n}\n.nav-cyber a::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 3px;\n    background: #00ffcc;\n    transform: scaleX(0);\n    transition: 0.2s;\n    transform-origin: right;\n}\n.nav-cyber a:hover { background: rgba(0, 255, 204, 0.1); color: #00ffcc; }\n.nav-cyber a:hover::after { transform: scaleX(1); transform-origin: left; }",
    preview: '<nav class="nav-cyber"><h1 class="logo">NIGHT_CITY</h1><ul><li><a href="#">Database</a></li><li><a href="#">Implants</a></li><li><a href="#">Network</a></li></ul></nav>'
  },
  {
    id: 6005,
    name: '极简下划线滑动导航栏',
    category: '导航',
    tags: ['minimal', '导航栏', '下划线'],
    css: ".nav-minimal {\n    width: 100%;\n    height: 70px;\n    background: transparent;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 60px;\n}\n.nav-minimal .logo { font-size: 28px; color: #fff; margin: 0; }\n.nav-minimal ul { display: flex; gap: 40px; list-style: none; margin: 0; padding: 0; }\n.nav-minimal a {\n    color: rgba(255, 255, 255, 0.8);\n    font-size: 16px;\n    font-weight: 500;\n    position: relative;\n    padding-bottom: 8px;\n    text-decoration: none;\n    transition: 0.3s;\n}\n.nav-minimal a::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    width: 0;\n    height: 2px;\n    background: #ff4757;\n    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.nav-minimal a:hover { color: #fff; }\n.nav-minimal a:hover::after { width: 100%; left: 0; }",
    preview: '<nav class="nav-minimal"><h1 class="logo">Minimal.</h1><ul><li><a href="#">Collection</a></li><li><a href="#">Lookbook</a></li><li><a href="#">Our Story</a></li></ul></nav>'
  }
];
