/**
 * ========================================================================
 *   AD_OS // SYSTEM CORE CONTROLLER (VANILLA JS)
 *   Custom Cursor, Neural/Matrix Backgrounds, SPA Shell,
 *   Interactive Sci-Fi CLI Terminal, AI Assistant, Neon Canvas Charts,
 *   Global Search Engine, Theme State Persistence & Preferences
 * ========================================================================
 */

// --- 1. SYSTEM DATA & Telemetry DATABASE ---
const SystemDB = {
  profile: {
    name: "Abhishek Daramoni",
    role: "B.Tech CSE (AI & ML) Student",
    location: "Rajkot, Gujarat, India",
    tagline: "Aspiring Full-Stack & AI Developer Building Futuristic Digital Experiences",
    email: "abhishekdaramoni@email.com",
    linkedin: "linkedin.com/in/abhishek-daramoni",
    github: "github.com/abhishekdaramoni"
  },
  skills: [
    { name: "Java", level: 85, category: "Languages" },
    { name: "Core Java & OOP", level: 90, category: "Languages" },
    { name: "JavaScript", level: 80, category: "Languages" },
    { name: "HTML & CSS", level: 95, category: "Languages" },
    { name: "AI & ML Models", level: 80, category: "Intelligence" },
    { name: "Prompt Engineering", level: 95, category: "Intelligence" },
    { name: "Data Structures & Analysis", level: 80, category: "Intelligence" },
    { name: "Full Stack Development", level: 75, category: "Integration" }
  ],
  projects: [
    {
      id: "vibify",
      title: "Vibify (Spotify Clone)",
      category: "full-stack",
      desc: "Premium cyberpunk music platform featuring HTML5 Web Audio API equalizer visualizers, draggable mini player overlays, responsive grids, and system color theme selectors.",
      tags: ["HTML5", "CSS Variables", "Web Audio API", "Vanilla JS"]
    },
    {
      id: "ai-dashboard",
      title: "AI Model Dashboard",
      category: "ai-ml",
      desc: "Futuristic SaaS monitoring console designed for hosting AI metrics, tracking neural weight drift, data compilation performance, and graphing active training loss profiles.",
      tags: ["AI & ML", "HTML5 Canvas", "CSS Grid", "Chart.js"]
    },
    {
      id: "house-visualizer",
      title: "3D House Visualizer",
      category: "full-stack",
      desc: "WebGL architectural blueprint simulator rendering 3D digital houses. Features model parameter controls, light calculations, and customized texture injections.",
      tags: ["Java Core", "OOP Model", "Three.js", "WebGL"]
    },
    {
      id: "focus-bubble",
      title: "Focus Bubble Project",
      category: "full-stack",
      desc: "Time management application fusing Pomodoro sequences with white noise filters. Supports productivity graphs and dark CSS customization states.",
      tags: ["JavaScript", "Web Audios", "CSS Variables", "LocalStorage"]
    }
  ],
  certifications: [
    {
      title: "Microsoft Azure Fundamentals",
      authority: "Microsoft",
      id: "AZ900-AD992",
      desc: "Validated cloud computing services, resource groups, storage solutions, virtual networking matrices, and active directory systems (AZ-900)."
    },
    {
      title: "Prompt Engineering Specialized",
      authority: "DeepLearning.AI",
      id: "PE-991204",
      desc: "Designing optimal prompt schemas, system instructions, few-shot conditioning, chain-of-thought pathways, and LLM behavior tuning algorithms."
    },
    {
      title: "ChatGPT for Everyone",
      authority: "Vanderbilt University (Coursera)",
      id: "CFE-409121",
      desc: "Practical integration of generative pipelines into business infrastructure, prompt generation optimization, and automating daily computational tasks."
    }
  ]
};

// --- 2. GLOBAL STATE ---
const SystemState = {
  theme: "blue",
  cursorEnabled: true,
  backgroundMode: "neural", // 'neural', 'matrix', 'disabled'
  particleDensity: 80,
  activeView: "home",
  terminalBuffer: [],
  chartsAnimated: {
    line: false,
    radar: false
  }
};

// --- 3. DOM ELEMENT CACHE ---
const DOM = {
  loader: document.getElementById('loader'),
  loaderBar: document.querySelector('.loader-bar'),
  loaderPercentage: document.querySelector('.loader-percentage'),
  loaderStatus: document.querySelector('.loader-status'),
  loaderConsole: document.querySelector('.loader-console-stream'),
  
  customCursor: document.getElementById('custom-cursor'),
  customCursorGlow: document.getElementById('custom-cursor-glow'),
  
  menuItems: document.querySelectorAll('.menu-item'),
  viewPanels: document.querySelectorAll('.view-panel'),
  
  systemTime: document.getElementById('system-time'),
  systemDate: document.getElementById('system-date'),
  
  notificationBtn: document.getElementById('notification-btn'),
  notificationMenu: document.getElementById('notification-menu'),
  clearNotifications: document.getElementById('clear-notifications'),
  notifList: document.getElementById('notif-list'),
  
  globalSearch: document.getElementById('global-search'),
  clearSearch: document.getElementById('clear-search'),
  searchResultsOverlay: document.getElementById('search-results-overlay'),
  
  typedText: document.getElementById('typed-text'),
  
  terminalBody: document.getElementById('terminal-body'),
  terminalInput: document.getElementById('terminal-input'),
  
  botMessages: document.getElementById('bot-messages'),
  botQueryBtns: document.querySelectorAll('.bot-query-btn'),
  
  projectsGrid: document.getElementById('projects-grid'),
  filterChips: document.querySelectorAll('.filter-chip'),
  
  lineChart: document.getElementById('line-chart'),
  radarChart: document.getElementById('radar-chart'),
  gitGrid: document.getElementById('git-grid'),
  
  cursorToggle: document.getElementById('cursor-toggle'),
  particleDensitySlider: document.getElementById('particle-density-slider'),
  densityVal: document.getElementById('density-val'),
  canvasModeSelect: document.getElementById('canvas-mode-select'),
  themeSelectBtns: document.querySelectorAll('.theme-select-btn'),
  
  resumeBtn: document.getElementById('download-resume-btn'),
  uplinkForm: document.getElementById('portfolio-contact-form'),
  uplinkFeedback: document.getElementById('form-feedback-overlay')
};

