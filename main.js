const projects = {
  "github-finder": {
    tabId: "tab-github-finder",
    kicker: "GitHub API integration",
    title: "GitHub Profile Finder",
    description: "A responsive GitHub profile search app that lets users look up any GitHub username and view profile details, public stats, and recent repositories using the GitHub API.",
    address: "yamkelamazwi.github.io/GitHub-profile-finder/",
    features: [
      "Search by username",
      "Profile statistics",
      "Recent repositories",
      "Favorites and history",
      "Mobile-first responsive layout"
    ],
    stack: ["HTML", "CSS", "JavaScript", "GitHub API", "Responsive UI"],
    live: "https://yamkelamazwi.github.io/GitHub-profile-finder/",
    source: "https://github.com/yamkelamazwi/GitHub-profile-finder"
  },
  regex: {
    tabId: "tab-regex",
    kicker: "Interactive web tool",
    title: "Regex Sandbox",
    description: "An interactive environment for testing regular expressions, validating patterns and visualising matches in real time.",
    address: "yamkelamazwi.github.io/regex-sandbox/",
    features: ["Real-time pattern matching", "Match visualisation", "Input validation"],
    stack: ["HTML", "CSS", "JavaScript", "Regex"],
    live: "https://yamkelamazwi.github.io/regex-sandbox/",
    source: "https://github.com/yamkelamazwi/regex-sandbox"
  },
  markdown: {
    tabId: "tab-markdown",
    kicker: "Browser-based productivity tool",
    title: "Markdown to HTML Converter",
    description: "A browser-based converter that transforms Markdown into HTML through custom parsing and pattern-matching logic.",
    address: "yamkelamazwi.github.io/Markdown-to-HTML-converter/",
    features: ["Real-time conversion", "Live HTML preview", "Copy HTML output"],
    stack: ["HTML", "CSS", "JavaScript", "Markdown"],
    live: "https://yamkelamazwi.github.io/Markdown-to-HTML-converter/",
    source: "https://github.com/yamkelamazwi/Markdown-to-HTML-converter"
  }
};

const tabs = Array.from(document.querySelectorAll("[data-project]"));
const panel = document.querySelector("#project-panel");
const screenshots = Array.from(document.querySelectorAll("[data-screenshot]"));
const browserAddress = document.querySelector("#browser-address");
const projectKicker = document.querySelector("#project-kicker");
const projectTitle = document.querySelector("#project-title");
const projectDescription = document.querySelector("#project-description");
const projectFeatures = document.querySelector("#project-features");
const projectStack = document.querySelector("#project-stack");
const liveLink = document.querySelector("#live-link");
const sourceLink = document.querySelector("#source-link");

