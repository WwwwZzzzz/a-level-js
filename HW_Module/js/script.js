const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://free.currconv.com/api/v7/currencies?apiKey=2011c18e37e31982f3ed"
);

xhr.onload = function () {
  const currencies = JSON.parse(xhr.response);
  const currenciesList = Object.keys(currencies.results);
  const selects = document.querySelectorAll("select");
  for (let select of selects) {
    for (let currency of currenciesList) {
      select.innerHTML += renderOption(currency);
    }
  }
};

xhr.send();

function renderOption(currency) {
  return `
        <option value="${currency}">${currency}</option>
    `;
}

let currencyFromInput = document.querySelector("#currency_from");
let currencyToInput = document.querySelector("#currency_to");
let currencyFrom = document.querySelector("#select_currency_from");
let currencyTo = document.querySelector("#select_currency_to");

function changeOn() {
  if (currencyFromInput.value.length > 0) {
    let apiVal = currencyFrom.value + "_" + currencyTo.value;

    let request = new XMLHttpRequest();
    request.open(
      "GET",
      "https://free.currconv.com/api/v7/convert?q=" +
        apiVal +
        "&compact=y&apiKey=2011c18e37e31982f3ed&callback=?",
      true
    );

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        let str = request.responseText.split("(");
        str = str[1].split(")");
        let json = JSON.parse(str[0]);
        let coef = json[apiVal].val;
        let valueWeSeek =
          parseFloat(currencyFromInput.value) * parseFloat(coef);
        currencyToInput.value = valueWeSeek.toFixed(2);
      } else {
        alert("We reached our target server, but it returned an error");
      }
    };

    request.send();
  }
}

// easter egg

function easterEgg() {
  if (currencyFrom.value == "UAH" || currencyTo.value == "UAH") {
    document.body.style.backgroundImage =
      'url("https://uklad.vc/content/images/2020/03/149442342912056106.jpg")';
      document.body.style.backgroundSize = "cover";
      document.getElementsByTagName('h1')[0].style.color = '#ffffff';
      document.getElementsByTagName('h1')[0].style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    document.body.style.backgroundImage = 'none';
    document.getElementsByTagName('h1')[0].style.color = '#000000';
    document.getElementsByTagName('h1')[0].style.backgroundColor = 'initial';
  }
}

currencyFromInput.addEventListener("change", (event) => {
  changeOn();
});

currencyToInput.addEventListener("change", (event) => {
  changeOn();
});

currencyFrom.addEventListener("change", (event) => {
  easterEgg();
  changeOn();
});

currencyTo.addEventListener("change", (event) => {
  easterEgg();
  changeOn();
});
