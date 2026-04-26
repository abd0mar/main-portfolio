export class NavbarMovement {
  navContainer: HTMLDivElement | null;
  menu: HTMLDivElement | null
  icon: HTMLButtonElement | null;
  constructor() {
    this.navContainer = document.querySelector("#nav-container") as HTMLDivElement;
    this.menu = document.getElementById("nav-menu") as HTMLDivElement;
    this.icon = document.getElementById("nav-toggle") as HTMLButtonElement;
    this.init()
  }

  init() {
    this.toggleMenu()
    this.navAction()
  }

  navAction() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        this.navContainer?.classList.replace("border-transparent", "border-border")
        this.navContainer?.classList.replace("py-5", "py-2")
      } else {
        if (this.menu?.classList.contains("invisible")) {
          this.navContainer?.classList.replace("border-border", "border-transparent")
          console.log("yes")
        }
        this.navContainer?.classList.replace("py-2", "py-5")
      }
    })
  }

  toggleMenu() {
    this.icon?.addEventListener("click", () => {
      console.log("fine")
      if (this.menu?.classList.contains("invisible")) {
        this.menu?.classList.replace("invisible", "visible")
        this.menu?.classList.replace("opacity-0", "opacity-100")
        this.menu?.classList.replace("-top-25", "top-0")
        this.navContainer?.classList.replace("border-transparent", "border-border")
      } else {
        this.menu?.classList.replace("visible", "invisible")
        this.menu?.classList.replace("opacity-100", "opacity-0")
        this.menu?.classList.replace("top-0", "-top-25")
        this.navContainer?.classList.replace("border-border", "border-transparent")
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

// export class NavMenu {
//   icon: HTMLButtonElement | null;
//   menu: HTMLDivElement | null;
//   navContainer: HTMLDivElement | null
//   constructor() {
//     this.icon = document.getElementById("nav-toggle") as HTMLButtonElement;
//     this.menu = document.getElementById("nav-menu") as HTMLDivElement;
//     this.navContainer = document.querySelector("#nav-container") as HTMLDivElement;
//     this.toggleMenu()
//   }

//   toggleMenu() {
//     this.icon?.addEventListener("click", () => {
//       console.log("fine")
//       if (this.menu?.classList.contains("invisible")) {
//         this.menu?.classList.replace("invisible", "visible")
//         this.menu?.classList.replace("opacity-0", "opacity-100")
//         this.menu?.classList.replace("-top-25", "top-0")
//         this.navContainer?.classList.replace("border-transparent", "border-border")
//       } else {
//         this.menu?.classList.replace("visible", "invisible")
//         this.menu?.classList.replace("opacity-100", "opacity-0")
//         this.menu?.classList.replace("top-0", "-top-25")
//         this.navContainer?.classList.replace("border-border", "border-transparent")
//       }
//     })
//   }
// }