const projectPreviewSvg = {
  regex: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900">
      <defs>
        <linearGradient id="bg1" x1="0" x2="1">
          <stop offset="0%" stop-color="#101722"/>
          <stop offset="100%" stop-color="#171d2f"/>
        </linearGradient>
      </defs>
      <rect width="1440" height="900" fill="url(#bg1)"/>
      <rect x="60" y="60" width="1320" height="780" rx="26" fill="#0d1117" stroke="#30363d" />
      <rect x="120" y="120" width="680" height="180" rx="18" fill="#121b2c" stroke="#2d3c5b"/>
      <text x="160" y="165" fill="#8b949e" font-family="Arial" font-size="26">Regex Pattern</text>
      <rect x="160" y="195" width="560" height="54" rx="12" fill="#0f1722" stroke="#58a6ff"/>
      <text x="185" y="230" fill="#58a6ff" font-family="Arial" font-size="28">^([A-Z][a-z]+)\s+\d{2}</text>
      <rect x="120" y="340" width="680" height="200" rx="18" fill="#111827" stroke="#30363d"/>
      <text x="160" y="385" fill="#8b949e" font-family="Arial" font-size="26">Test String</text>
      <rect x="160" y="410" width="560" height="92" rx="12" fill="#0d1117" stroke="#30363d"/>
      <text x="185" y="470" fill="#e6edf3" font-family="Arial" font-size="24">Alice 23, Bob 14, Charlie 28</text>
      <rect x="860" y="120" width="460" height="420" rx="20" fill="#0d1117" stroke="#30363d"/>
      <text x="900" y="170" fill="#8b949e" font-family="Arial" font-size="24">Matches</text>
      <rect x="900" y="210" width="380" height="240" rx="12" fill="#121b2c"/>
      <circle cx="960" cy="270" r="12" fill="#3fb950"/>
      <text x="985" y="280" fill="#e6edf3" font-family="Arial" font-size="24">Alice</text>
      <circle cx="960" cy="335" r="12" fill="#f1e05a"/>
      <text x="985" y="345" fill="#e6edf3" font-family="Arial" font-size="24">Bob</text>
      <circle cx="960" cy="400" r="12" fill="#58a6ff"/>
      <text x="985" y="410" fill="#e6edf3" font-family="Arial" font-size="24">Charlie</text>
      <rect x="120" y="590" width="1200" height="170" rx="18" fill="#111827" stroke="#30363d"/>
      <text x="160" y="638" fill="#8b949e" font-family="Arial" font-size="24">Result Summary</text>
      <text x="160" y="690" fill="#e6edf3" font-family="Arial" font-size="34">3 matches found • 100% valid pattern</text>
    </svg>
  `,
  markdown: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900">
      <defs>
        <linearGradient id="bg2" x1="0" x2="1">
          <stop offset="0%" stop-color="#121826"/>
          <stop offset="100%" stop-color="#171d2e"/>
        </linearGradient>
      </defs>
      <rect width="1440" height="900" fill="url(#bg2)"/>
      <rect x="70" y="70" width="620" height="760" rx="24" fill="#0d1117" stroke="#30363d"/>
      <rect x="750" y="70" width="620" height="760" rx="24" fill="#0d1117" stroke="#30363d"/>
      <text x="110" y="125" fill="#8b949e" font-family="Arial" font-size="24">Markdown</text>
      <rect x="110" y="165" width="530" height="570" rx="16" fill="#111827" stroke="#30363d"/>
      <text x="145" y="235" fill="#e6edf3" font-family="Arial" font-size="30"># My Project</text>
      <text x="145" y="290" fill="#e6edf3" font-family="Arial" font-size="28">**Bold text** and *italic text*</text>
      <text x="145" y="350" fill="#e6edf3" font-family="Arial" font-size="28">- List item 1</text>
      <text x="145" y="405" fill="#e6edf3" font-family="Arial" font-size="28">- List item 2</text>
      <text x="145" y="485" fill="#8b949e" font-family="Arial" font-size="22">> Quote block</text>
      <text x="790" y="125" fill="#8b949e" font-family="Arial" font-size="24">HTML Preview</text>
      <rect x="790" y="165" width="530" height="570" rx="16" fill="#101722" stroke="#30363d"/>
      <text x="830" y="240" fill="#58a6ff" font-family="Arial" font-size="28">&lt;h1&gt;My Project&lt;/h1&gt;</text>
      <text x="830" y="295" fill="#f1e05a" font-family="Arial" font-size="28">&lt;strong&gt;Bold text&lt;/strong&gt;</text>
      <text x="830" y="350" fill="#e6edf3" font-family="Arial" font-size="25">&lt;ul&gt; ... &lt;/ul&gt;</text>
      <text x="830" y="410" fill="#e6edf3" font-family="Arial" font-size="25">&lt;blockquote&gt;Quote&lt;/blockquote&gt;</text>
    </svg>
  `,
  "github-finder": `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900">
      <defs>
        <linearGradient id="bg3" x1="0" x2="1">
          <stop offset="0%" stop-color="#101722"/>
          <stop offset="100%" stop-color="#171d2e"/>
        </linearGradient>
      </defs>
      <rect width="1440" height="900" fill="url(#bg3)"/>
      <rect x="70" y="70" width="1300" height="760" rx="26" fill="#0d1117" stroke="#30363d"/>
      <rect x="110" y="110" width="1220" height="120" rx="20" fill="#161b22" stroke="#30363d"/>
      <text x="150" y="180" fill="#e6edf3" font-family="Arial" font-size="34">GitHub Profile Finder</text>
      <rect x="110" y="260" width="1220" height="90" rx="16" fill="#0d1117" stroke="#30363d"/>
      <text x="150" y="315" fill="#8b949e" font-family="Arial" font-size="28">Enter GitHub username</text>
      <rect x="110" y="390" width="330" height="220" rx="24" fill="#121b2c" stroke="#30363d"/>
      <circle cx="250" cy="478" r="64" fill="#58a6ff"/>
      <circle cx="250" cy="470" r="36" fill="#0d1117"/>
      <rect x="490" y="390" width="840" height="240" rx="24" fill="#0d1117" stroke="#30363d"/>
      <text x="535" y="455" fill="#e6edf3" font-family="Arial" font-size="40">Yamkela Mazwi</text>
      <text x="535" y="510" fill="#8b949e" font-family="Arial" font-size="24">@yamkelamazwi</text>
      <rect x="530" y="560" width="760" height="46" rx="12" fill="#161b22"/>
      <text x="555" y="591" fill="#e6edf3" font-family="Arial" font-size="22">Followers  •  Following  •  Repositories</text>
      <rect x="110" y="640" width="1220" height="140" rx="22" fill="#161b22" stroke="#30363d"/>
      <text x="150" y="690" fill="#e6edf3" font-family="Arial" font-size="28">Recent repositories</text>
      <rect x="180" y="720" width="260" height="18" rx="9" fill="#30363d"/>
      <rect x="470" y="720" width="280" height="18" rx="9" fill="#30363d"/>
      <rect x="790" y="720" width="260" height="18" rx="9" fill="#30363d"/>
    </svg>
  `
};

