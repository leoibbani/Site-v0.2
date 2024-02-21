// Carica il contenuto della navbar
fetch("/components/NavBar/navigationBar.html")
  .then(response => response.text())
  .then(html => {
    // Inserisci il contenuto della navbar nell'elemento con l'id "navbar"
    document.getElementById("NavBar").innerHTML = html;
  });

