var defaultCenter = [40.713435,-73.971291];
var defaultZoom = 12;
var closeZoom = 8;

var map = L.map('my-map').setView(defaultCenter, defaultZoom);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var places = [
  {
    placeName: 'The Good Room',
    description1: "Going to shady Brooklyn Clubs like ",
    description2: ", located in Greenpoint",
    lat: 40.726935,
    lon: -73.952909,
    hours: 'Night',
  },

  {
    placeName: 'Friends and Lovers',
    description1: "Dancing to the rithm of funky-disco music at ",
    description2: ".",
    lat: 40.678564,
    lon: -73.958542,
    hours: 'Night',
  },

  {
    placeName: 'Williamsburg Bridge',
    description1: "Biking across the ",
    description2: " on a summer sunset.",
    lat: 40.713668,
    lon: -73.972110,
    hours: 'Evening',
  },

  {
    placeName: 'Prospect Park',
    description1: "Having pic-nic at ",
    description2: " in a sunny day.",
    lat: 40.668042,
    lon: -73.970421,
    hours: 'Morning/Afternoon',
  }

];


// how to add a single marker using L.marker()
// var chrisPizza = pizzaData[0];
//
// L.marker([chrisPizza.lat, chrisPizza.lon]).addTo(map)
//     .bindPopup(chrisPizza.placeName + ' likes to eat at ' +  chrisPizza.description);


// how to add a marker for each object in the array

places.forEach(function(placeObject) {
  var latLon = [placeObject.lat, placeObject.lon];

  var schoolColor = 'grey';

  if (placeObject.hours === 'Night') hourColor = 'blue';
  if (placeObject.hours === 'Evening') hourColor = 'purple';
  if (placeObject.hours === 'Morning/Afternoon') hourColor = 'yellow';

  var options = {
    radius: 6,
    opacity: 1,
    fillColor: hourColor,
    fillOpacity: 0.9,
    color: '#FFF',
    weight: 2,
  };

  L.circleMarker(latLon, options).addTo(map)
      .bindPopup(placeObject.description1 + placeObject.placeName +  placeObject.description2);
    //  .dblclick(function() {
    //  map.flyTo(placeObject.latLon, closeZoom)
    //  });

});

// Try to create a double click function for each object -> double click on marker
//$('.circleMarker').dblclick(function() {
//map.flyTo(placeObject.latLon, closeZoom)
//});

$('.zoomOut').click(function() {
  map.flyTo(defaultCenter, defaultZoom)
});
