export class NavbarMovement{
  nav: any;
  constructor(){
    this.nav = document.querySelector("nav");
    this.navAction()
  }

  navAction(){
    window.addEventListener("scroll", () => {
        if(window.scrollY > 50){
          // this.nav.classList.add("") 
          this.nav.classList.replace("border-transparent", "border-border")
          this.nav.classList.replace("py-5", "py-2")
        }else{
          this.nav.classList.replace("border-border", "border-transparent")
          this.nav.classList.replace("py-2", "py-5")
        }
    })
  }

}


export class ThemeBtn{
  btn: any;
  moonIcn: any;
  sunIcon: any;
  constructor(){
    this.btn = document.querySelector("#theme-btn");
    this.moonIcn = document.querySelector("#moon-icon");
    this.sunIcon = document.querySelector("#sun-icon");
    // console.log(this)
    this.init()
  }
  init(){
    // this.lsChk()
    const currTheme = localStorage.getItem("theme")
    // console.log(currTheme)
    if(currTheme) this.updateIcons(currTheme);
    this.changeTheme()
  }
  changeTheme() {
    this.btn.addEventListener("click", () => {
      if(document.documentElement.dataset.theme === "light"){
        document.documentElement.dataset.theme = "dark";
        this.moonIcn.classList.add("hidden")
        this.sunIcon.classList.remove("hidden")
      }else{
        document.documentElement.dataset.theme = "light";
        this.moonIcn.classList.remove("hidden")
        this.sunIcon.classList.add("hidden")
      }
      localStorage.setItem("theme", document.documentElement.dataset.theme)
    })
  }
  updateIcons(theme: string) {
    const sunIcon = document.querySelector("#sun-icon");
    const moonIcon = document.querySelector("#moon-icon");

    if (theme === "dark") {
      sunIcon?.classList.remove("hidden");
      moonIcon?.classList.add("hidden");  
    } else {
      sunIcon?.classList.add("hidden");
      moonIcon?.classList.remove("hidden");
    }
  }
}