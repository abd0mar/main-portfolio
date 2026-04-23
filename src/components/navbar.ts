export class NavbarMovement{
  nav: HTMLElement | null;
  constructor(){
    this.nav = document.querySelector("nav");
    this.navAction()
  }

  navAction(){
    window.addEventListener("scroll", () => {
        if(window.scrollY > 50){
          // this.nav.classList.add("") 
          this.nav?.classList.replace("border-transparent", "border-border")
          this.nav?.classList.replace("py-5", "py-2")
        }else{
          this.nav?.classList.replace("border-border", "border-transparent")
          this.nav?.classList.replace("py-2", "py-5")
        }
    })
  }

}


export class ThemeBtn{
  btn: HTMLButtonElement | null;
  moonIcon: SVGElement | null;
  sunIcon: SVGElement | null;
  constructor(){
    this.btn = document.querySelector("#theme-btn");
    this.moonIcon = document.querySelector("#moon-icon");
    this.sunIcon = document.querySelector("#sun-icon");
    this.init()
  }

  init(){
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