function makeListItems(items) {
  return items.map((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  });
}

function setProjectPreviewImages() {
  screenshots.forEach((image) => {
    const key = image.dataset.screenshot;
    if (projectPreviewSvg[key]) {
      image.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(projectPreviewSvg[key])}`;
    }
  });
}

function selectProject(key, moveFocus = false) {
  const project = projects[key];
  if (!project) return;

  tabs.forEach((tab) => {
    const selected = tab.dataset.project === key;
    tab.classList.toggle("is-active", selected);
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && moveFocus) tab.focus();
  });

  screenshots.forEach((image) => {
    const selected = image.dataset.screenshot === key;
    image.classList.toggle("is-active", selected);
    image.setAttribute("aria-hidden", String(!selected));
  });

  panel.setAttribute("aria-labelledby", project.tabId);
  browserAddress.textContent = project.address;
  projectKicker.textContent = project.kicker;
  projectTitle.textContent = project.title;
  projectDescription.textContent = project.description;
  projectFeatures.replaceChildren(...makeListItems(project.features));
  projectStack.replaceChildren(...makeListItems(project.stack));
  liveLink.href = project.live;
  sourceLink.href = project.source;
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectProject(tab.dataset.project));
  tab.addEventListener("keydown", (event) => {
    let nextIndex;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;
    if (nextIndex === undefined) return;
    event.preventDefault();
    selectProject(tabs[nextIndex].dataset.project, true);
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const header = document.querySelector("[data-header]");

function setMenu(open) {
  siteNav.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
}

menuToggle.addEventListener("click", () => {
  setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("click", (event) => {
  if (!header.contains(event.target)) setMenu(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenu(false);
    menuToggle.focus();
  }
});

window.matchMedia("(min-width: 64rem)").addEventListener("change", () => setMenu(false));

document.querySelector("#year").textContent = new Date().getFullYear();

setProjectPreviewImages();
selectProject("github-finder");
