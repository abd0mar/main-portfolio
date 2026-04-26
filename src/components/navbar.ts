export class NavbarMovement {
  nav: HTMLElement | null;
  menu: HTMLDivElement | null
  toggleBtn: HTMLButtonElement | null;
  openIcon: SVGElement | null;
  closeIcon: SVGElement | null;
  constructor() {
    this.nav = document.querySelector("nav") as HTMLElement;
    this.menu = document.querySelector("#nav-menu") as HTMLDivElement;
    this.toggleBtn = document.querySelector("#nav-toggle") as HTMLButtonElement;
    this.openIcon = document.querySelector("#open-menu") as SVGElement;
    this.closeIcon = document.querySelector("#close-menu") as SVGElement;
    this.init()
  }

  init() {
    this.toggleMenu()
    this.navAction()
  }

  navAction() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        this.nav?.classList.replace("border-transparent", "border-border")
        this.nav?.classList.replace("py-5", "py-3")
      } else {
        this.nav?.classList.replace("border-border", "border-transparent")
        this.nav?.classList.replace("py-3", "py-5")
      }
    })
  }

  toggleMenu() {
    this.toggleBtn?.addEventListener("click", () => {
      console.log("fine")
      if (this.menu?.classList.contains("max-h-0")) {
        this.menu?.classList.replace("opacity-0", "opacity-100")
        this.menu?.classList.replace("max-h-0", "max-h-300")
        this.openIcon?.classList.add("hidden")
        this.closeIcon?.classList.remove("hidden")
      } else {
        this.menu?.classList.replace("opacity-100", "opacity-0")
        this.menu?.classList.replace("max-h-300", "max-h-0")
        this.closeIcon?.classList.add("hidden")
        this.openIcon?.classList.remove("hidden")
      }
    })
  }
}


export class ThemeBtn {
  btn: HTMLButtonElement | null;
  moonIcon: SVGElement | null;
  sunIcon: SVGElement | null;
  constructor() {
    this.btn = document.querySelector("#theme-btn") as HTMLButtonElement;
    this.moonIcon = document.querySelector("#moon-icon") as SVGElement;
    this.sunIcon = document.querySelector("#sun-icon") as SVGElement;
    this.init()
  }

  init() {
    const currTheme = localStorage.getItem("theme");
    this.updateIcons(currTheme || "light");
    this.changeTheme()
  }

  changeTheme() {
    this.btn?.addEventListener("click", () => {
      const currentTheme = document.documentElement.dataset.theme
      const newTheme = currentTheme === "light" ? "dark" : "light";
      this.updateIcons(newTheme);
      document.documentElement.dataset.theme = newTheme;
      localStorage.setItem("theme", newTheme)
    })
  }

  updateIcons(theme: string) {
    if (theme === "dark") {
      this.sunIcon?.classList.remove("hidden");
      this.moonIcon?.classList.add("hidden");
    } else {
      this.sunIcon?.classList.add("hidden");
      this.moonIcon?.classList.remove("hidden");
    }
  }
}