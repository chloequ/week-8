/* ================================
Week 6 Assignment: Basic Application

Take a look at the midterm prototype: https://marvelapp.com/bf2c9h/screen/10434841
Try clicking on the "Next" and "Previous" buttons. This task will ask you to write some functions
that will enable us to write an application like in the midterm.

Write three functions: clickNextButton, clickPreviousButton, and saySlideName.
clickNextButton and clickPreviousButtons should simulate what will happen when someone clicks
on a next or previous button in your application.

You don't need to create HTML buttons or a useable application—this exercise is asking you to create
functions that will be used in your application. To test it out, try calling the functions in your
console. For example, try running: clickNextButton() and see what it does. Use lots of console logs!
================================ */
var state = {
  slideNumber: 0
};

var map = L.map('map', {
  center: [39.906949, 116.394667],
  zoom: 11
});

var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

var parsed;
var myMarker = [];
var myMarker1 = [];
var myMarker2 = [];
var myMarker3 = [];
var myMarker4 = [];
var myMarker5 = [];
var markers = [myMarker,myMarker1,myMarker2,myMarker3,myMarker4,myMarker5];
var myGroup;
var defaultMarkers;
var featureLayer = [];

var slideDefault = function(data, slideNumber) {
  parsed = parseData(data);
  // plotMarkers(parsed);
  plotDefault(parsed, slideNumber);
  makeCluster(slideNumber);
};

$(document).ready(function() {
  downloadData.done(function(data){
    slideDefault(data, state.slideNumber);
  });
});


var slideMove1 = function() {
  featureLayer.push(L.geoJson(parsed, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, myStyle1(feature));
    }
  }));
  featureLayer[0].addTo(map);
  plotDefault(parsed, state.slideNumber);
  makeCluster(state.slideNumber);
};

var slideMove2 = function() {
  featureLayer.push(L.geoJson(parsed, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, myStyle2(feature));
    }
  }));
  featureLayer[1].addTo(map);
  plotDefault(parsed, state.slideNumber);
  makeCluster(state.slideNumber);
};

var slideMove3 = function() {
  featureLayer.push(L.geoJson(parsed, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, myStyle3(feature));
    }
  }));
  featureLayer[2].addTo(map);
  plotDefault(parsed, state.slideNumber);
  makeCluster(state.slideNumber);
};

var slideMove4 = function() {
  featureLayer.push(L.geoJson(parsed, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, myStyle4(feature));
    }
  }));
  featureLayer[3].addTo(map);
  plotDefault(parsed, state.slideNumber);
  makeCluster(state.slideNumber);
};

var slideMove5 = function() {
  featureLayer.push(L.geoJson(parsed, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, myStyle1(feature));
    }
  }));
  featureLayer[4].addTo(map);
  plotDefault(parsed, 5);
  makeCluster(state.slideNumber);
};

var slideShow = [slideMove1, slideMove2, slideMove3, slideMove4, slideMove5];

var filterDataNext = function(slideNumber){
  removeMarkers(markers[slideNumber-1]);
  removeCluster();
  markers[slideNumber-1]=[];
  slideShow[slideNumber-1]();
  discription[slideNumber-1].hide();
  discription[slideNumber].show();
  legend[slideNumber-1].show();
  if (slideNumber > 1) {
    removefeatureLayer(featureLayer[slideNumber-2]);
    legend[slideNumber-2].hide();
  }
};

var filterDataPrevious = function(slideNumber){
  removeMarkers(markers[slideNumber+1]);
  removeCluster();
  markers[slideNumber+1]=[];
  legend[slideNumber].hide();
  discription[slideNumber + 1].hide();
  discription[slideNumber].show();
  if (slideNumber > 0) {
    slideShow[slideNumber-1]();
    removefeatureLayer(featureLayer[slideNumber]);
    legend[slideNumber-1].show();
  }
  else {
    // plotMarkers(parsed);
    plotDefault(parsed, slideNumber);
    makeCluster(slideNumber);
    removefeatureLayer(featureLayer[slideNumber]);
  }
};

var clickPreviousButton = function() {
  map.setView([39.906949, 116.394667],11);
  if (state.slideNumber > 0){
    state.slideNumber -= 1;
    filterDataPrevious(state.slideNumber);
    $('#slideName').text(slideName[state.slideNumber]);
    $('#myDiscription' + state.slideNumber).show();
    $('#button-next').show();
    $('#pageNumber').text(state.slideNumber + 1);
  }
  if (state.slideNumber === 0){
    $('#button-previous').hide();
  }
};

var clickNextButton = function() {
  if (state.slideNumber < 5){
    state.slideNumber += 1;
    filterDataNext(state.slideNumber);
    $('#button-previous').show();
    $('#slideName').text(slideName[state.slideNumber]);
    $('#myDiscription' + state.slideNumber).show();
    $('#pageNumber').text(state.slideNumber + 1);
  }
  if (state.slideNumber === 5){
    $('#button-next').hide();
    map.setView([39.986717, 116.337820],13);
  }
};

$('#button-previous').click(function(){
  clickPreviousButton();
});

$('#button-next').click(function(){
  clickNextButton();
});
