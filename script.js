let respostas = {};

function responder(pergunta, resposta, botao) {
  respostas[pergunta] = resposta;

  let botoes = botao.parentElement.querySelectorAll("button");
  botoes.forEach(b => b.classList.remove("selecionado"));

  botao.classList.add("selecionado");
}

function mostrarResultado() {
  let pontos = 0;

  if (respostas.q1 === "linux") pontos++;
  if (respostas.q2 === "darwin") pontos++;
  if (respostas.q3 === "nt") pontos++;
  if (respostas.q4 === "android") pontos++;
  if (respostas.q5 === "linus") pontos++;

  document.getElementById("resultadoQuiz").innerHTML =
    `🧠 Você acertou <b>${pontos}/5</b>`;
}

/* PROGRESS + TOP BUTTON */
let topButton = document.getElementById("topButton");

window.onscroll = function () {

  let scroll = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (scroll / height) * 100;

  document.getElementById("progressBar").style.width = scrolled + "%";

  if (scroll > 300) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

function voltarTopo() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* sidebar ativa */
let sections = document.querySelectorAll("section");
let links = document.querySelectorAll(".sidebar a");

window.addEventListener("scroll", () => {
  let pos = window.scrollY + 200;

  sections.forEach(sec => {
    if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
      links.forEach(l => l.classList.remove("active"));
      document.querySelector(`.sidebar a[href="#${sec.id}"]`)
        ?.classList.add("active");
    }
  });
});
