import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { createMarkupListCountries } from './createMarkup'

const DEBOUNCE_DELAY = 300;
const inputSearchCountry = document.querySelector('#search-box');
const listCountries = document.querySelector('.country-list');
const countryInfoBox = document.querySelector('.country-info');

inputSearchCountry.addEventListener(
  'input',
  debounce(handleInputChange, DEBOUNCE_DELAY)
);

function handleInputChange(evt) {
  const inputValue = evt.target.value

  if (inputValue.trim() === "") {
    return
  }
  fetchCountries(inputValue).then(data => {
  
    if (data.length > 10) {
      Notiflix.Notify.info(
        'Too many matches found. Please enter a more specific name.'
      );
    }

    if (2 < data.length < 10) {
      listCountries.innerHTML = createMarkupListCountries(data);
      console.log(data[0].name.common)
    }
  });
    

}