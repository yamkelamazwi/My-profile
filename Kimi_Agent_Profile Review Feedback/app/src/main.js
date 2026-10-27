const projects = {
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

function makeListItems(items) {
  return items.map((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
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
