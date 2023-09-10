const button = document.getElementById("showmail");
const mail = "info@leonardobani.it";

button.addEventListener("click", () => {
  // Cambia il testo all'interno del messaggio
  const message = document.getElementById("showmail");
  message.textContent = "if mail app doesn't open ⬆️";

  document.getElementById("lastname").textContent = "info@leonardobani.it";

  // Apri l'applicazione delle mail
  const mailto =
    "mailto:info@leonardobani.it?subject=Ciao, ho bisogno di un sito!";
  window.location.href = mailto;
});
