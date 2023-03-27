
export function createMarkupListCountries(countries) {
  countries.map(country => {
    return `<li><span><svg  xmlns="${country.flags.svg}"></svg></span>${country.name.common}</li>`;
  }).join("");
}
