// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//   }

let huidige = [51.5039, 4.4699];
let belgies = '50.5039,4.4699';

var openDropdown = function (elem) {
  elem.parentNode.parentNode.classList.toggle('dropdown-open');
  if (elem.parentNode.parentNode.classList.contains('dropdown-open')) {
    console.log(elem.parentNode.offsetHeight + elem.parentNode.querySelector('.dropdown-items').offsetHeight);
    elem.parentNode.style.height = elem.parentNode.offsetHeight + elem.parentNode.querySelector('.dropdown-items').offsetHeight + 'px';
  } else {
    if (elem.parentNode.style.removeProperty) {
      elem.parentNode.style.removeProperty('height');
    } else {
      elem.parentNode.style.removeAttribute('height');
    }
  }
};

('use strict');

const provider = 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';
const copyright = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>';
let map, layergroup;

const belgie = function () {
  console.log('gekklikt');
  addEventsToCampus();
};

const maakMarker = function (coords) {
  console.log(coords);
  const arr_coords = coords.split(',');
  // layergroup.clearLayers();
  let marker = L.marker(arr_coords).addTo(layergroup);
  marker.bindPopup(`<h3>test</h3><em>test</em>`);
};

const addEventsToCampus = function () {
  const campussen = document.querySelectorAll('.c-campus__row');
  for (const campus of campussen) {
    campus.addEventListener('click', function () {
      const coords = this.querySelector('.js-coords').innerHTML;
      const adres = this.querySelector('.js-adres').innerHTML;
      const campusnaam = this.querySelector('.js-campusnaam').innerHTML;
      maakMarker(coords, adres, campusnaam);
    });
  }
};

const init = function () {
  console.log('init initiated!');

  map = L.map('mapid').setView(huidige, 8);
  L.tileLayer(provider, { attribution: copyright }).addTo(map);

  if (document.querySelector('.c-campus')) {
    console.log('*****Oefening 2*****');
    layergroup = L.layerGroup().addTo(map);
    addEventsToCampus();
  }
};

document.addEventListener('DOMContentLoaded', init);

// const URL = `http://covid.gpconsulting.be`;

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
// };

// fetch(URL + '/api/v1/status', requestOptions)
//   .then((data) => {
//     return data.json();
//   })
//   .then((post) => {
//     naam = post.name;
//     uptime = post.uptime;
//     version = post.version;
//     up = post.up;

//     console.log(up);

//     const selector = document.querySelector('.footer');
//     selector.innerHTML = `${naam}  &emsp;   Version: ${version} &emsp; Run time: ${uptime}`;
//   });

// const ctx = document.getElementById('myChart');

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
// };

// fetch(URL + '/api/v1/confirmed-case-hospitalisation', requestOptions)
//   .then((response) => response.json())
//   .then((result) => {
//     let res = _.valuesIn(_.keyBy(result.data, 'YEAR_WEEK'));
//     console.log(res);

//     new Chart(ctx, {
//       type: 'line',
//       data: {
//         datasets: [
//           {
//             data: res,
//             backgroundColor: ['rgba(32, 73, 235, 0.2)', 'rgba(32, 73, 235, 0.2)', 'rgba(32, 73, 235, 0.2)', 'rgba(32, 73, 235, 0.2)', 'rgba(32, 73, 235, 0.2)', 'rgba(32, 73, 235, 0.2)'],
//             borderColor: ['rgba(32, 72, 235, 1)', 'rgba(32, 72, 235, 1)', 'rgba(32, 72, 235, 1)', 'rgba(32, 72, 235, 1)', 'rgba(32, 72, 235, 1)', 'rgba(32, 72, 235, 1)'],
//             borderWidth: 1,
//             tension: 0.5,
//           },
//         ],
//       },
//       options: {
//         parsing: {
//           xAxisKey: 'YEAR_WEEK',
//           yAxisKey: 'DEATHS_PER_100',
//         },
//       },
//     });
//   })
//   .catch((error) => console.log('error', error));

// const ctxx = document.getElementById('myChart2');

// fetch(URL + '/api/v1/administrated-vaccines-by-date', requestOptions)
//   .then((response) => response.json())
//   .then((result) => {
//     let res = _.valuesIn(_.keyBy(result.data, 'DATE'));
//     console.log(res);

//     new Chart(ctxx, {
//       type: 'bar',
//       data: {
//         datasets: [
//           {
//             data: res,
//             backgroundColor: ['rgba(32, 73, 235, 0.2)', 'rgba(32, 73, 235, 0.2)', 'rgba(32, 73, 235, 0.2)', 'rgba(32, 73, 235, 0.2)', 'rgba(32, 73, 235, 0.2)', 'rgba(32, 73, 235, 0.2)'],
//             borderColor: ['rgba(32, 72, 235, 1)', 'rgba(32, 72, 235, 1)', 'rgba(32, 72, 235, 1)', 'rgba(32, 72, 235, 1)', 'rgba(32, 72, 235, 1)', 'rgba(32, 72, 235, 1)'],
//             borderWidth: 1,
//             tension: 0.5,
//           },
//         ],
//       },
//       options: {
//         parsing: {
//           xAxisKey: 'DATE',
//           yAxisKey: 'COUNT',
//         },
//       },
//     });
//   })
//   .catch((error) => console.log('error', error));

// const ctxxx = document.getElementById('myChart3');

// fetch(URL + '/api/v1/administrated-vaccines-by-date', requestOptions)
//   .then((response) => response.json())
//   .then((result) => {
//     let res = _.valuesIn(_.keyBy(result.data, 'DATE'));
//     console.log(res);

//     new Chart(ctxxx, {
//       type: 'bar',
//       data: {
//         datasets: [
//           {
//             data: res,
//             backgroundColor: ['rgba(32, 73, 235, 0.2)', 'rgba(32, 73, 235, 0.2)', 'rgba(32, 73, 235, 0.2)', 'rgba(32, 73, 235, 0.2)', 'rgba(32, 73, 235, 0.2)', 'rgba(32, 73, 235, 0.2)'],
//             borderColor: ['rgba(32, 72, 235, 1)', 'rgba(32, 72, 235, 1)', 'rgba(32, 72, 235, 1)', 'rgba(32, 72, 235, 1)', 'rgba(32, 72, 235, 1)', 'rgba(32, 72, 235, 1)'],
//             borderWidth: 1,
//             tension: 0.5,
//           },
//         ],
//       },
//       options: {
//         parsing: {
//           xAxisKey: 'DATE',
//           yAxisKey: 'COUNT',
//         },
//       },
//     });
//   })
//   .catch((error) => console.log('error', error));
