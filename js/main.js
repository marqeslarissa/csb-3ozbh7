const controle = document.querySelectorAll("[data-controle]");

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
  });
}); //for do proprio array

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]");
  if (operacao === "-") {
    peca.value = parseInt(peca.value) - 1; //parseInt para string virar numero
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}