// --- 4. SYSTEM BOOT SEQUENCE ---
window.addEventListener('DOMContentLoaded', () => {
  initThemeState();
  startLoaderSequence(() => {
    initClock();
    initCustomCursor();
    initBackgroundCanvas();
    initSPARouting();
    initTypingHeader();
    initTerminalCLI();
    initAIChatbot();
    initProjectFiltering();
    initCommitHistoryMatrix();
    initGlobalSearch();
    initSettingsPanel();
    initScrollAndTriggerWatchers();
    initMobileNav();
    init3DTiltEffects();
    initScrollReveal();
    simulateActivityLogs();
  });
});

function initThemeState() {
  const savedTheme = localStorage.getItem('ad_os_theme') || 'blue';
  const savedCursor = localStorage.getItem('ad_os_cursor') !== 'false';
  const savedBg = localStorage.getItem('ad_os_bg') || 'neural';
  const savedDensity = localStorage.getItem('ad_os_density') || '80';

  SystemState.theme = savedTheme;
  SystemState.cursorEnabled = savedCursor;
  SystemState.backgroundMode = savedBg;
  SystemState.particleDensity = parseInt(savedDensity, 10);

  // Apply to Body
  document.body.className = `theme-${savedTheme}`;
  if (savedCursor) {
    document.body.classList.add('custom-cursor-active');
  } else {
    document.body.classList.remove('custom-cursor-active');
  }

  // Sync Input Elements
  if (DOM.cursorToggle) DOM.cursorToggle.checked = savedCursor;
  if (DOM.particleDensitySlider) {
    DOM.particleDensitySlider.value = savedDensity;
    if (DOM.densityVal) DOM.densityVal.textContent = savedDensity;
  }
  if (DOM.canvasModeSelect) DOM.canvasModeSelect.value = savedBg;
  
  // Sync button active indicators
  DOM.themeSelectBtns.forEach(btn => {
    if (btn.getAttribute('data-theme') === savedTheme) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function startLoaderSequence(onComplete) {
  if (!DOM.loader) {
    if (onComplete) onComplete();
    return;
  }

  const statusMessages = [
    "LOADING AD_CORE KERNEL...",
    "DECRYPTING NEURAL GRID INTEGRATORS...",
    "SYNCHRONIZING PROFILE Telemetry MODULES...",
    "INITIALIZING VECTOR ENGINE GRAPHICS...",
    "ESTABLISHING SECURE PORTFOLIO SYNCHRONIZATION...",
    "CORE READY. INJECTING INTERACTION OVERLAYS."
  ];

  const consoleLines = [
    ">> Loading system config... OK",
    ">> Decrypting credentials matrix... VERIFIED",
    ">> Checking Microsoft Azure endpoints... ONLINE",
    ">> Synchronizing B.Tech CSE dataset... OK",
    ">> Initializing manual HUD analytics... Done."
  ];

  let progress = 0;
  let currentMsgIdx = 0;
  let consoleLineIdx = 0;

  // Append first console lines
  setTimeout(() => appendConsoleLine(consoleLines[consoleLineIdx++]), 300);
  setTimeout(() => appendConsoleLine(consoleLines[consoleLineIdx++]), 800);

  const loaderInterval = setInterval(() => {
    progress += Math.floor(Math.random() * 8) + 3;
    if (progress > 100) progress = 100;

    DOM.loaderBar.style.width = `${progress}%`;
    DOM.loaderPercentage.textContent = `${progress}%`;

    // Cycle boot statuses
    const msgIndex = Math.min(Math.floor(progress / (100 / statusMessages.length)), statusMessages.length - 1);
    if (msgIndex !== currentMsgIdx) {
      currentMsgIdx = msgIndex;
      DOM.loaderStatus.textContent = statusMessages[currentMsgIdx];
      if (consoleLineIdx < consoleLines.length) {
        appendConsoleLine(consoleLines[consoleLineIdx++]);
      }
    }

    if (progress === 100) {
      clearInterval(loaderInterval);
      appendConsoleLine(">> AD_OS v2.4 initialized successfully.");
      appendConsoleLine(">> Grid link established. Enjoy the matrix.");
      
      setTimeout(() => {
        DOM.loader.classList.add('fade-out');
        setTimeout(() => {
          DOM.loader.style.display = 'none';
          if (onComplete) onComplete();
        }, 850);
      }, 500);
    }
  }, 95);

  function appendConsoleLine(text) {
    if (!DOM.loaderConsole) return;
    const line = document.createElement('div');
    line.className = 'stream-line';
    line.textContent = text;
    DOM.loaderConsole.appendChild(line);
    DOM.loaderConsole.scrollTop = DOM.loaderConsole.scrollHeight;
  }
}

// --- 5. SYSTEM ENVIRONMENT CLOCK ---
function initClock() {
  updateClock();
  setInterval(updateClock, 1000);

  function updateClock() {
    const now = new Date();
    
    // Time formatting
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    if (DOM.systemTime) {
      DOM.systemTime.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Date formatting
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    if (DOM.systemDate) {
      DOM.systemDate.textContent = `${year}.${month}.${date}`;
    }
  }
}

// --- 6. FUTURISTIC MOUSE FOLLOWER ---
function initCustomCursor() {
  if (!DOM.customCursor || !DOM.customCursorGlow) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;
  let glowX = mouseX;
  let glowY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    // Hide when leaving viewport
    DOM.customCursor.style.opacity = '0';
    DOM.customCursorGlow.style.opacity = '0';
  });

  window.addEventListener('mouseenter', () => {
    if (SystemState.cursorEnabled) {
      DOM.customCursor.style.opacity = '1';
      DOM.customCursorGlow.style.opacity = '0.4';
    }
  });

  // Smooth cursor follow
  function renderCursor() {
    if (SystemState.cursorEnabled) {
      // Linear interpolation (Lerp) for organic delay
      cursorX += (mouseX - cursorX) * 0.25;
      cursorY += (mouseY - cursorY) * 0.25;
      glowX += (mouseX - glowX) * 0.12;
      glowY += (mouseY - glowY) * 0.12;

      DOM.customCursor.style.left = `${cursorX}px`;
      DOM.customCursor.style.top = `${cursorY}px`;
      DOM.customCursorGlow.style.left = `${glowX}px`;
      DOM.customCursorGlow.style.top = `${glowY}px`;
    }
    requestAnimationFrame(renderCursor);
  }
  
  renderCursor();

  // Pulse effect on clicking anything clickable
  window.addEventListener('mousedown', () => {
    if (!SystemState.cursorEnabled) return;
    DOM.customCursorGlow.style.width = '24px';
    DOM.customCursorGlow.style.height = '24px';
    DOM.customCursorGlow.style.opacity = '0.9';
  });

  window.addEventListener('mouseup', () => {
    if (!SystemState.cursorEnabled) return;
    DOM.customCursorGlow.style.width = '';
    DOM.customCursorGlow.style.height = '';
    DOM.customCursorGlow.style.opacity = '0.4';
  });
}

// --- 7. DYNAMIC HUD CANVAS BACKGROUNDS (NEURAL MATRIX INTERCONNECTIONS) ---
function initBackgroundCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  
  let particles = [];
  let drops = [];
  let mouse = { x: null, y: null };

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initStructures();
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  function initStructures() {
    particles = [];
    drops = [];

    const accentColor = getComputedStyle(document.body).getPropertyValue('--accent-color').trim() || '#00f0ff';

    if (SystemState.backgroundMode === 'neural') {
      const count = Math.floor((width * height) / 16000) * (SystemState.particleDensity / 80);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1
        });
      }
    } else if (SystemState.backgroundMode === 'matrix') {
      const columns = Math.floor(width / 18);
      for (let i = 0; i < columns; i++) {
        drops.push({
          x: i * 18,
          y: Math.random() * -height,
          speed: Math.random() * 2.5 + 1.5,
          chars: "010101010101ABCDEFUX[]#@$*+-/=%",
          char: '0',
          size: Math.floor(Math.random() * 4) + 9
        });
      }
    }
  }

  function renderLoop() {
    ctx.clearRect(0, 0, width, height);

    const computedStyles = getComputedStyle(document.body);
    const accentColor = computedStyles.getPropertyValue('--accent-color').trim() || '#00f0ff';
    const accentGlowRGB = computedStyles.getPropertyValue('--accent-glow-rgb').trim() || '0, 240, 255';

    if (SystemState.backgroundMode === 'neural') {
      // Render Neural Network
      ctx.fillStyle = `rgba(${accentGlowRGB}, 0.3)`;
      ctx.strokeStyle = `rgba(${accentGlowRGB}, 0.08)`;
      ctx.lineWidth = 1;

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Drag to mouse slightly
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            const pull = (130 - dist) / 130;
            p.x += (dx / dist) * pull * 0.8;
            p.y += (dy / dist) * pull * 0.8;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect points
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p2.x - p.x, p2.y - p.y);
          if (dist < 95) {
            ctx.strokeStyle = `rgba(${accentGlowRGB}, ${0.11 * (1 - dist / 95)})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

    } else if (SystemState.backgroundMode === 'matrix') {
      // Render Matrix Rain
      ctx.shadowBlur = 0;
      drops.forEach(d => {
        d.y += d.speed;

        if (d.y > height) {
          d.y = Math.random() * -100;
          d.speed = Math.random() * 2.5 + 1.5;
        }

        if (Math.random() > 0.97) {
          d.char = d.chars[Math.floor(Math.random() * d.chars.length)];
        }

        ctx.font = `${d.size}px 'Fira Code', monospace`;
        ctx.fillStyle = `rgba(${accentGlowRGB}, ${0.28 * (d.size / 13)})`;
        ctx.fillText(d.char, d.x, d.y);
      });
    }

    if (SystemState.backgroundMode !== 'disabled') {
      requestAnimationFrame(renderLoop);
    }
  }

  initStructures();
  renderLoop();

  // Settings Hooks to update background
  window.updateBackgroundEngine = function() {
    initStructures();
    if (SystemState.backgroundMode !== 'disabled') {
      renderLoop();
    } else {
      ctx.clearRect(0, 0, width, height);
    }
  };
}

// --- 8. SINGLE PAGE NAVIGATION ROUTER ---
function initSPARouting() {
  // Navigation Menu Clicks
  DOM.menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetHash = item.getAttribute('href');
      window.location.hash = targetHash;
    });
  });

  // Watch URL Hash Changes
  window.addEventListener('hashchange', () => {
    let hash = window.location.hash.slice(1) || 'home';
    
    // Normalize hash
    const validViews = ['home', 'about', 'skills', 'projects', 'certifications', 'analytics', 'contact', 'settings'];
    if (!validViews.includes(hash)) {
      hash = 'home';
    }

    SystemState.activeView = hash;

    // Remove active markers
    DOM.menuItems.forEach(item => {
      const view = item.getAttribute('data-view');
      if (view === hash) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    DOM.viewPanels.forEach(panel => {
      const panelId = panel.getAttribute('id');
      if (panelId === `${hash}-view`) {
        panel.classList.add('active');
        // Trigger animations when the panel becomes visible
        onPanelActive(hash);
      } else {
        panel.classList.remove('active');
      }
    });
  });

  // Load Initial Hash on Startup
  const initialHash = window.location.hash.slice(1) || 'home';
  window.location.hash = `#${initialHash}`;
  onPanelActive(initialHash);
}

function onPanelActive(view) {
  // Counters countup animation
  if (view === 'home' || view === 'about') {
    const counterCards = document.querySelectorAll(`#${view}-view .counter-card`);
    counterCards.forEach(card => {
      const numEl = card.querySelector('.counter-num');
      const target = parseInt(card.getAttribute('data-target'), 10);
      animateCounter(numEl, target);
    });
  }

  // Skills Progress bar animation
  if (view === 'skills') {
    const bars = document.querySelectorAll('.progress-bar-fill');
    bars.forEach(bar => {
      const val = bar.getAttribute('data-val');
      bar.style.width = val;
    });

    const circularGauges = document.querySelectorAll('.gauge-fill');
    circularGauges.forEach(gauge => {
      const dash = gauge.getAttribute('data-dash');
      // Circular stroke radius=40, circumference = 2 * PI * 40 ~ 251.2
      const percent = parseInt(gauge.parentElement.querySelector('.gauge-percentage').textContent, 10);
      const offset = 251.2 - (percent / 100) * 251.2;
      
      gauge.style.transition = 'stroke-dashoffset 1.8s cubic-bezier(0.16, 1, 0.3, 1)';
      gauge.style.strokeDashoffset = offset;
    });
  }

  // Diagnostics Canvas charts draw
  if (view === 'analytics') {
    renderCanvasCharts();
  }
}

function animateCounter(element, target) {
  if (!element || element.textContent !== "0") return;

  let current = 0;
  const speed = Math.ceil(target / 45); // Adjust speed steps
  const timer = setInterval(() => {
    current += speed;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = current;
    }
  }, 25);
}

