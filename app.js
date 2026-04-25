import { projects } from "./assets/projects.js";

const situations = [
  {
    id: "all",
    label: "All projects",
    description: "See the full collection.",
    heading: "All projects",
    matcher: () => true,
  },
  {
    id: "travel",
    label: "Traveling",
    description: "For shared costs and menu prices abroad.",
    heading: "Projects for traveling",
    matcher: (project) => ["freesplit", "nomadprice"].includes(project.slug),
  },
  {
    id: "dining",
    label: "Restaurant bills",
    description: "For tips, totals, and menu price clarity.",
    heading: "Projects for restaurant decisions",
    matcher: (project) => ["tiphelper", "nomadprice"].includes(project.slug),
  },
  {
    id: "money",
    label: "Sharing money",
    description: "For splitting and checking what people should pay.",
    heading: "Projects for money decisions",
    matcher: (project) => ["freesplit", "tiphelper"].includes(project.slug),
  },
  {
    id: "career",
    label: "PM interviews",
    description: "For practicing answers and getting feedback.",
    heading: "Projects for interview prep",
    matcher: (project) => project.slug === "interviewify",
  },
  {
    id: "game-night",
    label: "Game night",
    description: "For quick private games with friends and bots.",
    heading: "Projects for game night",
    matcher: (project) => project.slug === "take5",
  },
];

const filterBar = document.querySelector("#filter-bar");
const projectGrid = document.querySelector("#project-grid");
const projectsHeading = document.querySelector("#projects-heading");
const shortcutButtons = document.querySelectorAll("[data-filter-target]");

let activeSituation = "all";

const projectDetails = {
  freesplit: {
    bestFor: "Friends, travel groups, and anyone who wants to track shared spending without paying for a subscription.",
    useWhen: "Use it when several people are paying for one trip, event, or shared plan and you want the balances to stay clear.",
  },
  tiphelper: {
    bestFor: "People paying restaurant bills who want to avoid inflated or confusing gratuity totals.",
    useWhen: "Use it right before you pay, especially when the tip screen feels aggressive or unclear.",
  },
  nomadprice: {
    bestFor: "Travelers who think in US dollars and want a faster read on menu prices abroad.",
    useWhen: "Use it when you are looking at a foreign menu and want a quick price reality check before ordering.",
  },
  interviewify: {
    bestFor: "Product managers who want to practice interview answers and get sharper feedback immediately.",
    useWhen: "Use it during interview prep when normal mock feedback is too inconsistent or too shallow to help.",
  },
  take5: {
    bestFor: "Friends who want a quick private card game that works on phones, desktops, and mixed group sizes.",
    useWhen: "Use it when you want an instant game night, only have a few people available, or need bots to fill the table.",
  },
};

function renderFilters() {
  filterBar.innerHTML = situations
    .map(
      (situation) => `
        <button
          class="filter-button ${situation.id === activeSituation ? "active" : ""}"
          type="button"
          data-filter="${situation.id}"
        >
          <strong>${situation.label}</strong>
          <span>${situation.description}</span>
        </button>
      `
    )
    .join("");

  filterBar.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      setSituation(button.dataset.filter);
    });
  });
}

function renderProjects() {
  const selected = situations.find((situation) => situation.id === activeSituation);
  const visibleProjects = projects.filter(selected.matcher);

  projectsHeading.textContent = selected.heading;

  projectGrid.innerHTML = visibleProjects
    .map((project) => {
      const detail = projectDetails[project.slug];

      return `
        <article class="project-card" style="--card-accent:${project.accent};">
          <div class="card-top">
            <div>
              <p class="card-meta">${project.category}</p>
              <h3 class="card-title">${project.name}</h3>
            </div>
          </div>

          <p class="card-tagline">${project.tagline}</p>
          <p class="card-summary">${project.summary}</p>

          <div class="card-block">
            <h3>Best for</h3>
            <p>${detail.bestFor}</p>
          </div>

          <div class="card-block">
            <h3>Use it when</h3>
            <p>${detail.useWhen}</p>
          </div>

          <div class="card-block">
            <h3>What it does</h3>
            <ul>
              ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
            </ul>
          </div>

          <div class="tag-row">
            ${project.hooks.map((hook) => `<span>${hook}</span>`).join("")}
          </div>

          <div class="card-footer">
            <span class="match-note">${
              activeSituation === "all"
                ? project.audience
                : `Matches: ${selected.label.toLowerCase()}`
            }</span>
            <a class="card-link" href="${project.url}" target="_blank" rel="noreferrer">
              Open ${project.name}
            </a>
          </div>
        </article>
      `;
    })
    .join("");
}

function setSituation(nextSituation) {
  activeSituation = nextSituation;
  renderFilters();
  renderProjects();
}

shortcutButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.filterTarget;
    setSituation(target);
    document.querySelector("#situations").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

renderFilters();
renderProjects();
