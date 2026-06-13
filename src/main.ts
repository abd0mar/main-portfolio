import './style/style.css';

import { ThemeBtn } from './components/navbar';
import { NavbarMovement } from './components/navbar';
import { Projects } from './components/projects';
import { InputValidation } from './components/contact';

new ThemeBtn();
new NavbarMovement();
new Projects();
new InputValidation();

const sections = document.querySelectorAll<HTMLElement>("section");
let observer = new IntersectionObserver((entries) => {
  entries.forEach(section => { if (section.isIntersecting) section.target.classList.add("show") })
})

sections.forEach(e => {
  observer.observe(e);
})