// --- 9. TYPING ANIMATOR MATRIX ---
function initTypingHeader() {
  if (!DOM.typedText) return;

  const phrase = SystemDB.profile.tagline;
  let charIdx = 0;
  
  function typeChar() {
    if (charIdx < phrase.length) {
      DOM.typedText.textContent += phrase[charIdx++];
      setTimeout(typeChar, 35);
    }
  }
  
  DOM.typedText.textContent = "";
  setTimeout(typeChar, 1000); // Start typing after loading vanishes
}

// --- 10. REAL-TIME SCI-FI TERMINAL OVERLAY ---
function initTerminalCLI() {
  if (!DOM.terminalInput || !DOM.terminalBody) return;

  // Pre-load helpful info
  SystemState.terminalBuffer = [
    { type: 'sys', text: "AD_OS [Version 2.4-STABLE]" },
    { type: 'sys', text: "(c) 2026 Abhishek Daramoni. Core networks secure." },
    { type: 'sys', text: "Type 'help' inside CLI input for a list of telemetry scans." },
    { type: 'output', text: "" }
  ];
  renderTerminalBuffer();

  DOM.terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const rawCommand = DOM.terminalInput.value.trim();
      const command = rawCommand.toLowerCase();
      DOM.terminalInput.value = '';

      if (!command) return;

      // Print Prompt Command
      SystemState.terminalBuffer.push({ type: 'prompt', text: `abhishek@core_os:~$ ${rawCommand}` });

      // Execute Commands
      processTerminalCommand(command);
      renderTerminalBuffer();
    }
  });

  // Focus terminal input when clicking anywhere on the terminal box
  DOM.terminalBody.parentElement.addEventListener('click', () => {
    DOM.terminalInput.focus();
  });
}

