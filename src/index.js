import countryCard from "./templates/country-card.hbs";
import countryList from "./templates/country-list.hbs";
import API from "./js/fetchCountries";
import refs from "./js/refs";
import { myNotice, myError } from "./js/pnotify";

let debounce = require("lodash.debounce");

refs.input.addEventListener("input", debounce(onInputChange, 500));

function onInputChange(evt) {
  evt.preventDefault();

  const searchQuery = evt.target.value;
  API.fetchCountry(searchQuery).then(onCountrySearch).catch(onFetchError);
}

function onCountrySearch(country) {
  onInputClear();
  if (country.length === 1) {
    return renderCountryCard(country);
  } else if (country.length >= 2 && country.length <= 10) {
    return renderCountryList(country);
  } else if (country.length > 10) {
    return myNotice();
  } else {
    return myError();
  }
}

function renderCountryCard(country) {
  const markup = countryCard(country);
  refs.container.insertAdjacentHTML("beforeend", markup);
}

function renderCountryList(country) {
  const markup = countryList(country);
  refs.container.insertAdjacentHTML("beforeend", markup);

  document
    .querySelector(".countries-list")
    .addEventListener("click", onCountryListClick);
}

function onFetchError(error) {
  alert("Enter correct name of the country");
}

function onInputClear() {
  refs.input.value = "";
  refs.container.innerHTML = "";
}

function onCountryListClick(e) {
  if (e.target.nodeName !== "LI") {
    return;
  }
  API.fetchCountry(e.target.textContent).then(onCountrySearch);
}
