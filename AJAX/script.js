'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// function renderFunction(data, country) {
//   const htmlCountry = `
//   <article class="country">
//   <img class="country__img" src="${data.flags.svg}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(2)}</p>
//     <p class="country__row"><span>🗣️</span>${
//       country === 'portugal' ? data.languages.por : data.languages.eng
//     }</p>
//     <p class="country__row"><span>💰</span>${
//       country === 'portugal'
//         ? data.currencies.EUR.name
//         : data.currencies.USD.name
//     }</p>
//   </div>
// </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', htmlCountry);
//   countriesContainer.setAttribute('style', 'opacity:1');
// }

// const getCountryData = function (country) {
//   const req = new XMLHttpRequest();
//   req.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   req.send();
//   req.addEventListener('load', () => {
//     const [data] = JSON.parse(req.responseText);

//     renderFunction(data, country);

//     // Start Callback Hell

//     const [neighbour] = data.borders;

//     if (!neighbour) {
//       return;
//     }

//     //restcountries old version

//     const req2 = new XMLHttpRequest();
//     req2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     req2.send();
//     req2.addEventListener('load', () => {
//       const [data2] = JSON.parse(req.responseText);
//       console.log('alpha', data2);
//       renderFunction(data2);
//     });
//   });
// };

// getCountryData('portugal');
// getCountryData('usa');

//Promise

const req = fetch(`https://restcountries.com/v3.1/name/portugal`);

// console.log(req);
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/portugal`)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(data => {
      console.log(data);
    });
};

getCountryData('portugal');
