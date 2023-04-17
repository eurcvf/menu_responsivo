let show = true;

const menuSection = document.querySelector(".header_menu_section");
const menuBurguer = menuSection.querySelector(".header_menu_hamburguer");

menuBurguer.addEventListener("click", () => {
  menuSection.classList.toggle("active", show);
  show = !show;
});
