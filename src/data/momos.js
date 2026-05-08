// 魔方/按钮系列样式数据

export const momos = [
  {
    id: 5001,
    name: 'X光透视按钮',
    category: '按钮',
    tags: ['xray', '按钮', '透视', '交互'],
    css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; justify-content: center; align-items: center; height: 100vh; background: #070707; font-family: 'Helvetica Neue', sans-serif; }

.xray-btn {
    position: relative; width: 280px; height: 80px;
    background: #111; border-radius: 8px; border: 1px solid #333;
    color: #555; font-size: 20px; font-weight: bold; letter-spacing: 4px;
    display: flex; justify-content: center; align-items: center;
    cursor: pointer; overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.8);
}

.xray-core {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background:
        linear-gradient(90deg, transparent 48%, #00f0ff 48%, #00f0ff 52%, transparent 52%),
        linear-gradient(0deg, transparent 48%, #00f0ff 48%, #00f0ff 52%, transparent 52%),
        repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0, 240, 255, 0.1) 10px, rgba(0, 240, 255, 0.1) 20px);
    background-size: 40px 40px, 40px 40px, 100% 100%;
    color: #fff;
    display: flex; justify-content: center; align-items: center;
    font-size: 20px; font-weight: bold; letter-spacing: 4px; text-shadow: 0 0 10px #00f0ff;
    -webkit-mask-image: radial-gradient(circle 60px at var(--x, -100px) var(--y, -100px), black 0%, transparent 100%);
    mask-image: radial-gradient(circle 60px at var(--x, -100px) var(--y, -100px), black 0%, transparent 100%);
    transition: -webkit-mask-image 0.1s ease-out;
    pointer-events: none;
}

.xray-core::before { content: '背景     有字 '; position: absolute; z-index: 2; }`,
    preview: `<button class="xray-btn" id="btn">按钮<div class="xray-core"></div></button><script>
const btn = document.getElementById('btn');
btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
});
btn.addEventListener('mouseleave', () => {
    btn.style.setProperty('--x', '-100px');
    btn.style.setProperty('--y', '-100px');
});
<\/script>`
  },
  {
    id: 5002,
    name: '空间居合斩按钮',
    category: '按钮',
    tags: ['slice', '按钮', '切割', '动画'],
    css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; justify-content: center; align-items: center; height: 100vh; background: #1a1a24; font-family: 'Impact', sans-serif; }

.slice-btn {
    position: relative; width: 240px; height: 70px;
    border: none; background: transparent; cursor: pointer;
}

.btn-core {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: #ff003c; color: #fff; font-size: 22px; letter-spacing: 5px;
    display: flex; justify-content: center; align-items: center;
    box-shadow: 0 0 30px rgba(255, 0, 60, 0.6);
    opacity: 0; transform: scale(0.9); transition: 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}

.btn-half {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: #fff; color: #000; font-size: 22px; letter-spacing: 5px;
    display: flex; justify-content: center; align-items: center;
    transition: transform 0.4s cubic-bezier(0.8, 0, 0.2, 1);
}
.btn-half::before { content: 'DO NOT PRESS'; position: absolute; }
.top-half { clip-path: polygon(0 0, 100% 0, 100% 30%, 0 70%); }
.bottom-half { clip-path: polygon(0 70%, 100% 30%, 100% 100%, 0 100%); }

.laser-slash {
    position: absolute; top: 50%; left: -20%; width: 140%; height: 3px;
    background: #00f0ff; box-shadow: 0 0 15px #00f0ff;
    transform: rotate(-15deg) scaleX(0); opacity: 0; z-index: 10;
}

.slice-btn:hover .laser-slash { animation: slashAnim 0.4s ease-out forwards; }
.slice-btn:hover .top-half { transform: translate(-30px, -20px); transition-delay: 0.2s; }
.slice-btn:hover .bottom-half { transform: translate(30px, 20px); transition-delay: 0.2s; }
.slice-btn:hover .btn-core { opacity: 1; transform: scale(1); transition-delay: 0.3s; }

@keyframes slashAnim {
    0% { transform: rotate(-22deg) scaleX(0); opacity: 1; }
    50% { transform: rotate(-22deg) scaleX(1); opacity: 1; }
    100% { transform: rotate(-22deg) scaleX(1) translateY(-20px); opacity: 0; }
}`,
    preview: `<button class="slice-btn"><div class="btn-core">DANGER</div><div class="laser-slash"></div><div class="btn-half top-half"></div><div class="btn-half bottom-half"></div></button>`
  },
  {
    id: 5003,
    name: '引力磁吸按钮',
    category: '按钮',
    tags: ['magnetic', '按钮', '磁吸', '交互'],
    css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; justify-content: center; align-items: center; height: 100vh; background: #e5e5e5; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }

.magnetic-area { padding: 100px; }

.magnetic-btn {
    position: relative; width: 180px; height: 60px;
    background: #111; border-radius: 30px; border: none; cursor: pointer;
    display: flex; justify-content: center; align-items: center;
    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    will-change: transform;
}

.btn-text {
    color: #fff; font-size: 16px; font-weight: 600; letter-spacing: 1px;
    pointer-events: none;
    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    will-change: transform;
}

.magnetic-area:not(:hover) .magnetic-btn,
.magnetic-area:not(:hover) .btn-text {
    transform: translate(0, 0) !important;
    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}`,
    preview: `<div class="magnetic-area" id="magnet-zone"><button class="magnetic-btn" id="magnet-btn"><span class="btn-text" id="magnet-text">PULL ME</span></button></div><script>
const zone = document.getElementById('magnet-zone');
const btn = document.getElementById('magnet-btn');
const text = document.getElementById('magnet-text');
zone.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    btn.style.transform = 'translate(' + (distanceX * 0.3) + 'px, ' + (distanceY * 0.3) + 'px)';
    text.style.transform = 'translate(' + (distanceX * 0.3) + 'px, ' + (distanceY * 0.3) + 'px)';
    btn.style.transition = 'none';
    text.style.transition = 'none';
});
zone.addEventListener('mouseleave', () => {
    btn.style.transition = '';
    text.style.transition = '';
});
<\/script>`
  },
  {
    id: 5004,
    name: '折叠展开按钮',
    category: '按钮',
    tags: ['unfold', '按钮', '展开', '动画'],
    css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; justify-content: center; align-items: center; height: 100vh; background: #050505; }

.unfold-btn {
    position: relative; width: 200px; height: 60px;
    background: transparent; border: none; cursor: pointer;
    display: flex; justify-content: center; align-items: center;
}

.unfold-btn::before {
    content: ''; position: absolute; top: 50%; left: 0;
    width: 100%; height: 2px;
    background: #00f0ff;
    box-shadow: 0 0 15px #00f0ff;
    transform: translateY(-50%);
    transition: all 0.3s cubic-bezier(0.8, 0, 0.2, 1);
    transition-delay: 0.2s;
}

.unfold-btn::after {
    content: ''; position: absolute; top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0, 240, 255, 0.1);
    border-top: 2px solid #00f0ff;
    border-bottom: 2px solid #00f0ff;
    transform: scaleY(0);
    transform-origin: center;
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.8, 0, 0.2, 1);
}

.btn-text {
    color: #00f0ff; font-family: 'Courier New', monospace; font-size: 18px; font-weight: bold; letter-spacing: 5px; text-shadow: 0 0 8px #00f0ff;
    opacity: 0; transform: translateY(10px);
    z-index: 10;
    transition: all 0.2s ease;
}

.unfold-btn:hover::before { height: 0; opacity: 0; transition-delay: 0s; }
.unfold-btn:hover::after { transform: scaleY(1); opacity: 1; transition-delay: 0.15s; }
.unfold-btn:hover .btn-text { opacity: 1; transform: translateY(0); transition-delay: 0.35s; }`,
    preview: `<button class="unfold-btn"><span class="btn-text">INITIALIZE</span></button>`
  },
  {
    id: 5005,
    name: '全息镭射按钮',
    category: '按钮',
    tags: ['holo', '按钮', '全息', '镭射'],
    css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; justify-content: center; align-items: center; height: 100vh; background: #121212; perspective: 1000px; font-family: 'Helvetica Neue', sans-serif; }

.holo-btn {
    position: relative; width: 260px; height: 80px;
    background: rgba(20, 20, 20, 0.8);
    border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);
    color: #fff; font-size: 18px; font-weight: bold; letter-spacing: 2px;
    cursor: pointer; overflow: hidden;
    transform-style: preserve-3d;
    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    transition: transform 0.1s;
}

