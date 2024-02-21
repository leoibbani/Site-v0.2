fetch("/components/cookies/cookies.html")
  .then((response) => response.text())
  .then((html) => {
    // Append the fetched HTML content to the cookie-banner div
    document.getElementById("cookie-banner").innerHTML += html;

    // Once the HTML is loaded, execute the following JavaScript

    // Function to set a cookie
    function setCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Function to check if a cookie exists
    function getCookie(name) {
      var nameEQ = name + "=";
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == " ") {
          cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
          return cookie.substring(nameEQ.length, cookie.length);
        }
      }
      return null;
    }

    // Function to handle the click event on the accept cookies button
    function acceptCookies() {
      setCookie("cookies_accepted", "true", 30); // Set cookie for 30 days
      hideCookieBanner();
    }

    // Function to hide the cookie banner
    function hideCookieBanner() {
      document.getElementById("cookie-banner").style.display = "none";
    }

    // Check if the user has already accepted cookies
    if (!getCookie("cookies_accepted")) {
      document.getElementById("cookie-banner").style.display = "block";
      document
        .getElementById("accept-cookies")
        .addEventListener("click", acceptCookies);
    }
  })
  .catch((error) =>
    console.error("Error loading cookie HTML:", error)
  );
