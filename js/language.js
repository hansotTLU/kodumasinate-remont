const languages = {
  en: {
    home: "Home",
    contact: "Contact",
    contactFormTitle: "Contact Us",
    name: "Name",
    email: "Email",
    address: "Address",
    phone: "Phone",
    productType: "Product Type",
    brand: "Brand",
    model: "Model",
    description: "Issue Description",
    pnc: "PNC or E-number",
    submit: "Submit",
    contactHeader: "Contact",
    contactDescription:
      "When calling, describe the issue as precisely as possible. We may find a solution immediately.",
    serviceArea: "Service Area",
    area: "Tallinn and Harjumaa",
    workingHours: "Working Hours",
    hours: "Mon-Fri 9:00-17:00",
    hoursAdditional: "By appointment at other times",
    addressHeader: "Address",
    addressDetail: "Mustamäe tee 24",
    contactTitle: "Contact",
    margusTitle: "Margus Palm - Service Technician",
    kenTitle: "Ken Rasmus Kuning - Spare Parts Specialist",
    locationHeader: "Location",
    map: "Map here",
    company: "Marcserv Kodumasin OÜ",
    companyCode: "Registration Code: 16356420",
    taxNumber: "VAT Number: EE100983276",
    whenWhere: "When and Where",
    workingHoursFooter: "Mon-Fri 9:00-17:00",
    addressFooter: "Mustamäe tee 24",
    contactFooter: "Contact",
    emailFooter: "marcserv.hooldus@gmail.com",
    phoneFooter: "+372 5023767",
  },
  et: {
    home: "Avaleht",
    contact: "Kontakt",
    contactFormTitle: "Võta ühendust",
    name: "Nimi",
    email: "Email",
    address: "Aadress",
    phone: "Telefon",
    productType: "Toote tüüp",
    brand: "Bränd",
    model: "Mudel",
    description: "Veakirjeldus",
    pnc: "PNC või E-number",
    submit: "Saada",
    contactHeader: "Kontakt",
    contactDescription:
      "Helistades kirjelda probleemi võimalikult täpselt. Võibolla leiame lahenduse kohe.",
    serviceArea: "Teeninduspiirkond",
    area: "Tallinna ja Harjumaa",
    workingHours: "Tööajad",
    hours: "E-R 9:00-17:00",
    hoursAdditional: "Kokkuleppel ka muudel aegadel",
    addressHeader: "Aadress",
    addressDetail: "Mustamäe tee 24",
    contactTitle: "Kontakt",
    margusTitle: "Margus Palm - Hooldustehnik",
    kenTitle: "Ken Rasmus Kuning - Varuosade spetsialist",
    locationHeader: "Asukoht",
    map: "Kaart siin",
    company: "Marcserv Kodumasin OÜ",
    companyCode: "Registrikood: 16356420",
    taxNumber: "KMKR nr: EE100983276",
    whenWhere: "Millal ja kus",
    workingHoursFooter: "E-R 9:00-17:00",
    addressFooter: "Mustamäe tee 24",
    contactFooter: "Kontakt",
    emailFooter: "marcserv.hooldus@gmail.com",
    phoneFooter: "+372 5023767",
  },
};

// Keele muutmise funktsioon
function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-lang");
    if (languages[lang] && languages[lang][key]) {
      element.textContent = languages[lang][key];
    }
  });
}

// Event listener
document.getElementById("english-lang").addEventListener("click", function (e) {
  e.preventDefault();
  window.history.pushState({}, "", "?lang=en");
  changeLanguage("en");
});

document
  .getElementById("estonian-lang")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.history.pushState({}, "", "?lang=et");
    changeLanguage("et");
  });

// Check URL for language parameter on page load
window.addEventListener("load", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get("lang") || "en"; // Default on on Eng kui ei lae
  changeLanguage(lang);
});