
export function createMarkupListCountries(countries) {
 return countries.map(country => {
    return `<li class="country-list__item"><span class="country-list__image"><img width="25" height="20" src="${country.flags.svg}" alt="${country.flags.alt}"></span><p class="country-list__text">${country.name.common}</p></li>`;
  }).join("");
}

export function createMarkupOneCountry(country) {
  return `<div><span><img width="30" src="${country[0].flags.svg}" alt="${
    country[0].flags.alt
  }"></span>
  <h1>${country[0].name.common}</h1>
  </div>
  <ul>
    <li>Capital: ${country[0].capital}</li>
    <li>Population: ${country[0].population}</li>
    <li>Languages: ${Object.values(country[0].languages).join(", ")}</li>
  </ul>`;
}


