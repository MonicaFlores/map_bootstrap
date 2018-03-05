var defaultCenter = [40.68,-74.05];
var defaultZoom = 12;


var map = L.map('my-map').setView(defaultCenter, defaultZoom);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

/*Test lighter base map*/
/*var Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);*/

var places = [
  {
    placeName: '<a href="https://goo.gl/BWyGgr">The Good Room<a>',
    description1: "Going to shady Brooklyn Clubs like ",
    description2: ", located in Greenpoint",
    lat: 40.726935,
    lon: -73.952909,
    hours: 'Night',
  },

  {
    placeName: '<a href="https://goo.gl/Hj48UU">Friends and Lovers<a>',
    description1: "Dancing to the rithm of funky-disco music at ",
    description2: ".",
    lat: 40.678564,
    lon: -73.958542,
    hours: 'Night',
  },

  {
    placeName: '<a href="https://goo.gl/qBWcdj">Williamsburg Bridge</a>',
    description1: "Biking across the ",
    description2: " on a summer sunset.",
    lat: 40.713668,
    lon: -73.972110,
    hours: 'Evening',
  },

  {
    placeName: '<a href="https://goo.gl/eqdqsu">Prospect Park</a>',
    description1: "Having picnic at ",
    description2: " in a sunny day.",
    lat: 40.668042,
    lon: -73.970421,
    hours: 'Morning/Afternoon',
  },

  {
    placeName: '<a href="https://goo.gl/ZcGLRy">McNally Jackson</a>',
    description1: "Book shopping and having a coffee at ",
    description2: " Independent Bookstore.",
    lat: 40.723417,
    lon: -73.996070,
    hours: 'Morning/Afternoon',
  },


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
    color: 'grey',
    weight: 2,
  };

  var marker = L.circleMarker(latLon, options).addTo(map)
      .bindPopup(placeObject.description1 + placeObject.placeName +  placeObject.description2);
      //circleMarker.dblclick(function() {
      //map.flyTo(placeObject.latLon, closeZoom)
      //});


});


// Try to create a click zoom in function for each object
var closeZoom = 8;

//places.forEach(function(placeObject){
//    .click(function{
//      map.setView(placeObject.latLon, closeZoom);
//    });
//});


//$('.circleMarker').dblclick(function() {
//map.flyTo(placeObject.latLon, closeZoom)
//});

$('.zoomOut').click(function() {
  map.flyTo(defaultCenter, defaultZoom)
});
