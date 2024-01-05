const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const fname = document.querySelector("#fname");

  let buscando = document.querySelector(".buscando");
  let encontrado = document.querySelector(".encontrado");
  let containerLog = document.querySelector(".container-log");
  containerLog.classList.remove("desactive");
  containerLog.classList.add("active");
  buscando.classList.remove("desactive");
  buscando.classList.add("active");
  encontrado.classList.remove("desactive");
  encontrado.classList.add("active");
});
