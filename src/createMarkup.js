export function createMarkupListCountries(countries) {
  return countries
    .map(country => {
      return `<li class="country-list__item"><span class="country-list__image"><img width="25" height="20" src="${country.flags.svg}" alt="${country.flags.alt}"></span><p class="country-list__text">${country.name.common}</p></li>`;
    })
    .join('');
}

export function createMarkupOneCountry(country) {
  return `<div class="country-box"><span class="country-box__image"><img width="50" src="${
    country[0].flags.svg
  }" alt="${country[0].flags.alt}"></span>
  <h1 class="country-box__title">${country[0].name.common}</h1>
  </div>
  <ul class="country-info">
    <li class="country-info__item"><b>Capital:</b> ${country[0].capital}</li>
    <li class="country-info__item"><b>Population:</b> ${
      country[0].population
    }</li>
    <li class="country-info__item"><b>Languages:</b> ${Object.values(
      country[0].languages
    ).join(', ')}</li>
  </ul>`;
}