function processTerminalCommand(cmd) {
  const parts = cmd.split(' ');
  const core = parts[0];
  const args = parts.slice(1);

  switch (core) {
    case 'help':
      SystemState.terminalBuffer.push({ type: 'sys', text: "Available System Scans:" });
      SystemState.terminalBuffer.push({ type: 'output', text: "  about        - Decrypt biometric bio matrix" });
      SystemState.terminalBuffer.push({ type: 'output', text: "  skills       - Query installed technological skills module" });
      SystemState.terminalBuffer.push({ type: 'output', text: "  projects     - Scan deployed developer matrices (Projects)" });
      SystemState.terminalBuffer.push({ type: 'output', text: "  certs        - Scan verified credentials checklist (Certifications)" });
      SystemState.terminalBuffer.push({ type: 'output', text: "  contact      - Transmit connection uplink pathways" });
      SystemState.terminalBuffer.push({ type: 'output', text: "  matrix       - Recalibrate particle density to matrix code rain" });
      SystemState.terminalBuffer.push({ type: 'output', text: "  theme [arg]  - Override aesthetic hue [blue, green, purple, amber]" });
      SystemState.terminalBuffer.push({ type: 'output', text: "  clear        - Clear console stream buffer" });
      break;

    case 'about':
      SystemState.terminalBuffer.push({ type: 'sys', text: "--- BIOMETRICS SCAN: A_BIO.SYS ---" });
      SystemState.terminalBuffer.push({ type: 'output', text: `Identity: ${SystemDB.profile.name}` });
      SystemState.terminalBuffer.push({ type: 'output', text: `Telemetry Base: ${SystemDB.profile.location}` });
      SystemState.terminalBuffer.push({ type: 'output', text: `Core Specialization: ${SystemDB.profile.role}` });
      SystemState.terminalBuffer.push({ type: 'output', text: `Description: Pursuing a B.Tech CSE with specializing in AI & ML. Synthesizes full stack architectures with algorithmic neural processing models.` });
      break;

    case 'skills':
      SystemState.terminalBuffer.push({ type: 'sys', text: "--- MODULE TECH STACK METRICS ---" });
      SystemDB.skills.forEach(skill => {
        const dotCount = Math.floor(skill.level / 10);
        const dots = "█".repeat(dotCount) + "░".repeat(10 - dotCount);
        SystemState.terminalBuffer.push({ type: 'output', text: `  ${skill.name.padEnd(26)} : [${dots}] ${skill.level}%` });
      });
      break;

    case 'projects':
      SystemState.terminalBuffer.push({ type: 'sys', text: "--- DETECTING ACTIVE GRID REPOSITORIES ---" });
      SystemDB.projects.forEach(p => {
        SystemState.terminalBuffer.push({ type: 'output', text: `  > ${p.title} (${p.category.toUpperCase()})` });
        SystemState.terminalBuffer.push({ type: 'output', text: `    Specs: ${p.desc}` });
        SystemState.terminalBuffer.push({ type: 'output', text: `    Stack: ${p.tags.join(', ')}` });
        SystemState.terminalBuffer.push({ type: 'output', text: "" });
      });
      break;

    case 'certs':
      SystemState.terminalBuffer.push({ type: 'sys', text: "--- SCANNING CRYPTOGRAPHIC CREDENTIAL MATRIX ---" });
      SystemDB.certifications.forEach(c => {
        SystemState.terminalBuffer.push({ type: 'output', text: `  * ${c.title}` });
        SystemState.terminalBuffer.push({ type: 'output', text: `    Authority: ${c.authority} // ID: ${c.id}` });
        SystemState.terminalBuffer.push({ type: 'output', text: "" });
      });
      break;

    case 'contact':
      SystemState.terminalBuffer.push({ type: 'sys', text: "--- ESTABLISHING COMMS LINKPATHS ---" });
      SystemState.terminalBuffer.push({ type: 'output', text: `  SMTP Relay  : ${SystemDB.profile.email}` });
      SystemState.terminalBuffer.push({ type: 'output', text: `  LinkedIn ID : ${SystemDB.profile.linkedin}` });
      SystemState.terminalBuffer.push({ type: 'output', text: `  GitHub Node : ${SystemDB.profile.github}` });
      break;

    case 'matrix':
      SystemState.terminalBuffer.push({ type: 'sys', text: "RECALIBRATING RENDERER TO MATRIX CODE RAIN..." });
      SystemState.backgroundMode = "matrix";
      if (DOM.canvasModeSelect) DOM.canvasModeSelect.value = "matrix";
      localStorage.setItem('ad_os_bg', 'matrix');
      window.updateBackgroundEngine();
      break;

    case 'theme':
      const targetTheme = args[0];
      const validThemes = ['blue', 'green', 'purple', 'amber'];
      if (validThemes.includes(targetTheme)) {
        SystemState.theme = targetTheme;
        document.body.className = `theme-${targetTheme}`;
        localStorage.setItem('ad_os_theme', targetTheme);
        
        // Sync setting indicators
        DOM.themeSelectBtns.forEach(btn => {
          if (btn.getAttribute('data-theme') === targetTheme) btn.classList.add('active');
          else btn.classList.remove('active');
        });

        SystemState.terminalBuffer.push({ type: 'sys', text: `AESTHETIC SCHEME ADJUSTED TO: [NEON ${targetTheme.toUpperCase()}]` });
      } else {
        SystemState.terminalBuffer.push({ type: 'error', text: `theme: Invalid aesthetic parameter. Try: [blue, green, purple, amber]` });
      }
      break;

    case 'clear':
      SystemState.terminalBuffer = [];
      break;

    default:
      SystemState.terminalBuffer.push({ type: 'error', text: `bash: command not found: ${cmd}. Type 'help' for diagnostic list.` });
  }
}

