'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const getCountryData = function (country) {
  console.log(country);
  const req = new XMLHttpRequest();
  req.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  req.send();
  req.addEventListener('load', () => {
    const [data] = JSON.parse(req.responseText);
    console.log(data);
    const htmlCountry = `
      <article class="country">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(2)}</p>
        <p class="country__row"><span>🗣️</span>${
          country === 'portugal' ? data.languages.por : data.languages.eng
        }</p>
        <p class="country__row"><span>💰</span>${
          country === 'portugal'
            ? data.currencies.EUR.name
            : data.currencies.USD.name
        }</p>
      </div>
    </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', htmlCountry);
    countriesContainer.setAttribute('style', 'opacity:1');
  });
};

getCountryData('portugal');
getCountryData('usa');
