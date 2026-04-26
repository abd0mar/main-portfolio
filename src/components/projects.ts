// Import project images
import dashboardDark from '../assets/images/project-dashboard-dark.webp';
import dashboardLight from '../assets/images/project-dashboard-light.webp';

export class Projects {


  projectsContainer: HTMLElement | null;
  projectsList: Project[];
  isExtended: boolean;
  projectSection: HTMLDivElement | null;
  projectSectionContainer: HTMLDivElement | null;

  constructor() {
    this.projectsContainer = document.querySelector('#projects-container');
    this.projectSection = document.querySelector("#projects-section");
    this.projectSectionContainer = document.querySelector("#project-section-container");
    this.isExtended = false;
    this.projectsList = [
      {
        name: 'Dashboard Website',
        description: 'A full-featured online store with product catalog, shopping cart, and secure checkout. Built with modern design principles and optimized for conversions.',
        technologies: ['HTML', 'CSS', 'Vanilla JS'],
        imageOne: dashboardDark,
        imageTwo: dashboardLight,
        liveDemoLink: 'https://abd0mar.github.io/Dashboard_Project/',
        githubLink: 'https://github.com/abd0mar/Dashboard_Project.git',
      },
    ];

    this.init()
  }
  init() {
    this.renderProjects();
    this.extendAction();
    this.showMoreBtnAction()
  }

  renderProjects() {
    if (this.projectsList.length > 3) {
      this.isExtended = true;
    }
    this.projectsList.forEach((project: { name: string; description: string; technologies: string[]; imageOne: string; imageTwo: string; liveDemoLink: string; githubLink: string }, index: number) => {
      const projectBox: HTMLDivElement = document.createElement("div");
      projectBox.className = 'project-card group';
      projectBox.innerHTML = `
        <div class="absolute flex items-center justify-center rounded-lg top-3 left-3 px-3 py-1 border border-border z-10 bg-bg-primary/90 backdrop-blur-2xl"><span class="font-bold text-text text-md">${this.projectsList.length < 10 ? "0" + (index + 1) : (index + 1)}</span></div>
        <div class="relative overflow-hidden">
          <img loading="lazy" class="relative group-hover:scale-105 delay-75" style="transition: 0.3s" src="${project.imageOne}" alt="${project.name} screenshot">
        </div>
        <div class="project-card-info">
          <div class="project-card__techs">
          ${project.technologies.map((tech: string) => `<span class="project-card__tech">${tech}</span>`).join('')}
          </div>
          <h3 class="project-name">${project.name}</h3>
          <span class="project-description">
            ${project.description}
          </span>
          <div class="project-contact">
            <a href="${project.liveDemoLink}"  target="_blank" class="preview" aria-label="View live demo">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-4 h-4" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
              Live Demo
            </a>
            <a href="${project.githubLink}" target="_blank" class="github-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github w-4 h-4" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
          </div>
        </div>`;
      this.projectsContainer?.append(projectBox);
    })
  }

  showMoreBtnAction() {
    const showMoreBtn = document.querySelector("#show-more-btn");
    if (this.projectsList.length > 3) {
      showMoreBtn?.classList.remove("hidden");
      showMoreBtn?.addEventListener("click", () => {
        if (this.isExtended) {
          this.isExtended = false;
          showMoreBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM204.5 138.7c23.5-16.8 52.4-26.7 83.5-26.7 79.5 0 144 64.5 144 144 0 31.1-9.9 59.9-26.7 83.5l-34.7-34.7c12.7-21.4 17-47.7 10.1-73.7-13.7-51.2-66.4-81.6-117.6-67.9-8.6 2.3-16.7 5.7-24 10l-34.7-34.7zM325.3 395.1c-11.9 3.2-24.4 4.9-37.3 4.9-79.5 0-144-64.5-144-144 0-12.9 1.7-25.4 4.9-37.3L69.4 139.2c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6l-64.2-64.2z"/></svg>Show Less`;
        } else {
          this.isExtended = true
          showMoreBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z" /></svg>Show More`;
        }
        this.extendAction()
      })
    } else {
      showMoreBtn?.classList.add("hidden");
    }
  }

  extendAction() {
    if (this.isExtended) {
      const fadeElement: HTMLDivElement | null = document.createElement("div");
      console.log(fadeElement)

      fadeElement.id = "fade-element";
      fadeElement.className = "absolute bottom-0 left-0 w-full h-80 bg-linear-to-t from-bg-alt via-bg-alt to-transparent z-10";
      this.projectSection?.append(fadeElement);
      this.projectSectionContainer?.classList.add("max-h-200");
    } else {
      const fadeElement: HTMLDivElement | null = document.querySelector("#fade-element");
      fadeElement?.remove();
      this.projectSectionContainer?.classList.remove("max-h-200");
    }
  }
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  imageOne: string;
  imageTwo: string;
  liveDemoLink: string;
  githubLink: string;
}