function renderTerminalBuffer() {
  if (!DOM.terminalBody) return;

  // Clear body
  const outputContainer = DOM.terminalBody.querySelector('.terminal-output');
  outputContainer.innerHTML = '';

  SystemState.terminalBuffer.forEach(line => {
    const el = document.createElement('div');
    if (line.type === 'sys') {
      el.className = 'term-line';
      el.innerHTML = `<span class="term-highlight">${line.text}</span>`;
    } else if (line.type === 'error') {
      el.className = 'term-line text-amber';
      el.textContent = line.text;
    } else if (line.type === 'prompt') {
      el.className = 'term-line';
      el.innerHTML = `<span class="terminal-prompt-color">${line.text}</span>`;
    } else {
      el.className = 'term-line';
      el.textContent = line.text;
    }
    outputContainer.appendChild(el);
  });

  DOM.terminalBody.scrollTop = DOM.terminalBody.scrollHeight;
}

// --- 11. NEURAL ASSISTANT (CHAT INTERFACE) ---
function initAIChatbot() {
  if (!DOM.botMessages) return;

  DOM.botQueryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const queryType = btn.getAttribute('data-query');
      let queryLabel = btn.textContent;
      
      // Add User Message
      appendChatMessage('user', `QUERY: ${queryLabel}`);

      // Show Bot Typing Indicator
      showBotTypingIndicator();

      // Formulate Response
      setTimeout(() => {
        removeBotTypingIndicator();
        let botResponse = "";

        if (queryType === 'stack') {
          botResponse = "Abhishek's primary cognitive languages consist of Java (Core & OOP architectures), HTML5, CSS3, and modern JavaScript (ES6+). His intelligence models are built upon Prompt Engineering patterns and deep neural learning interfaces.";
        } else if (queryType === 'availability') {
          botResponse = "STATUS: ACTIVE INTERNSHIP SEARCH. Abhishek is currently pursuing his B.Tech in CSE (AI & ML) in Rajkot, Gujarat. He is open for remote or local full-stack development & AI engineering internships for the 2026 season. Transmission comms can be established via the Uplink panel.";
        } else if (queryType === 'vibify') {
          botResponse = "VIBIFY MODULE DECRYPTED: Abhishek's flagship client application. A futuristic cyberpunk audio shell utilizing the HTML5 Web Audio API, responsive glass grids, floating mini players with custom cursor pointer hooks, and accent-adaptive color palettes.";
        } else {
          botResponse = "System query unresolvable. Core intelligence network requires telemetry validation.";
        }

        // Add Bot message with fluid character printing
        appendChatMessage('bot', botResponse, true);
      }, 900);
    });
  });

  function appendChatMessage(sender, text, animate = false) {
    const msg = document.createElement('div');
    msg.className = `bot-msg ${sender === 'user' ? 'outgoing' : 'incoming'}`;
    
    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble';
    msg.appendChild(bubble);
    DOM.botMessages.appendChild(msg);

    if (animate) {
      let charIdx = 0;
      bubble.textContent = "";
      function typeChar() {
        if (charIdx < text.length) {
          bubble.textContent += text[charIdx++];
          DOM.botMessages.scrollTop = DOM.botMessages.scrollHeight;
          setTimeout(typeChar, 18);
        }
      }
      typeChar();
    } else {
      bubble.textContent = text;
      DOM.botMessages.scrollTop = DOM.botMessages.scrollHeight;
    }
  }

  let typingEl = null;

  function showBotTypingIndicator() {
    typingEl = document.createElement('div');
    typingEl.className = 'bot-msg incoming typing-indicator-wrapper';
    typingEl.innerHTML = `<div class="msg-bubble"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>`;
    DOM.botMessages.appendChild(typingEl);
    DOM.botMessages.scrollTop = DOM.botMessages.scrollHeight;
  }

  function removeBotTypingIndicator() {
    if (typingEl) {
      typingEl.remove();
      typingEl = null;
    }
  }
}

