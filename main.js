// menu ---------
const menu = document.querySelectorAll(".li");

menu.forEach((list) => {
  list.addEventListener("click", () => {
    removeActiveClasses();
    list.classList.add("active");
  });
});

function removeActiveClasses() {
  menu.forEach((list) => {
    list.classList.remove("active");
  });
}

// gallery -----
function mostrarContenido(id) {
  const divs = document.querySelectorAll("#image-list .gallery");
  
  divs.forEach((div) => {
    div.classList.add("hide");
    div.classList.remove("show");
  });
  const div = document.getElementById(id);
  if (div) {
    div.classList.remove("hide");
    div.classList.add("show");

  }
}
