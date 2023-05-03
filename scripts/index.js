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
    document
      .getElementById("oferta-gastronomica")
      .addEventListener("copy", function (event) {
        alert(
          "Solicite a info@restaurantorenga.cat la oferta gastronómica en formato digital y le enviaremos un documento PDF con toda la información."
        );
      });
  }

  /***** Reserves *****/
  function afegeixEsdevenimentCanviNumeroComensals() {
    const inputComensales = document.getElementById("comensales");
    const outputPreuAproximat = document.getElementById("preuAproximat");
    inputComensales.addEventListener("change", function (event) {
      const PRECIO_MEDIO_EUROS = 50;
      outputPreuAproximat.textContent =
        PRECIO_MEDIO_EUROS * inputComensales.valueAsNumber;
    });
  }

  function afegeixEsdevenimentEnviamentFormulari() {
    const reservas = document.getElementById("reservas");
    reservas.addEventListener("submit", function (event) {
      event.preventDefault();

      const comensalesMenores = document.getElementById("edad").value;
      const salaSeleccionada = document.getElementById("salas").value;

      if (comensalesMenores === "Si" && salaSeleccionada === "Sala México") {
        alert(
          "No es posible hacer una reserva si hay menores de 5 años y la ubicación elegida es la Sala México, ya que no está suficientemente habilitada."
        );
      } else {
        reservas.submit();
      }
    });
  }

  /***** Footer (secció contacte) *****/
  function afegeixHoraActual() {
    const nouParagraf = document.createElement("p");
    nouParagraf.innerHTML = 'Hora actual: <span id="horaActual"></span>';

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
    document.getElementById("horaActual").innerHTML =
      hores + ":" + minuts + ":" + segons;
  }

  function estableixFormatDosDigits(valor) {
    if (valor < 10) {
      return "0" + valor;
    }
    return valor;
  }
})();