// --- 12. DYNAMIC PROJECT DEPLOYMENT FILTERING ---
function initProjectFiltering() {
  if (!DOM.projectsGrid) return;

  DOM.filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      // Clear active indicator
      DOM.filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const filterVal = chip.getAttribute('data-filter');
      const cards = DOM.projectsGrid.querySelectorAll('.project-card');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filterVal === 'all' || category === filterVal) {
          card.style.display = 'block';
          // Force fade-in animation trigger
          card.style.animation = 'none';
          card.offsetHeight; // Trigger reflow
          card.style.animation = 'panelSyncIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// --- 13. REAL-TIME INTERACTIVE DIAGNOSTIC CANVAS CHARTS ---
function renderCanvasCharts() {
  renderLineChart();
  renderRadarChart();
}

function renderLineChart() {
  if (!DOM.lineChart) return;
  const canvas = DOM.lineChart;
  const ctx = canvas.getContext('2d');

  // Multiplier for responsive density
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const width = rect.width;
  const height = rect.height;

  const computedStyles = getComputedStyle(document.body);
  const accentColor = computedStyles.getPropertyValue('--accent-color').trim() || '#00f0ff';
  const accentGlowRGB = computedStyles.getPropertyValue('--accent-glow-rgb').trim() || '0, 240, 255';

  // Coding hours: Mon - Sun
  const data = [4.5, 6.2, 5.8, 8.0, 7.5, 9.4, 6.0];
  const maxVal = 10;
  const labels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  let animPercent = 0;

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Draw Grid Lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.lineWidth = 1;
    for (let i = 1; i <= 4; i++) {
      const y = height - (height / 5) * i;
      ctx.beginPath();
      ctx.moveTo(35, y);
      ctx.lineTo(width - 15, y);
      ctx.stroke();

      // Draw Grid value labels
      ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.font = "8px 'Fira Code', monospace";
      ctx.fillText(`${i * 2}h`, 8, y + 3);
    }

    // Grid vertical lines
    const paddingLeft = 35;
    const paddingRight = 15;
    const chartWidth = width - paddingLeft - paddingRight;
    const stepX = chartWidth / (data.length - 1);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
    for (let i = 0; i < data.length; i++) {
      const x = paddingLeft + stepX * i;
      ctx.beginPath();
      ctx.moveTo(x, 10);
      ctx.lineTo(x, height - 20);
      ctx.stroke();
    }

    // Generate coordinate matrix
    const points = data.map((val, idx) => {
      const x = paddingLeft + stepX * idx;
      const yValue = height - 25 - ((height - 40) * (val / maxVal)) * animPercent;
      return { x, y: yValue };
    });

    // Draw Filled Gradient under curve
    ctx.beginPath();
    ctx.moveTo(points[0].x, height - 20);
    for (let i = 0; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.lineTo(points[points.length - 1].x, height - 20);
    ctx.closePath();

    const fillGrad = ctx.createLinearGradient(0, 0, 0, height);
    fillGrad.addColorStop(0, `rgba(${accentGlowRGB}, 0.16)`);
    fillGrad.addColorStop(1, `rgba(${accentGlowRGB}, 0)`);
    ctx.fillStyle = fillGrad;
    ctx.fill();

    // Draw Glowing Line Path
    ctx.shadowBlur = 8;
    ctx.shadowColor = accentColor;
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.stroke();
    ctx.shadowBlur = 0; // Reset shadow

    // Draw Circle points
    points.forEach((p, idx) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();
    });

    if (animPercent < 1) {
      animPercent += 0.05;
      requestAnimationFrame(draw);
    }
  }

  draw();
}

function renderRadarChart() {
  if (!DOM.radarChart) return;
  const canvas = DOM.radarChart;
  const ctx = canvas.getContext('2d');

  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const width = rect.width;
  const height = rect.height;

  const computedStyles = getComputedStyle(document.body);
  const accentColor = computedStyles.getPropertyValue('--accent-color').trim() || '#00f0ff';
  const accentGlowRGB = computedStyles.getPropertyValue('--accent-glow-rgb').trim() || '0, 240, 255';

  const skills = [
    { label: "Java OOP", val: 85 },
    { label: "Full Stack", val: 75 },
    { label: "AI & ML", val: 80 },
    { label: "Cloud (Azure)", val: 70 },
    { label: "Prompt Eng.", val: 95 },
    { label: "Data Struct", val: 80 }
  ];

  const centerX = width / 2;
  const centerY = height / 2 - 10;
  const maxRadius = Math.min(width, height) / 2 - 38;

  let animPercent = 0;

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Draw Concentric Pentagons
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    const ringCount = 4;

    for (let r = 1; r <= ringCount; r++) {
      const radius = (maxRadius / ringCount) * r;
      ctx.beginPath();
      for (let i = 0; i < skills.length; i++) {
        const angle = (Math.PI * 2 / skills.length) * i - Math.PI / 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
    }

    // Draw Axis lines and Labels
    ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.font = "8px 'Fira Code', monospace";
    ctx.textAlign = "center";

    skills.forEach((s, idx) => {
      const angle = (Math.PI * 2 / skills.length) * idx - Math.PI / 2;
      const xOuter = centerX + Math.cos(angle) * maxRadius;
      const yOuter = centerY + Math.sin(angle) * maxRadius;

      // Draw spoke
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(xOuter, yOuter);
      ctx.stroke();

      // Print category names
      const labelX = centerX + Math.cos(angle) * (maxRadius + 18);
      const labelY = centerY + Math.sin(angle) * (maxRadius + 12) + 3;
      ctx.fillText(s.label, labelX, labelY);
    });

    // Draw Filled Skills Polygon
    const points = skills.map((s, idx) => {
      const angle = (Math.PI * 2 / skills.length) * idx - Math.PI / 2;
      const radius = (maxRadius * (s.val / 100)) * animPercent;
      return {
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius
      };
    });

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.closePath();

    ctx.fillStyle = `rgba(${accentGlowRGB}, 0.16)`;
    ctx.fill();

    ctx.shadowBlur = 6;
    ctx.shadowColor = accentColor;
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.shadowBlur = 0; // Reset

    if (animPercent < 1) {
      animPercent += 0.05;
      requestAnimationFrame(draw);
    }
  }

  draw();
}

// --- 14. SIMULATED GITHUB CONTRIBUTION MATRIX GRID ---
function initCommitHistoryMatrix() {
  if (!DOM.gitGrid) return;
  
  DOM.gitGrid.innerHTML = '';
  const totalBoxes = 60; // 60 days
  
  // High commit rates on random days to make git activity feel authentic
  for (let i = 0; i < totalBoxes; i++) {
    const box = document.createElement('div');
    
    // Choose active level
    let level = 0;
    const rand = Math.random();
    if (rand > 0.88) level = 4;      // critical commits
    else if (rand > 0.72) level = 3; // high activity
    else if (rand > 0.5) level = 2;  // medium activity
    else if (rand > 0.28) level = 1; // light activity
    
    box.className = `git-cell level-${level}`;

    // Tooltip simulation
    const date = new Date();
    date.setDate(date.getDate() - (totalBoxes - i));
    const commitCount = level === 0 ? "No" : level === 1 ? "1" : level === 2 ? "3" : level === 3 ? "5" : "9";
    box.title = `${commitCount} synchronization commits on ${date.toLocaleDateString()}`;
    
    DOM.gitGrid.appendChild(box);
  }
}

