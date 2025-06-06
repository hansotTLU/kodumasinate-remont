const languages = {
  en: {
    home: "Home",
    contact: "Contact",
    contactFormTitle: "Contact Us",
    name: "Name",
    email: "Email",
    address: "Address",
    phone: "Phone",
    productType: "Product Type (oven, stove, etc.)",
    brand: "Brand",
    model: "Model",
    description: "Issue Description",
    pnc: "PNC or E-number (located on the data label)",
    pncImage: "Upload a picture of the data label (if possible)", 
    submit: "Submit",
    contactHeader: "Contact info",
    contactDescription: "When calling, describe the issue as precisely as possible",
    serviceArea: "Service Area",
    area: "Tallinn and Harjumaa",
    workingHours: "Working Hours",
    hours: "Mon-Fri 9:00-17:00",
    hoursAdditional: "By appointment at other times",
    addressHeader: "Address",
    addressDetail: "Mustamäe tee 24",
    contactTitle: "Contact",
    margusTitle: "Margus Palm - Service technician",
    kenTitle: "Ken Rasmus Kuning - Spare parts specialist",
    locationHeader: "Location",
    map: "Map here",
    company: "Marcserv Kodumasin OÜ",
    companyCode: "Registration Code: 16356420",
    taxNumber: "VAT Number: EE100983276",
    whenWhere: "Location",
    workingHoursFooter: "Mon-Fri 9:00-17:00",
    addressFooter: "Mustamäe tee 24",
    contactFooter: "Contact",
    emailFooter: "marcserv.hooldus@gmail.com",
    phoneFooter: "+372 5193 4129",

    // index.html
    title: "Home Appliance Repair and Maintenance",
    description1:
      "Our main activity is the repair of small household appliances. We also offer assistance through specialists focused on other appliances.",
    description2:
      "Thanks to our long experience in appliance repair, we’re familiar with all kinds of problems and know how to solve them so you don't have to search on your own.",
    description3:
      "We operate in Tallinn and Harjumaa. Other areas by agreement.",
    description4:
      "Most work is done at the client's home. For more complex or time-consuming repairs, we take the device to our workshop.",
    description5:
      "For simpler repair work, a call-out fee of €60 applies. If the work takes more than 30 minutes, an additional charge of €25 per hour applies (VAT included). The cost of replacement parts may also be added if needed.",
    servicesAndBrands: "Devices and Brands We Service:",
    rangehoods: "Range hoods",
    stoves: "Stoves",
    stovetops: "Cooktops",
    ovens: "Ovens",
    microwaveOvens: "Microwave ovens",
    coffeeMachines: "Coffee machines",
    vacuums: "Vacuum cleaners",

    specialist: "Spare parts specialist",
    techician: "Service technician",
    Meeskond: "Team",
  },
  et: {
    home: "Avaleht",
    contact: "Kontakt",
    contactFormTitle: "Võta ühendust",
    name: "Nimi",
    email: "Email",
    address: "Aadress",
    phone: "Telefon",
    productType: "Toote tüüp (ahi, pliit jne)",
    brand: "Bränd",
    model: "Mudel",
    description: "Veakirjeldus",
    pnc: "PNC või E-number (asub andmekleebisel)",
    pncImage: "Laadi üles pilt andmekleebisest (võimaluse korral)", 
    submit: "Saada",
    contactHeader: "Kontakt",
    contactDescription:
      "Helistades kirjelda probleemi võimalikult täpselt",
    serviceArea: "Teeninduspiirkond",
    area: "Tallinn ja Harjumaa",
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
    whenWhere: "Asume",
    workingHoursFooter: "E-R 9:00-17:00",
    addressFooter: "Mustamäe tee 24",
    contactFooter: "Kontakt",
    emailFooter: "marcserv.hooldus@gmail.com",
    phoneFooter: "+372 5193 4129",

    // index.html
    title: "Kodumasinate remont ja hooldus",
    description1:
      "Meie peamiseks tegevusalaks on väikeste kodumasinate remont. Pakume ka abiks teistele kodumasinatele spetsialiseerunud remondi- ja hooldusspetsialiste.",
    description2:
      "Tänu pikaajalisele kogemusele kodumasinate remondi alal oleme kursis kõikvõimalike probleemidega ning teame kuidas leida lahendus, et sina ei peaks pead murdma ja lahendust omal käel otsima.",
    description3:
      "Teostame tööd Tallinnas ja Harjumaal, kaugemad piirkonnad kokkuleppel.",
    description4:
      "Enamasti toimub hooldus ja remont kliendi kodus. Keerulisemate ja pikemat lahendust nõudvate tööde puhul toimetame seadme töökotta.",
    description5:
      "Lihtsama remonditöö puhul kehtib 60 € visiiditasu. Kui töö kestab üle 30 minuti, lisandub tasu 25 € tunnis (hind sisaldab käibemaksu). Vajadusel lisandub ka varuosa maksumus.",
    servicesAndBrands: "Teenindame järgmisi seadmeid ja brände:",
    rangehoods: "Õhupuhastid",
    stoves: "Pliidid",
    stovetops: "Pliidiplaadid",
    ovens: "Ahjud",
    microwaveOvens: "Mikrolaineahjud",
    coffeeMachines: "Kohvimasinad",
    vacuums: "Tolmuimejad",
    specialist: "Varuosade spetsialist",
    techician: "Hooldustehnik",
    Meeskond: "Meeskond",
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

// Keele seadistamine ja mobiilmenüü sulgemine (vajadusel)
function setLanguage(lang, isMobile = false) {
  localStorage.setItem("language", lang);
  window.history.pushState({}, "", "?lang=" + lang);
  changeLanguage(lang);

  // Kui keele valik tehti mobiilimenüüst, sulgeme selle
  if (isMobile) {
    const mobileMenu = document.getElementById("mobile-menu");
    const hamburger = document.getElementById("hamburger");

    if (mobileMenu && mobileMenu.classList.contains("show")) {
  mobileMenu.classList.remove("show");
  }

    if (hamburger && hamburger.classList.contains("open")) {
      hamburger.classList.remove("open");
    }
  }
}

// Desktop keelevalikud
document.getElementById("english-lang").addEventListener("click", function (e) {
  e.preventDefault();
  setLanguage("en");
});

document.getElementById("estonian-lang").addEventListener("click", function (e) {
  e.preventDefault();
  setLanguage("et");
});

// Mobiil keelevalikud – sulgevad menüü pärast valikut
document.getElementById("english-lang-mobile").addEventListener("click", function (e) {
  e.preventDefault();
  setLanguage("en", true); // true = mobile
});

document.getElementById("estonian-lang-mobile").addEventListener("click", function (e) {
  e.preventDefault();
  setLanguage("et", true); // true = mobile
});

// Keele määramine lehe laadimisel
window.addEventListener("load", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const langFromUrl = urlParams.get("lang");
  const langFromStorage = localStorage.getItem("language") || "et";
  const langToUse = langFromUrl || langFromStorage;

  if (!langFromUrl) {
    window.history.replaceState({}, "", "?lang=" + langToUse);
  }

  changeLanguage(langToUse);
});