.btn-text { position: absolute; inset: 0; display: flex; justify-content: center; align-items: center; transform: translateZ(30px); pointer-events: none; z-index: 2; text-shadow: 0 2px 10px rgba(0,0,0,0.5); }

.holo-glare {
    position: absolute; inset: -50%;
    background:
        radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.8) 0%, transparent 40%),
        linear-gradient(var(--deg, 0deg), transparent 20%, #ff0055 30%, #00f0ff 40%, #ffea00 50%, #b200ff 60%, transparent 80%);
    background-size: 100% 100%, 200% 200%;
    background-position: center, var(--mx, 50%) var(--my, 50%);
    opacity: 0; transition: opacity 0.3s;
    mix-blend-mode: color-dodge;
    pointer-events: none;
    z-index: 1;
}

.holo-btn:hover .holo-glare { opacity: 1; }`,
    preview: `<button class="holo-btn" id="holo"><span class="btn-text">MINT NFT</span><div class="holo-glare" id="glare"></div></button><script>
const btn = document.getElementById('holo');
btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;
    const rotateX = ((y / rect.height) - 0.5) * -30;
    const rotateY = ((x / rect.width) - 0.5) * 30;
    const deg = Math.atan2(y - rect.height/2, x - rect.width/2) * (180 / Math.PI) + 90;
    btn.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
    btn.style.setProperty('--mx', px + '%');
    btn.style.setProperty('--my', py + '%');
    btn.style.setProperty('--deg', deg + 'deg');
});
btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'rotateX(0deg) rotateY(0deg)';
});
<\/script>`
  },
  {
    id: 5006,
    name: '高压过载按钮',
    category: '按钮',
    tags: ['overload', '按钮', '过载', '抖动'],
    css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; justify-content: center; align-items: center; height: 100vh; background: #0d0d0f; font-family: 'Arial Black', sans-serif; }

.overload-btn {
    position: relative; width: 220px; height: 70px;
    background: #151518; color: #fff; font-size: 20px; letter-spacing: 3px;
    border: none; outline: none; cursor: pointer;
    overflow: hidden; border-radius: 4px;
    display: flex; justify-content: center; align-items: center;
    transition: background 0.4s, text-shadow 0.4s;
}

.overload-btn::before {
    content: ''; position: absolute;
    width: 150%; height: 300%;
    background: conic-gradient(transparent, transparent, transparent, #ff003c);
    animation: radarRotate 4s linear infinite;
}

.overload-btn::after {
    content: ''; position: absolute;
    inset: 3px;
    background: #151518; border-radius: 2px;
    transition: background 0.3s;
}

.btn-text { position: relative; z-index: 10; transition: color 0.3s; }

@keyframes radarRotate { 100% { transform: rotate(360deg); } }

@keyframes shake {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    20% { transform: translate(-2px, 1px) rotate(-1deg); }
    40% { transform: translate(2px, -2px) rotate(1deg); }
    60% { transform: translate(-2px, -1px) rotate(0deg); }
    80% { transform: translate(2px, 2px) rotate(-1deg); }
}

.overload-btn:hover { animation: shake 0.2s infinite; box-shadow: 0 0 40px rgba(255, 0, 60, 0.4); }
.overload-btn:hover::before { background: conic-gradient(transparent, #ff003c, #fff); animation: radarRotate 0.4s linear infinite; }
.overload-btn:hover::after { background: #33000b; }
.overload-btn:hover .btn-text { color: #fff; text-shadow: 0 0 10px #ff003c, 0 0 20px #fff; }`,
    preview: `<button class="overload-btn"><span class="btn-text">DETONATE</span></button>`
  },
  {
    id: 5007,
    name: '生物权限扫描按钮',
    category: '按钮',
    tags: ['auth', '按钮', '扫描', '权限'],
    css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; justify-content: center; align-items: center; height: 100vh; background: #000; font-family: 'Courier New', monospace; user-select: none; }

.auth-btn {
    position: relative; width: 300px; height: 70px;
    background: transparent; border: 1px solid #444; border-radius: 4px;
    color: #888; font-size: 16px; font-weight: bold; letter-spacing: 2px;
    cursor: pointer; overflow: hidden;
    display: flex; justify-content: center; align-items: center;
    transition: 0.3s;
}

.progress-fill {
    position: absolute; top: 0; left: 0; width: 0%; height: 100%;
    background: repeating-linear-gradient(45deg, #ff003c, #ff003c 10px, #b3002a 10px, #b3002a 20px);
    opacity: 0.3; transition: width 0.1s linear; z-index: 0;
}

.scan-laser {
    position: absolute; top: 0; left: 0; width: 2px; height: 100%;
    background: #ff003c; box-shadow: 0 0 15px 5px rgba(255,0,60,0.6);
    opacity: 0; transition: left 0.1s linear; z-index: 1;
}

.btn-text { position: relative; z-index: 2; pointer-events: none; }

.auth-btn.granted { border-color: #00ff66; color: #00ff66; text-shadow: 0 0 10px #00ff66; box-shadow: inset 0 0 20px rgba(0, 255, 102, 0.2), 0 0 30px rgba(0, 255, 102, 0.4); }
.auth-btn.granted .progress-fill { background: rgba(0, 255, 102, 0.2); width: 100% !important; opacity: 1; transition: 0.3s; }
.auth-btn.granted .scan-laser { opacity: 0; }`,
    preview: `<div class="auth-btn" id="authBtn"><div class="progress-fill" id="fill"></div><div class="scan-laser" id="laser"></div><span class="btn-text" id="btnText">HOLD TO AUTHENTICATE</span></div><script>
const btn = document.getElementById('authBtn');
const fill = document.getElementById('fill');
const laser = document.getElementById('laser');
const text = document.getElementById('btnText');
let progress = 0;
let isGranted = false;
let animationFrame;
function updateProgress() {
    if (isGranted) return;
    progress += 1;
    btn.style.borderColor = '#ff003c';
    btn.style.color = '#fff';
    text.innerText = 'SCANNING... ' + Math.min(progress, 100) + '%';
    laser.style.opacity = 1;
    fill.style.width = progress + '%';
    laser.style.left = progress + '%';
    if (progress >= 100) {
        isGranted = true;
        btn.classList.add('granted');
        text.innerText = 'ACCESS GRANTED';
        cancelAnimationFrame(animationFrame);
        return;
    }
    animationFrame = requestAnimationFrame(updateProgress);
}
function startPress() { if (isGranted) return; progress = 0; updateProgress(); }
function cancelPress() { if (isGranted) return; cancelAnimationFrame(animationFrame); progress = 0; fill.style.width = '0%'; laser.style.left = '0%'; laser.style.opacity = 0; btn.style.borderColor = '#444'; btn.style.color = '#888'; text.innerText = 'HOLD TO AUTHENTICATE'; }
btn.addEventListener('mousedown', startPress);
btn.addEventListener('mouseup', cancelPress);
btn.addEventListener('mouseleave', cancelPress);
<\/script>`
  },
  {
    id: 5008,
    name: '量子魔方加载',
    category: '加载动画',
    tags: ['cube', '加载', '魔方', '3d'],
    css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; justify-content: center; align-items: center; height: 100vh; background: radial-gradient(circle at center, #111 0%, #000 100%); overflow: hidden; perspective: 1200px; font-family: 'Courier New', Courier, monospace; }

.scene { position: relative; transform-style: preserve-3d; }

.rubiks-wrapper {
    position: relative; width: 0; height: 0; transform-style: preserve-3d;
    animation: rotateUniverse 25s linear infinite;
}

@keyframes rotateUniverse {
    0% { transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg); }
    100% { transform: rotateX(340deg) rotateY(720deg) rotateZ(360deg); }
}

.mini-cube {
    position: absolute; width: 40px; height: 40px;
    top: 50%; left: 50%; margin-top: -20px; margin-left: -20px;
    transform-style: preserve-3d;
    transition: transform 0.45s cubic-bezier(0.25, 1, 0.5, 1.2);
}

.face { position: absolute; width: 40px; height: 40px; border-radius: 4px; backface-visibility: hidden; }
.front  { transform: translateZ(20px); }
.back   { transform: rotateY(180deg) translateZ(20px); }
.left   { transform: rotateY(-90deg) translateZ(20px); }
.right  { transform: rotateY(90deg) translateZ(20px); }
.top    { transform: rotateX(90deg) translateZ(20px); }
.bottom { transform: rotateX(-90deg) translateZ(20px); }

.hologram-shadow {
    position: absolute; top: 160px; left: -100px; width: 200px; height: 200px;
    background: radial-gradient(circle, rgba(0, 240, 255, 0.5) 0%, transparent 60%);
    transform: rotateX(90deg); filter: blur(25px);
    animation: pulseShadow 2s infinite alternate;
}
@keyframes pulseShadow {
    0% { transform: rotateX(90deg) scale(0.9); opacity: 0.6; }
    100% { transform: rotateX(90deg) scale(1.1); opacity: 1; }
}

.loading-text { position: absolute; bottom: 12%; color: #00d2ff; font-size: 18px; letter-spacing: 10px; text-shadow: 0 0 10px #00d2ff; }`,
    html: `<div class="scene"><div class="hologram-shadow"></div><div class="rubiks-wrapper" id="cube-core"></div></div><div class="loading-text">CALCULATING_MATRIX...</div><script>
const wrapper = document.getElementById('cube-core');
const cubies = [];
const size = 42;
const colors = { right: '#00d2ff', left: '#00ff66', top: '#ffffff', bottom: '#ffea00', front: '#ff0055', back: '#ff6600' };

for(let x = -1; x <= 1; x++) {
    for(let y = -1; y <= 1; y++) {
        for(let z = -1; z <= 1; z++) {
            const cube = document.createElement('div');
            cube.className = 'mini-cube';
            const initTransform = 'translate3d(' + (x * size) + 'px, ' + (y * size) + 'px, ' + (z * size) + 'px)';
            cube.style.transform = initTransform;
            const faces = ['front', 'back', 'left', 'right', 'top', 'bottom'];
            faces.forEach(f => {
                const face = document.createElement('div');
                face.className = 'face ' + f;
                let isOuter = false, color = '#111';
                if (f === 'right' && x === 1) { isOuter = true; color = colors.right; }
                if (f === 'left' && x === -1) { isOuter = true; color = colors.left; }
                if (f === 'top' && y === -1) { isOuter = true; color = colors.top; }
                if (f === 'bottom' && y === 1) { isOuter = true; color = colors.bottom; }
                if (f === 'front' && z === 1) { isOuter = true; color = colors.front; }
                if (f === 'back' && z === -1) { isOuter = true; color = colors.back; }
                if (isOuter) {
                    face.style.background = color;
                    face.style.boxShadow = '0 0 15px ' + color + ', inset 0 0 15px rgba(0,0,0,0.8)';
                    face.style.border = '2px solid #000';
                } else {
                    face.style.background = '#080808';
                    face.style.border = '1px solid #1a1a1a';
                }
                cube.appendChild(face);
            });
            wrapper.appendChild(cube);
            cubies.push({ el: cube, x: x, y: y, z: z, bakedTransform: initTransform });
        }
    }
}

const axes = ['x', 'y', 'z'];
function nextMove() {
    const axis = axes[Math.floor(Math.random() * 3)];
    const layer = Math.floor(Math.random() * 3) - 1;
    const dir = Math.random() > 0.5 ? 1 : -1;
    const targets = cubies.filter(c => c[axis] === layer);
    targets.forEach(c => {
        c.el.style.transition = 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1.2)';
        c.el.style.transform = 'rotate' + axis.toUpperCase() + '(' + (dir * 90) + 'deg) ' + c.bakedTransform;
        let nx = c.x, ny = c.y, nz = c.z;
        if (axis === 'x') { ny = -dir * c.z; nz = dir * c.y; }
        else if (axis === 'y') { nx = dir * c.z; nz = -dir * c.x; }
        else if (axis === 'z') { nx = -dir * c.y; ny = dir * c.x; }
        c.x = Math.round(nx); c.y = Math.round(ny); c.z = Math.round(nz);
    });
    setTimeout(() => {
        targets.forEach(c => {
            c.bakedTransform = window.getComputedStyle(c.el).transform;
            c.el.style.transition = 'none';
            c.el.style.transform = c.bakedTransform;
        });
        document.body.offsetHeight;
        setTimeout(nextMove, 150);
    }, 450);
}
setTimeout(nextMove, 1000);
<\/script>`
  },
  {
    id: 5009,
    name: '赛博登录注册',
    category: '表单',
    tags: ['login', '表单', '登录', '注册', '赛博'],
    css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; justify-content: center; align-items: center; height: 100vh; background: #0b0c10; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }

.glass-card { width: 380px; padding: 40px; background: rgba(20, 20, 30, 0.6); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; box-shadow: 0 25px 50px rgba(0,0,0,0.5); }

.title { color: #fff; font-size: 28px; font-weight: 700; text-align: center; margin-bottom: 30px; text-shadow: 0 0 20px rgba(0,243,255,0.5); letter-spacing: 2px; }

.input-group { margin-bottom: 20px; }
.input-group label { display: block; color: rgba(255,255,255,0.7); font-size: 14px; margin-bottom: 8px; }
.input-group input { width: 100%; padding: 14px 18px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: #fff; font-size: 15px; outline: none; transition: all 0.3s; }
.input-group input:focus { border-color: #00f3ff; box-shadow: 0 0 15px rgba(0,243,255,0.3); }

.submit-btn { width: 100%; padding: 16px; background: linear-gradient(135deg, #00f3ff, #bc13fe); border: none; border-radius: 12px; color: #fff; font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.3s; text-transform: uppercase; letter-spacing: 2px; margin-top: 10px; }
.submit-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,243,255,0.4); }

.switch-text { text-align: center; color: rgba(255,255,255,0.6); font-size: 14px; margin-top: 20px; }
.switch-text a { color: #00f3ff; text-decoration: none; font-weight: 600; }`,
    preview: `<div class="glass-card"><h2 class="title">LOGIN</h2><div class="input-group"><label>Username</label><input type="text" placeholder="Enter username"></div><div class="input-group"><label>Password</label><input type="password" placeholder="Enter password"></div><button class="submit-btn">Sign In</button><p class="switch-text">No account? <a href="#">Register</a></p></div>`
  }
];
