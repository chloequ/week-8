/* ================================
Week 6 Assignment: Slide Model
================================ */

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */

var slideName = ["Find Your Apartment", "Apartment Type", "Unit Price", "Floors", "Year Built", "A Little ZOOM IN..."];
var myDiscription0 = "";
myDiscription0 += "<p>This is a group of story maps about 78 samples of apartment units in Bejing.</p>";
myDiscription0 += "<p>The following slides map out these apartment samples based on their unit type, unit price, floors and housing age.</p>";
myDiscription0 += "<p>Refer to the legends on the top-left corner to get a sense of the ditribution of different types of units.</p>";
myDiscription0 += "<p>You can also click the points on the maps to check out their detailed information on each slide!</p>";
myDiscription0 += "<p>Now Let's start to find your ideal apartment!</p>";

var discription = [$('#myDiscription0'), $('#myDiscription1'), $('#myDiscription2'), $('#myDiscription3'),$('#myDiscription4'),$('#myDiscription5')];
var legend = [$('#legend1'),$('#legend2'),$('#legend3'),$('#legend4'), $('#legend5')];
var downloadData = $.ajax("https://raw.githubusercontent.com/CPLN690-MUSA610/datasets/master/geojson/housingprice_Beijing.geojson");
var parseData = function(downloadedData){
  return JSON.parse(downloadedData).features;
};

var myPopups = function(myObject) {
  var myHtml = "";
  myHtml += "<table><tr><th>Area(m2):</th><td>"+ myObject.properties.area + "</td></tr></table>";
  myHtml += "<table><tr><th>Unit Price(￥/m2):</th><td>"+ myObject.properties.priceperm2 + "</td></tr></table>";
  myHtml += "<table><tr><th>Name:</th><td>"+ myObject.properties.name + "</td></tr></table>";
  myHtml += "<table><tr><th>Number of Bedrooms:</th><td>"+ myObject.properties.bedrooms + "</td></tr></table>";
  myHtml += "<table><tr><th>Number of Floors:</th><td>"+ myObject.properties.floor + "</td></tr></table>";
  myHtml += "<table><tr><th>Built Year:</th><td>"+ myObject.properties.yearbuilt + "</td></tr></table>";
  return myHtml;
};

// var plotMarkers = function(parsedData) {
//   _.each(parsedData, function(myObject){
//     myMarker1 = L.circleMarker([myObject.geometry.coordinates[1], myObject.geometry.coordinates[0]],
//     {radius: 10, color:'#6d6d6d', weight: 1, opacity: 0, fillColor: '#6d6d6d', fillOpacity: 0.2});
//     myMarker1.addTo(map);
//     markers.push(myMarker1);
//   });
// };

var plotDefault = function(parsedData,slideNumber) {
  _.each(parsedData, function(myObject){
    defaultMarkers = L.circleMarker([myObject.geometry.coordinates[1], myObject.geometry.coordinates[0]],
    defaultSytles(myObject, slideNumber));
    defaultMarkers.bindPopup(myPopups(myObject)).addTo(map);
    markers[slideNumber].push(defaultMarkers);
  });
};

var makeCluster = function(slideNumber){
  myGroup = L.markerClusterGroup({animate: true, maxClusterRadius:50, animateAddingMarkers : true });
  _.each(markers[slideNumber],function(marker){
    myGroup.addLayer(marker);
  });
  map.addLayer(myGroup);
};

var removeCluster = function() {
  map.removeLayer(myGroup);
};

var removeMarkers = function(markers){
  _.each(markers, function(marker){
    map.removeLayer(marker);
  });
};

var removefeatureLayer = function(featureLayer){
  map.removeLayer(featureLayer);
};
