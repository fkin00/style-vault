// 背景样式数据

export const backgrounds = [
  {
    id: 8002,
    name: '星尘御兽背景',
    category: '背景',
    tags: ['background', 'webgl', 'shader', 'beast', 'particle'],
    css: `body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: #000; font-family: 'Orbitron', 'Inter', system-ui, sans-serif; color: #fff; cursor: crosshair; }

#render-canvas {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 1;
}`,
    html: `<canvas id="render-canvas"></canvas>
<script id="vs" type="x-shader/x-vertex">
attribute vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
<\/script>
<script id="fs" type="x-shader/x-fragment">
precision highp float;
uniform float time;
uniform vec2 res;
uniform vec2 mouse;
uniform vec2 beast;

mat2 rot(float a) { float s=sin(a), c=cos(a); return mat2(c,-s,s,c); }
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * res.xy) / min(res.x, res.y);
  vec2 b = (beast.xy - 0.5 * res.xy) / min(res.x, res.y);

  vec3 finalCol = vec3(0.0);

  vec2 uvBG = uv * 2.0;
  uvBG.xy *= rot(time * 0.05);
  for(float i=1.0; i<4.0; i++){
    uvBG.x += 0.3/i * sin(i*3.0*uvBG.y + time);
    uvBG.y += 0.3/i * cos(i*3.0*uvBG.x + time);
    float val = length(uvBG);
    finalCol += vec3(0.01 * i, 0.02 * i, 0.05 * i) / abs(sin(val * 8.0 - time));
  }

  float distToBeast = length(uv - b);
  float core = 0.002 / (distToBeast * distToBeast + 0.0001);
  vec3 coreCol = mix(vec3(1.0, 0.2, 0.0), vec3(1.0, 0.8, 0.0), sin(time*5.0)*0.5+0.5);
  finalCol += coreCol * core;

  float pSize = 0.05;
  vec2 pUV = fract(uv * 50.0 + time * 2.0) - 0.5;
  float particles = smoothstep(0.48, 0.5, hash(floor(uv * 50.0 + time * 2.0)));
  particles *= smoothstep(0.2, 0.0, distToBeast);
  finalCol += vec3(0.0, 0.8, 1.0) * particles * core;

  float trail = 0.005 / (distToBeast + 0.1);
  finalCol += vec3(0.0, 0.2, 0.3) * trail;

  finalCol *= 1.0 - length(uv) * 0.3;
  gl_FragColor = vec4(finalCol, 1.0);
}
<\/script>
<script>
const canvas = document.getElementById('render-canvas');
const gl = canvas.getContext('webgl');
const program = gl.createProgram();

const createShader = (type, src) => {
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  return s;
};

gl.attachShader(program, createShader(gl.VERTEX_SHADER, document.getElementById('vs').text));
gl.attachShader(program, createShader(gl.FRAGMENT_SHADER, document.getElementById('fs').text));
gl.linkProgram(program);
gl.useProgram(program);

const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);

const pos = gl.getAttribLocation(program, 'position');
gl.enableVertexAttribArray(pos);
gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

const ut = gl.getUniformLocation(program, 'time');
const ur = gl.getUniformLocation(program, 'res');
const um = gl.getUniformLocation(program, 'mouse');
const ub = gl.getUniformLocation(program, 'beast');

let mx = window.innerWidth / 2, my = window.innerHeight / 2;
let bx = mx, by = my;
let vx = 0, vy = 0;

const MASS = 10.0;
const F_COEFF = 0.15;
const DAMPING = 0.92;

window.onmousemove = e => {
  mx = e.clientX;
  my = window.innerHeight - e.clientY;
};

function render(t) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  gl.viewport(0, 0, canvas.width, canvas.height);

  let dx = mx - bx;
  let dy = my - by;
  let fx = dx * F_COEFF;
  let fy = dy * F_COEFF;
  let ax = fx / MASS;
  let ay = fy / MASS;
  vx += ax;
  vy += ay;
  vx *= DAMPING;
  vy *= DAMPING;
  bx += vx;
  by += vy;

  gl.uniform1f(ut, t * 0.001);
  gl.uniform2f(ur, canvas.width, canvas.height);
  gl.uniform2f(um, mx, my);
  gl.uniform2f(ub, bx, by);

  gl.drawArrays(gl.TRIANGLES, 0, 6);
  requestAnimationFrame(render);
}
requestAnimationFrame(render);
<\/script>`,
    preview: '<div style="width:100%;height:100%;background:#000;border-radius:12px;"></div>'
  },
];
