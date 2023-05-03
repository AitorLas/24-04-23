(function () {
  /***** Oferta gastronòmica *****/
  afegeixEsdevenimentCopiaText();

  /***** Reserves *****/
  afegeixEsdevenimentCanviNumeroComensals();
  afegeixEsdevenimentEnviamentFormulari();

  /***** Footer (secció contacte) *****/
  afegeixHoraActual();


  /***** Oferta gastronòmica *****/
  function afegeixEsdevenimentCopiaText() {
  document.getElementById("oferta-gastronomica").addEventListener("copy", function(event) {
    alert("Solicite a info@restaurantorenga.cat la oferta gastronómica en formato digital y le enviaremos un documento PDF con toda la información.");
  }) 
  };


  /***** Reserves *****/
  function afegeixEsdevenimentCanviNumeroComensals() {
    // Afegeix aquí el teu codi
  }

  function afegeixEsdevenimentEnviamentFormulari() {
    // Afegeix aquí el teu codi
  }


  /***** Footer (secció contacte) *****/
  function afegeixHoraActual() {
    const nouParagraf = document.createElement("p");
    nouParagraf.innerHTML = "Hora actual: <span id=\"horaActual\"></span>";

    const elementAddress = document.querySelector("address");
    const ultimParagraf = elementAddress.lastElementChild;

    elementAddress.removeChild(ultimParagraf);
    elementAddress.appendChild(nouParagraf);
    elementAddress.appendChild(ultimParagraf);

    setInterval(actualitzaHora, 1000);
  }

  function actualitzaHora() {
    const data = new Date();
    let hores = data.getHours();
    let minuts = data.getMinutes();
    let segons = data.getSeconds();
    hores = estableixFormatDosDigits(hores);
    minuts = estableixFormatDosDigits(minuts);
    segons = estableixFormatDosDigits(segons);
    document.getElementById("horaActual").innerHTML = hores + ":" + minuts + ":" + segons;
  }

  function estableixFormatDosDigits(valor) {
    // Afegeix aquí el teu codi
  }
})();