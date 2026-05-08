// 卡片组件样式数据

export const cards = [
  {
    id: 6001,
    name: '毛玻璃个人主页卡片',
    category: '卡片',
    tags: ['glassmorphism', '卡片', '个人主页'],
    css: ".card-glass {\n    width: 320px;\n    background: rgba(255, 255, 255, 0.1);\n    backdrop-filter: blur(20px);\n    -webkit-backdrop-filter: blur(20px);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    border-radius: 20px;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    box-shadow: 0 15px 35px rgba(0,0,0,0.2);\n    transition: transform 0.3s ease;\n}\n.card-glass:hover { transform: translateY(-10px); }\n.glass-avatar {\n    width: 100px; height: 100px;\n    border-radius: 50%;\n    background: linear-gradient(45deg, #ff9ff3, #feca57);\n    border: 4px solid rgba(255, 255, 255, 0.3);\n    margin-bottom: 15px;\n}\n.card-glass h3 { color: #fff; font-size: 22px; margin: 0 0 5px; }\n.card-glass p { color: rgba(255,255,255,0.6); font-size: 14px; margin: 0 0 20px; }\n.glass-stats {\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    border-top: 1px solid rgba(255,255,255,0.1);\n    padding-top: 15px;\n}\n.glass-stats div { text-align: center; color: #fff; }\n.glass-stats span { display: block; font-size: 12px; color: rgba(255,255,255,0.5); }",
    preview: '<div class="card-glass"><div class="glass-avatar"></div><h3>John Doe</h3><p>UI/UX Designer</p><div class="glass-stats"><div>24<span>Posts</span></div><div>1.2k<span>Followers</span></div><div>89<span>Following</span></div></div></div>'
  },
  {
    id: 6002,
    name: '新拟物数据卡片',
    category: '卡片',
    tags: ['neumorphism', '卡片', '数据'],
    css: ".card-neo {\n    width: 300px;\n    background: #1e1e2f;\n    border-radius: 20px;\n    padding: 30px;\n    box-shadow: -8px -8px 15px rgba(255,255,255,0.05),\n                 8px  8px 15px rgba(0,0,0,0.5);\n}\n.card-neo h4 { color: #a3a3c2; font-weight: 500; margin: 0 0 10px; }\n.card-neo .number { color: #fff; font-size: 36px; font-weight: bold; margin: 0 0 20px; }\n.neo-chart {\n    display: flex;\n    align-items: flex-end;\n    gap: 10px;\n    height: 80px;\n}\n.neo-bar {\n    flex: 1;\n    background: #1e1e2f;\n    border-radius: 5px;\n    box-shadow: inset 3px 3px 6px rgba(0,0,0,0.5), inset -3px -3px 6px rgba(255,255,255,0.05);\n    position: relative;\n    overflow: hidden;\n}\n.neo-bar::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    background: #00d2ff;\n    border-radius: 5px;\n    box-shadow: 0 0 10px #00d2ff;\n}\n.neo-bar:nth-child(1)::after { height: 40%; }\n.neo-bar:nth-child(2)::after { height: 70%; }\n.neo-bar:nth-child(3)::after { height: 50%; }\n.neo-bar:nth-child(4)::after { height: 90%; }\n.neo-bar:nth-child(5)::after { height: 30%; }",
    preview: '<div class="card-neo"><h4>Monthly Revenue</h4><div class="number">$ 24,592</div><div class="neo-chart"><div class="neo-bar"></div><div class="neo-bar"></div><div class="neo-bar"></div><div class="neo-bar"></div><div class="neo-bar"></div></div></div>'
  },
  {
    id: 6003,
    name: '赛博朋克装甲卡片',
    category: '卡片',
    tags: ['cyberpunk', '卡片', '装甲'],
    css: ".card-cyber {\n    width: 320px;\n    background: rgba(17, 17, 17, 0.8);\n    border: 2px solid #ff003c;\n    padding: 25px;\n    clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px);\n    position: relative;\n    transition: 0.3s;\n}\n.card-cyber:hover {\n    box-shadow: 0 0 20px rgba(255,0,60,0.5);\n    border-color: #fce043;\n}\n.card-cyber::before {\n    content: 'SYSTEM_READY';\n    position: absolute;\n    top: -2px;\n    right: 20px;\n    background: #ff003c;\n    color: #111;\n    font-size: 10px;\n    padding: 2px 8px;\n    font-weight: bold;\n}\n.cyber-title { color: #00ffcc; font-size: 18px; margin: 0 0 15px; letter-spacing: 2px; }\n.cyber-data { color: #fff; font-size: 14px; border-left: 2px solid #00ffcc; padding-left: 10px; margin: 0 0 10px; }\n.cyber-data span { color: #fce043; float: right; }",
    preview: '<div class="card-cyber"><div class="cyber-title">NODE_DATA // 001</div><div class="cyber-data">CPU Load <span>89%</span></div><div class="cyber-data">Memory <span>16 GB</span></div><div class="cyber-data">Uplink <span>1024 Tbps</span></div></div>'
  },
  {
    id: 6004,
    name: '底部悬浮折叠卡片',
    category: '卡片',
    tags: ['hover', '卡片', '折叠'],
    css: ".card-reveal {\n    width: 300px;\n    height: 400px;\n    border-radius: 15px;\n    overflow: hidden;\n    position: relative;\n    background: linear-gradient(to bottom, #2c3e50, #3498db);\n    box-shadow: 0 10px 20px rgba(0,0,0,0.3);\n}\n.reveal-img {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 80px;\n    color: rgba(255,255,255,0.5);\n    transition: transform 0.5s ease;\n}\n.reveal-content {\n    position: absolute;\n    bottom: -150px;\n    left: 0;\n    width: 100%;\n    background: rgba(255, 255, 255, 0.95);\n    padding: 25px;\n    border-radius: 20px 20px 0 0;\n    transition: bottom 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.card-reveal:hover .reveal-content { bottom: 0; }\n.card-reveal:hover .reveal-img { transform: scale(1.1) translateY(-20px); }\n.reveal-content h3 { color: #333; margin: 0 0 10px; }\n.reveal-content p { color: #666; font-size: 14px; margin: 0 0 15px; }\n.reveal-btn {\n    background: #3498db;\n    color: #fff;\n    border: none;\n    padding: 10px 20px;\n    border-radius: 5px;\n    cursor: pointer;\n    width: 100%;\n}",
    preview: '<div class="card-reveal"><div class="reveal-img">🎮</div><div class="reveal-content"><h3>Cyber Engine</h3><p>Next generation rendering system.</p><button class="reveal-btn">Launch System</button></div></div>'
  },
  {
    id: 6005,
    name: '动态渐变边框卡片',
    category: '卡片',
    tags: ['glow', '卡片', '渐变边框'],
    css: ".card-glow {\n    width: 300px;\n    height: 200px;\n    background: #1e1e2f;\n    border-radius: 15px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    z-index: 1;\n}\n.card-glow::before {\n    content: '';\n    position: absolute;\n    top: -3px;\n    left: -3px;\n    right: -3px;\n    bottom: -3px;\n    background: linear-gradient(45deg, #ff00cc, #3333ff, #00ffcc, #ff00cc);\n    background-size: 400%;\n    border-radius: 18px;\n    z-index: -1;\n    animation: glowing 10s linear infinite;\n}\n.card-glow:hover::before { filter: blur(15px); }\n.card-glow h3 { color: #fff; letter-spacing: 1px; margin: 0; }\n.card-glow p { color: #aaa; margin: 10px 0 0; font-size: 14px; }\n@keyframes glowing {\n    0% { background-position: 0 0; }\n    50% { background-position: 400% 0; }\n    100% { background-position: 0 0; }\n}",
    preview: '<div class="card-glow"><h3>Premium Account</h3><p>Hover to see the magic glow</p></div>'
  }
];
