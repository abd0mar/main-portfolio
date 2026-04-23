// Import project images
import dashboardDark from '../assets/images/project-dashboard-dark.png';
import dashboardLight from '../assets/images/project-dashboard-light.png';

export class Projects{

  projectsSection: HTMLElement | null;
  projectsList: {
    name: string;
    description: string;
    technologies: string[];
    imageOne: string;
    imageTwo: string;
    liveDemoLink: string;
    githubLink: string;
  }[];
  isExtended: boolean;
  projectSection:HTMLDivElement | null;
  projectSectionContainer:HTMLDivElement | null;

  constructor(){
    this.projectsSection = document.querySelector('#projects-container');
    this.projectSection = document.querySelector("#project-section");
    this.projectSectionContainer= document.querySelector("#project-section-container");
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
  init(){
    this.renderProjects();
    this.expandAction();
    this.showMoreBtnAction()
  }

  renderProjects(){
    if(this.projectsList.length > 3){
      this.isExtended = true;
    }
    this.projectsList.forEach((project: { name: string; description: string; technologies: string[]; imageOne: string; imageTwo: string; liveDemoLink: string; githubLink: string }, index: number) => {
      const projectBox:HTMLDivElement = document.createElement("div");
      projectBox.className = 'project-card group';
      projectBox.innerHTML =`
        <div class="absolute flex items-center justify-center rounded-lg top-3 left-3 px-3 py-1 border border-border z-10 bg-bg-primary/90 backdrop-blur-2xl"><span class="font-bold text-text text-md">${this.projectsList.length < 10 ? "0" + (index + 1) : (index + 1)}</span></div>
        <div class="relative overflow-hidden">
          <img class="relative group-hover:scale-105 delay-75" style="transition: 0.3s" src="${project.imageOne}" alt="${project.name} screenshot">
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
            <a href="${project.liveDemoLink}"  target="_blank" class="preview">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-4 h-4" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
              Live Demo
            </a>
            <a href="${project.githubLink}" target="_blank" class="github-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github w-4 h-4" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
          </div>
        </div>`;
      this.projectsSection?.append(projectBox);
    })
  }

  expandAction(){
    if(this.isExtended){
      const fadeElement:HTMLDivElement | null = document.createElement("div");

      fadeElement.id = "fade-element";
      fadeElement.className = "absolute bottom-0 left-0 w-full h-60 bg-linear-to-t from-bg-alt via-bg-alt to-transparent z-10";
      this.projectSection?.append(fadeElement);
      this.projectSectionContainer?.classList.replace("max-h-full", "max-h-235");
    }else{
      const fadeElement:HTMLDivElement | null = document.querySelector("#fade-element");
      fadeElement?.remove();
      this.projectSectionContainer?.classList.replace("max-h-235", "max-h-full");
    }
  }

  showMoreBtnAction(){
    const showMoreBtn = document.querySelector("#show-more-btn");
    if (this.projectsList.length > 3) {
      showMoreBtn?.classList.remove("hidden");
      showMoreBtn?.addEventListener("click", () => {
        if(this.isExtended){
          this.isExtended = false;
          showMoreBtn.innerHTML = `<i class="fa-regular fa-eye-slash"></i>Show Less`;
        }else{
          this.isExtended = true
          showMoreBtn.innerHTML = `<i class="fa-regular fa-eye"></i>Show More`;
        }
        this.expandAction()
      })
    }else{
      showMoreBtn?.classList.add("hidden");
    }
  }
}