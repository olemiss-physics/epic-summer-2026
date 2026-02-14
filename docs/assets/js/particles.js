(function () {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = [
    'position:fixed', 'top:0', 'left:0',
    'width:100%', 'height:100%',
    'pointer-events:none', 'z-index:0',
  ].join(';');
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');

  const TRAIL    = 120;   // max trail length (positions)
  const N_TRACKS =  18;   // simultaneous bubble-chamber tracks
  const N_COMPS  =   5;   // flying computers

  let tracks = [];
  let comps  = [];

  // ── colour ──────────────────────────────────────────────────────────────
  function rgb() {
    return document.body.getAttribute('data-md-color-scheme') === 'slate'
      ? [180, 130, 255]
      : [80,  40,  140];
  }

  // ── spawn helpers ────────────────────────────────────────────────────────
  function spawnTrack() {
    // enter from a random edge, aimed loosely inward
    const edge  = Math.floor(Math.random() * 4);
    let x, y, angle;
    const w = canvas.width, h = canvas.height;
    if      (edge === 0) { x = Math.random()*w; y = 0;  angle =  Math.PI*(0.15 + Math.random()*0.7); }
    else if (edge === 1) { x = w; y = Math.random()*h;  angle =  Math.PI*(0.65 + Math.random()*0.7); }
    else if (edge === 2) { x = Math.random()*w; y = h;  angle = -Math.PI*(0.15 + Math.random()*0.7); }
    else                 { x = 0; y = Math.random()*h;  angle =  Math.PI*(-0.35 + Math.random()*0.7); }

    const speed = 0.6 + Math.random() * 1.1;
    return {
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      curl: (Math.random() - 0.5) * 0.025,   // magnetic-field curve
      r:    1.2 + Math.random() * 1.4,
      life: 1.0,
      decay: 0.0018 + Math.random() * 0.0025,
      history: [],
    };
  }

  function spawnComp() {
    const fromLeft = Math.random() < 0.5;
    return {
      x:    fromLeft ? -50 : canvas.width + 50,
      y:    30 + Math.random() * (canvas.height - 60),
      vx:   (fromLeft ? 1 : -1) * (0.25 + Math.random() * 0.4),
      vy:   (Math.random() - 0.5) * 0.25,
      rot:  (Math.random() - 0.5) * 0.3,
      spin: (Math.random() - 0.5) * 0.004,
      size: 42 + Math.random() * 28,
      alpha: 0.22 + Math.random() * 0.18,
    };
  }

  // ── init ─────────────────────────────────────────────────────────────────
  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    tracks = Array.from({ length: N_TRACKS }, spawnTrack);
    comps  = Array.from({ length: N_COMPS  }, spawnComp);
  }

  // ── draw loop ─────────────────────────────────────────────────────────────
  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const [r, g, b] = rgb();
    const W = canvas.width, H = canvas.height;

    // ── bubble-chamber tracks ─────────────────────────────────────────────
    for (let i = 0; i < tracks.length; i++) {
      const t = tracks[i];

      // apply gentle magnetic-field deflection
      const spd   = Math.hypot(t.vx, t.vy);
      const angle = Math.atan2(t.vy, t.vx) + t.curl;
      t.vx = Math.cos(angle) * spd;
      t.vy = Math.sin(angle) * spd;

      t.x += t.vx;
      t.y += t.vy;
      t.life -= t.decay;
      t.history.push({ x: t.x, y: t.y });
      if (t.history.length > TRAIL) t.history.shift();

      // replace when off-screen or faded
      const pad = 80;
      if (t.life <= 0 || t.x < -pad || t.x > W+pad || t.y < -pad || t.y > H+pad) {
        tracks[i] = spawnTrack();
        continue;
      }

      // draw fading trail (thicker near head, transparent at tail)
      for (let k = 1; k < t.history.length; k++) {
        const frac = k / t.history.length;          // 0=tail → 1=head
        const a    = frac * frac * 0.35 * t.life;   // quadratic fade
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
        ctx.lineWidth   = frac * t.r * 1.4;
        ctx.lineCap     = 'round';
        ctx.moveTo(t.history[k-1].x, t.history[k-1].y);
        ctx.lineTo(t.history[k].x,   t.history[k].y);
        ctx.stroke();
      }

      // bright head dot
      ctx.beginPath();
      ctx.arc(t.x, t.y, t.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},${t.life * 0.55})`;
      ctx.fill();
    }

    // ── flying computers ──────────────────────────────────────────────────
    for (let i = 0; i < comps.length; i++) {
      const c = comps[i];
      c.x   += c.vx;
      c.y   += c.vy;
      c.rot += c.spin;

      if (c.x < -80 || c.x > W + 80) {
        comps[i] = spawnComp();
        continue;
      }

      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.rotate(c.rot);
      ctx.globalAlpha  = c.alpha;
      ctx.font         = `${c.size}px sans-serif`;
      ctx.textAlign    = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('💻', 0, 0);
      ctx.restore();
    }

    rafId = requestAnimationFrame(frame);
  }

  // ── toggle button ─────────────────────────────────────────────────────────
  const STORAGE_KEY = 'epic-particles';
  let running = localStorage.getItem(STORAGE_KEY) !== 'off';
  let rafId   = null;

  function tick() {
    rafId = requestAnimationFrame(frame);
  }

  function start() {
    canvas.style.display = '';
    running = true;
    localStorage.setItem(STORAGE_KEY, 'on');
    tick();
  }

  function stop() {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
    running = false;
    localStorage.setItem(STORAGE_KEY, 'off');
    canvas.style.display = 'none';
  }

  const btn = document.createElement('button');
  btn.title = 'Toggle background animation';
  btn.style.cssText = [
    'position:fixed', 'bottom:1rem', 'right:1rem',
    'z-index:999', 'width:2rem', 'height:2rem',
    'border:none', 'border-radius:50%', 'cursor:pointer',
    'background:var(--md-default-fg-color--lightest)',
    'color:var(--md-default-fg-color)',
    'font-size:1rem', 'line-height:1',
    'opacity:0.45', 'transition:opacity .2s',
    'display:flex', 'align-items:center', 'justify-content:center',
  ].join(';');

  function updateBtn() { btn.textContent = running ? '✦' : '✧'; }

  btn.addEventListener('mouseenter', () => btn.style.opacity = '0.9');
  btn.addEventListener('mouseleave', () => btn.style.opacity = '0.45');
  btn.addEventListener('click', () => {
    running ? stop() : start();
    updateBtn();
  });

  document.body.appendChild(btn);
  updateBtn();

  // ── kick off ──────────────────────────────────────────────────────────────
  resize();
  if (running) tick(); else canvas.style.display = 'none';
  window.addEventListener('resize', resize);
})();
