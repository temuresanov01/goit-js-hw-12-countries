const BASE_URL = `https://restcountries.com/v2`;

function fetchCountry(countryName) {
  if (countryName.length === 0) {
    return Promise.resolve("");
  }

  const url = `${BASE_URL}/name/${countryName}`;

  return fetch(url).then((response) => {
    return response.json();
  });
}

export default { fetchCountry };
