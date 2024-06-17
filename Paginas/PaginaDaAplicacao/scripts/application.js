const leftMenu = () => {
  const aside = document.getElementById("leftMenu");
  const hamburguerMenu = document.getElementById("hamburguerMenu");
  hamburguerMenu.addEventListener("click", (event) => {
    aside.classList.toggle("menu__hidden");
  });

  aside.addEventListener("click", (event) => {
    if (event.currentTarget != event.target) {
      menuSection.classList.toggle("menu__hidden");
    }
  });
};

const logout = () => {
  const logoutButton = document.getElementById("logout");
  logoutButton.addEventListener("click", (event) => {
    window.location.replace("../index.html");
  });
};

leftMenu();
logout();

export { leftMenu };
