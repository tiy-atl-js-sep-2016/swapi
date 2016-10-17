import $ from 'jquery';

function add (x, y) {
  return x + y;
};

console.log(add(3, 4));

var container = $(".container");
console.log(container);


// https://api.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop

// function getEtsyResults (searchTerm) {
//   var data = $.ajax({
//     url: 'https://api.etsy.com/v2/listings/active',
//     data: {
//       keywords: searchTerm,
//       api_key: "h9oq2yf3twf4ziejn10b717i"
//     }
//   });
//   console.log(data);
// };

// getEtsyResults("whiskey");

function handleError (req) {
  console.log("OH CRAP. AN ERROR.");
  console.log(req);
}

var planetId = 1;

function planetTemplate (planet) {
  return `
    <li class="planet">
      ${planet.name} is a pretty ${planet.climate} planet.
    </li>`;
}

function addPlanet (data) {
  var planetHTML = planetTemplate(data);
  planets.append(planetHTML);
}

function nextPlanet (event) {
  var example = $.ajax({
    url: `http://swapi.co/api/planets/${planetId}`,
    success: addPlanet,
    error: handleError
  });
  planetId += 1;
};

var button = $("#getPlanet");
button.click(nextPlanet);

var planets = $(".planets");
