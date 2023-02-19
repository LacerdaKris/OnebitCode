//referências a variáveis com nome pra cores usadas em todo o style
const root = document.querySelector(":root")
//demais variáveis globais
const main = document.querySelector("main")
const input = document.getElementById("input")
const permitidas = ["(", ")","/","7","8","9","*","4","5","6","-","1","2","3","+","0",".","="]

document.getElementById('temaBotão').addEventListener('click', function() {
  if (main.dataset.tema === "escuro") {
    root.style.setProperty("--bg-color", "white")
    root.style.setProperty("--font-color", "black")
    root.style.setProperty("--primary-color", "mediumvioletred")
    main.dataset.tema = "claro"
  } else {
    root.style.setProperty("--bg-color", "black")
    root.style.setProperty("--font-color", "white")
    root.style.setProperty("--primary-color", "#f35cda")
    main.dataset.tema = "escuro"
  }
})