// --- 15. SECURE UPLINK NOTIFICATION DISPATCH ENGINE ---
function simulateActivityLogs() {
  const stream = document.getElementById('activity-stream');
  if (!stream) return;

  const activities = [
    { tag: "GIT_COMMIT", text: "Merged AZURE-900 credentials schema into master branch." },
    { tag: "SYS_SYNC", text: "Recalibrated neural chatbot parser coefficients." },
    { tag: "COMPILE", text: "Compiled index.html modules successfully in 1.4ms." },
    { tag: "UPLINK", text: "Established handshakes with secondary portfolio mirroring endpoints." },
    { tag: "GRID_PUSH", text: "Updated tech specialization circle offsets." }
  ];

  // Append initial actions
  activities.slice(0, 3).forEach(act => appendActivityRow(act));

  setInterval(() => {
    const nextAct = activities[Math.floor(Math.random() * activities.length)];
    appendActivityRow(nextAct);
  }, 10000);

  function appendActivityRow(act) {
    const row = document.createElement('div');
    row.className = 'activity-row';
    
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

    row.innerHTML = `
      <span class="activity-time">[${time}]</span>
      <span class="activity-tag tag-cyan">${act.tag}</span>
      <span class="activity-desc">${act.text}</span>
    `;

    stream.prepend(row);

    // Keep stream length max 4
    if (stream.children.length > 4) {
      stream.removeChild(stream.lastChild);
    }
  }
}

// --- 16. GLOBAL SEARCH ENGINE (Navbar system query) ---
function initGlobalSearch() {
  if (!DOM.globalSearch) return;

  const searchIndex = [
    { title: "Java OOP specialization", view: "skills", anchor: "skills-view", desc: "Core Java inheritance, abstract architectures, collections framework." },
    { title: "Prompt Engineering certification", view: "certifications", anchor: "certifications-view", desc: "DeepLearning.AI cryptographic credentials verified on AZ_OS." },
    { title: "Vibify Project (Spotify Clone)", view: "projects", anchor: "projects-view", desc: "Cyberpunk client dashboard containing Web Audio visualizer canvas interfaces." },
    { title: "Microsoft Azure Fundamentals", view: "certifications", anchor: "certifications-view", desc: "Cloud resource groups AZ-900 credential systems." },
    { title: "AI Model SaaS Dashboard", view: "projects", anchor: "projects-view", desc: "Monitoring console containing custom canvas loss profiles." },
    { title: "B.Tech CSE Education Details", view: "about", anchor: "about-view", desc: "RK University course chronology milestones." },
    { title: "Uplink Secure contact details", view: "contact", anchor: "contact-view", desc: "Email relays and LinkedIn sync gateways." }
  ];

  DOM.globalSearch.addEventListener('input', () => {
    const q = DOM.globalSearch.value.trim().toLowerCase();
    
    if (q.length > 0) {
      DOM.clearSearch.style.display = 'block';
      DOM.searchResultsOverlay.style.display = 'block';

      // Perform matching
      const matches = searchIndex.filter(item => 
        item.title.toLowerCase().includes(q) || 
        item.desc.toLowerCase().includes(q)
      );

      renderSearchResults(matches);
    } else {
      hideSearch();
    }
  });

  DOM.clearSearch.addEventListener('click', hideSearch);

  // Close search results overlay when clicking outside
  document.addEventListener('click', (e) => {
    if (!DOM.globalSearch.contains(e.target) && !DOM.searchResultsOverlay.contains(e.target)) {
      DOM.searchResultsOverlay.style.display = 'none';
    }
  });

  function renderSearchResults(results) {
    DOM.searchResultsOverlay.innerHTML = '';

    if (results.length === 0) {
      DOM.searchResultsOverlay.innerHTML = `<div class="search-result-hdr">NO SECTOR MATCHES FOUND</div>`;
      return;
    }

    const hdr = document.createElement('div');
    hdr.className = 'search-result-hdr';
    hdr.textContent = `DETECTION MATRIX (${results.length} MATCHES)`;
    DOM.searchResultsOverlay.appendChild(hdr);

    results.forEach(res => {
      const item = document.createElement('div');
      item.className = 'search-result-item';
      item.innerHTML = `<strong>${res.title}</strong><br><small style="font-size:0.75rem;opacity:0.7">${res.desc}</small>`;
      
      item.addEventListener('click', () => {
        // Close search
        hideSearch();

        // SwitchSPA view
        window.location.hash = `#${res.view}`;

        // Scroll to highlighted element
        setTimeout(() => {
          const el = document.getElementById(res.anchor);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            // Pulse highlighting overlay
            el.classList.add('search-pulse-glow');
            setTimeout(() => el.classList.remove('search-pulse-glow'), 2200);
          }
        }, 150);
      });
      DOM.searchResultsOverlay.appendChild(item);
    });
  }

  function hideSearch() {
    DOM.globalSearch.value = '';
    DOM.clearSearch.style.display = 'none';
    DOM.searchResultsOverlay.style.display = 'none';
  }
}

// --- 17. SYSTEM SETTINGS PANEL (HUD CONTROL MODULE) ---
function initSettingsPanel() {
  // Cursor Follower Switch Toggle
  if (DOM.cursorToggle) {
    DOM.cursorToggle.addEventListener('change', () => {
      SystemState.cursorEnabled = DOM.cursorToggle.checked;
      localStorage.setItem('ad_os_cursor', SystemState.cursorEnabled ? 'true' : 'false');
      if (SystemState.cursorEnabled) {
        document.body.classList.add('custom-cursor-active');
        if (DOM.customCursor) DOM.customCursor.style.opacity = '1';
        if (DOM.customCursorGlow) DOM.customCursorGlow.style.opacity = '0.4';
      } else {
        document.body.classList.remove('custom-cursor-active');
        if (DOM.customCursor) DOM.customCursor.style.opacity = '0';
        if (DOM.customCursorGlow) DOM.customCursorGlow.style.opacity = '0';
      }
    });
  }

  // Particle Density Slider
  if (DOM.particleDensitySlider) {
    DOM.particleDensitySlider.addEventListener('input', () => {
      const val = DOM.particleDensitySlider.value;
      DOM.densityVal.textContent = val;
      SystemState.particleDensity = parseInt(val, 10);
      localStorage.setItem('ad_os_density', val);
      window.updateBackgroundEngine();
    });
  }

  // Background Canvas Mode Selector
  if (DOM.canvasModeSelect) {
    DOM.canvasModeSelect.addEventListener('change', () => {
      const val = DOM.canvasModeSelect.value;
      SystemState.backgroundMode = val;
      localStorage.setItem('ad_os_bg', val);
      window.updateBackgroundEngine();
    });
  }

  // Settings Panel Color Theme Switchers
  DOM.themeSelectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      DOM.themeSelectBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedTheme = btn.getAttribute('data-theme');
      SystemState.theme = selectedTheme;
      document.body.className = `theme-${selectedTheme}`;
      localStorage.setItem('ad_os_theme', selectedTheme);
    });
  });
}

