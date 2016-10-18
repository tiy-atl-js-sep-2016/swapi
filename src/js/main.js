import $ from 'jquery';
import {} from './github';

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
  console.log(example);
  planetId += 1;
};

var button = $("#getPlanet");
button.click(nextPlanet);

var planets = $(".planets");
