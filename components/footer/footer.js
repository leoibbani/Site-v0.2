fetch("/components/footer/footer.html")
  .then(response => response.text())
  .then(html => {
    // Inserisci il contenuto della navbar nell'elemento con l'id "navbar"
    document.getElementById("Footer").innerHTML = html;
  });