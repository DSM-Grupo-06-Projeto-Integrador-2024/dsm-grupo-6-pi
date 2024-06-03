const leftMenu = () => {
  const main = document.querySelector("main");
  const hamburguerMenu = document.getElementById("hamburguerMenu");
  const menuSection = document.createElement("section");
  const divButtons = document.createElement("div");
  const divCloseButton = document.createElement("div");

  const buttonClass = document.createElement("button");
  const buttonStudent = document.createElement("button");
  const buttonTeacher = document.createElement("button");
  const buttonClose = document.createElement("button");

  buttonClass.innerText = "Classes";
  buttonStudent.innerText = "Alunos";
  buttonTeacher.innerText = "Professores";
  buttonClose.innerText = "Fechar";

  buttonClose.id = "closeMenuButton";

  menuSection.classList.add("menu", "menu__hidden");
  divButtons.classList.add("menu__buttons");

  divButtons.append(buttonClass, buttonStudent, buttonTeacher);
  divCloseButton.append(buttonClose);

  menuSection.append(divButtons, divCloseButton);
  main.append(menuSection);

  hamburguerMenu.addEventListener("click", (event) => {
    menuSection.classList.toggle("menu__hidden");
  });

  menuSection.addEventListener("click", (event) => {
    if (event.currentTarget != event.target) {
      menuSection.classList.toggle("menu__hidden");
    }
  });
};

leftMenu();

export { leftMenu };
