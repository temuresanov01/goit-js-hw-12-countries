const url_country = 'https://restcountries.com/v2';

    //забирает данные и возвращает промис
function fetchCountriesByName(countryName) {

    return fetch(`${url_country}/name/${countryName}`)
        .then(response => {
             return response.json();  
    })  
}

export default { fetchCountriesByName };

// https://restcountries.com/v2/name/{name}
// const BASE_URL = `https://restcountries.com/v2`;

// function fetchCountry(countryName) {
//   if (countryName.length === 0) {
//     return Promise.resolve("");
//   }

//   const url = `${BASE_URL}/name/${countryName}`;

//   return fetch(url).then((response) => {
//     return response.json();
//   });
// }

// export default { fetchCountry };