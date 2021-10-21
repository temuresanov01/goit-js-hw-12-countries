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