// --- 18. SCROLL & COMMUNICATE UPLINK HANDSHAKES ---
function initScrollAndTriggerWatchers() {
  // Navigation Menu Hub
  DOM.notificationBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    DOM.notificationMenu.style.display = DOM.notificationMenu.style.display === 'block' ? 'none' : 'block';
  });

  DOM.clearNotifications.addEventListener('click', () => {
    DOM.notifList.innerHTML = `<div style="text-align:center;padding:20px;font-size:0.8rem;color:var(--text-muted)">No system reports pending.</div>`;
    DOM.notificationBtn.classList.remove('notification-badge');
  });

  document.addEventListener('click', () => {
    if (DOM.notificationMenu) DOM.notificationMenu.style.display = 'none';
  });

  // Contact Transmit Submit handshakes
  if (DOM.uplinkForm) {
    DOM.uplinkForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      DOM.uplinkFeedback.classList.add('active');
      const textNode = DOM.uplinkFeedback.querySelector('.feedback-text');
      
      textNode.textContent = "> COMPILING PAYLOAD...";

      setTimeout(() => {
        textNode.textContent = "> DISPATCHING COMMUNICATE...";
        
        setTimeout(() => {
          textNode.textContent = "> TRANSMISSION SUCCESSFUL! GRID NODE UNLOCKED.";
          DOM.uplinkFeedback.querySelector('.feedback-spinner').style.display = 'none';

          // Inject custom message notification into notification hub
          const name = document.getElementById('contact-name').value;
          const notif = document.createElement('div');
          notif.className = 'notif-item unread';
          notif.innerHTML = `
            <span class="notif-dot"></span>
            <div class="notif-content">
              <div class="notif-title">GRID COMM RECEIVED</div>
              <div class="notif-time">Just now</div>
              <div class="notif-desc">Transmission received from sender identity: ${name}</div>
            </div>
          `;
          DOM.notifList.prepend(notif);
          DOM.notificationBtn.classList.add('notification-badge');

          // Reset Form
          DOM.uplinkForm.reset();

          setTimeout(() => {
            DOM.uplinkFeedback.classList.remove('active');
            // Restore spinner
            DOM.uplinkFeedback.querySelector('.feedback-spinner').style.display = 'block';
          }, 2500);
        }, 1200);
      }, 1000);
    });
  }

  // Resume Download Handler (Mock telemetry display)
  if (DOM.resumeBtn) {
    DOM.resumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert(">> Downloading Abhishek Daramoni Resume Schematic Hash (AZ-AD_2026.pdf)... Synchronizing connection.");
      // In a real application, window.open('resume_path.pdf') would execute.
    });
  }

  // SPA navigation links triggers within views
  const triggers = document.querySelectorAll('.nav-trigger');
  triggers.forEach(tr => {
    tr.addEventListener('click', (e) => {
      e.preventDefault();
      const view = tr.getAttribute('data-view');
      window.location.hash = `#${view}`;
    });
  });
}

// --- 19. MOBILE HAMBURGER DRAWER ENGINE ---
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const sidebar = document.querySelector('.sidebar');
  
  if (!toggleBtn || !sidebar) return;

  // Toggle open/close on click
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    document.body.classList.toggle('mobile-sidebar-active');
  });

  // Auto-close sidebar on mobile when a menu link is clicked
  const menuLinks = sidebar.querySelectorAll('.menu-item');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('mobile-sidebar-active');
    });
  });

  // Auto-close sidebar if clicking outside of it on main content
  const mainContent = document.querySelector('.main-content');
  if (mainContent) {
    mainContent.addEventListener('click', () => {
      if (document.body.classList.contains('mobile-sidebar-active')) {
        document.body.classList.remove('mobile-sidebar-active');
      }
    });
  }
}

// --- 20. 3D CARD PARALLAX TILT EFFECT ENGINE ---
function init3DTiltEffects() {
  const cards = document.querySelectorAll('.project-card, .cert-card');
  
  cards.forEach(card => {
    // Add necessary CSS perspective variables to card style
    card.style.transformStyle = 'preserve-3d';
    card.style.perspective = '1000px';
    
    // Find nested inner border or text to float
    const inner = card.querySelector('.project-card-header, .cert-header, p');
    if (inner) {
      inner.style.transform = 'translateZ(25px)';
      inner.style.transition = 'transform 0.1s ease';
    }

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; 
      const y = e.clientY - rect.top;  
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate normal offset ratio (-1 to 1)
      const rotateX = ((centerY - y) / centerY) * 10; 
      const rotateY = ((x - centerX) / centerX) * 10;
      
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

// --- 21. SCROLL REVEAL INTEGRATION (IntersectionObserver) ---
function initScrollReveal() {
  // Elements we want to reveal on scroll
  const revealElements = document.querySelectorAll(
    '.about-bio-card, .about-bot-card, .timeline-node, .tech-category-card, .gauge-card, .project-card, .cert-card, .chart-glass-box, .github-calendar-box, .contact-form-wrapper, .contact-endpoints-grid, .settings-card'
  );
  
  revealElements.forEach(el => {
    el.classList.add('reveal-on-scroll');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // If it's a skills gauge, trigger its animation when it scrolls in!
        if (entry.target.classList.contains('gauge-card')) {
          const gauge = entry.target.querySelector('.gauge-fill');
          if (gauge) {
            const percent = parseInt(entry.target.querySelector('.gauge-percentage').textContent, 10);
            const offset = 251.2 - (percent / 100) * 251.2;
            gauge.style.strokeDashoffset = offset;
          }
        }
        observer.unobserve(entry.target); // Reveal only once
      }
    });
  }, {
    threshold: 0.1, 
    rootMargin: '0px 0px -50px 0px' 
  });

  revealElements.forEach(el => observer.observe(el));
}
