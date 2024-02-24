fetch("/components/NavBar/navigationBar.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById("NavBar").innerHTML = html;

    
  });