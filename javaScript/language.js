let currentLanguage = "et";

function toggleLanguage() {
  const elements = document.querySelectorAll("[data-et][data-en]");
  currentLanguage = currentLanguage === "et" ? "en" : "et";

  elements.forEach((el) => {
    el.textContent = el.getAttribute(`data-${currentLanguage}`);
  });

  // Muuda ka nupu tekst
  const button = document.getElementById("language-toggle");
  button.textContent = currentLanguage === "et" ? "Vaheta keel" : "Switch Language";
}
