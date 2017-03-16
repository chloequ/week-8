/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */
var myStyle1 = function(feature) {
  switch(feature.properties.bedrooms){
    case 1: return {
      radius: 10,
      color: '#f4cb42',
      Opacity:0,
      weight: 1,
      fillColor: '#f4cb42',
      fillOpacity: 0.2
    };
    case 2: return {
      radius: 15,
      color: '#f4cb42',
      Opacity:0,
      weight: 1,
      fillColor: '#f4cb42',
      fillOpacity: 0.2
    };
    case 3: return {
      radius: 20,
      color: '#f4cb42',
      Opacity:0,
      weight: 1,
      fillColor: '#f4cb42',
      fillOpacity: 0.2
    };
    default: return {
      radius: 25,
      color: '#f4cb42',
      Opacity:0,
      weight: 1,
      fillColor: '#f4cb42',
      fillOpacity: 0.2
    };
  }
};
var default1 = {radius: 2.5, color: '#f4cb42',  weight: 5, opacity: 1};

var default2 = function(myObject) {
  if (myObject.properties.priceperm2 < 20000){
    return {
      radius: 2.5,
      color: '#f4cb42',
      weight: 5,
      opacity: 0.8
    };
  }
  if (myObject.properties.priceperm2 < 40000 && myObject.properties.priceperm2 >= 20000){
    return {
      radius: 2.5,
      color: '#f99a43',
      weight: 5,
      opacity: 0.8
    };
  }
  if (myObject.properties.priceperm2 < 60000 && myObject.properties.priceperm2 >= 40000){
    return {
      radius: 2.5,
      color: '#f97343',
      weight: 5,
      opacity: 0.8
    };
  }
  else {
    return {
      radius: 2.5,
      color: '#b52a07',
      weight: 5,
      opacity: 0.8
    };
  }
};

var default3 = function(myObject) {
  if (myObject.properties.floor <= 6){
    return {
      radius: 2.5,
      color: '#cfcfd1',
      weight: 5,
      opacity: 0.8
    };
  }
  if (myObject.properties.floor <= 10 && myObject.properties.priceperm2 > 6){
    return {
      radius: 2.5,
      color: '#a6a6a8',
      weight: 5,
      opacity: 0.8
    };
  }
  if (myObject.properties.priceperm2 <= 20 && myObject.properties.priceperm2 > 10){
    return {
      radius: 2.5,
      color: '#6d6d6d',
      weight: 5,
      opacity: 0.8
    };
  }
  else {
    return {
      radius: 2.5,
      color: '#333333',
      weight: 5,
      opacity: 0.8
    };
  }
};

var default4 = function(myObject) {
  if (myObject.properties. yearbuilt < 1990){
    return {
      radius: 2.5,
      color: '#5b827f',
      weight: 5,
      opacity: 0.8
    };
  }
  if (myObject.properties.yearbuilt <= 2000 && myObject.properties.yearbuilt > 1990){
    return {
      radius: 2.5,
      color: '#77a8a5',
      weight: 5,
      opacity: 0.8
    };
  }
  if (myObject.properties.yearbuilt <= 2010 && myObject.properties.yearbuilt > 2000){
    return {
      radius: 2.5,
      color: '#90ccc8',
      weight: 5,
      opacity: 0.8
    };
  }
  else {
    return {
      radius: 2.5,
      color: '#abf2ee',
      weight: 5,
      opacity: 0.8
    };
  }
};

var defaultSytles = function(myObject, slideNumber) {
  switch (slideNumber) {
    case 0: return {
      radius: 6, color: '#6d6d6d',  weight: 12, opacity: 0.2, fillColor: '#6d6d6d', fillOpacity:0.8
    };
    case 1: return {
      radius: 2.5, color: '#f4cb42',  weight: 5
    };
    case 2: return default2(myObject);
    case 3: return default3(myObject);
    case 4: return default4(myObject);
    case 5: return default2(myObject);
    // case 5: return {
    //   radius: 2.5,
    //   color: '#f99a43',
    //   weight: 5,
    // };
  }
};


var myStyle2 = function(feature) {
  if (feature.properties.priceperm2 < 20000){
    return {
      radius: 10,
      color: '#f4cb42',
      Opacity:0,
      weight: 0,
      fillColor: '#f4cb42',
      fillOpacity: 0.2
    };
  }
  if (feature.properties.priceperm2 < 40000 && feature.properties.priceperm2 >= 20000){
    return {
      radius: 10,
      color: '#f99a43',
      Opacity:0,
      weight: 0,
      fillColor: '#f99a43',
      fillOpacity: 0.2
    };
  }
  if (feature.properties.priceperm2 < 60000 && feature.properties.priceperm2 >= 40000){
    return {
      radius: 10,
      color: '#f97343',
      Opacity:0,
      weight: 0,
      fillColor: '#f97343',
      fillOpacity: 0.2
    };
  }
  else {
    return {
      radius: 10,
      color: '#b52a07',
      Opacity:0,
      weight: 0,
      fillColor: '#b52a07',
      fillOpacity: 0.2
    };
  }
};

var myStyle3 = function(feature) {
  if (feature.properties.floor <= 6){
    return {
      radius: 10,
      color: '#cfcfd1',
      Opacity: 0,
      weight: 0,
      fillColor: '#cfcfd1',
      fillOpacity: 0.2
    };
  }
  if (feature.properties.floor <= 10 && feature.properties.priceperm2 > 6){
    return {
      radius: 10,
      color: '#a6a6a8',
      Opacity:0,
      weight: 0,
      fillColor: '#a6a6a8',
      fillOpacity: 0.2
    };
  }
  if (feature.properties.priceperm2 <= 20 && feature.properties.priceperm2 > 10){
    return {
      radius: 10,
      color: '#6d6d6d',
      Opacity:0,
      weight: 0,
      fillColor: '#6d6d6d',
      fillOpacity: 0.2
    };
  }
  else {
    return {
      radius: 10,
      color: '#333333',
      Opacity:0,
      weight: 0,
      fillColor: '#333333',
      fillOpacity: 0.2
    };
  }
};

var myStyle4 = function(feature) {
  if (feature.properties.yearbuilt < 1990){
    return {
      radius: 10,
      color: '#5b827f',
      Opacity:0,
      weight: 0,
      fillColor: '#5b827f',
      fillOpacity: 0.2
    };
  }
  if (feature.properties.yearbuilt <= 2000 && feature.properties.yearbuilt > 1990){
    return {
      radius: 10,
      color: '#77a8a5',
      Opacity:0,
      weight: 0,
      fillColor: '#77a8a5',
      fillOpacity: 0.2
    };
  }
  if (feature.properties.yearbuilt <= 2010 && feature.properties.yearbuilt > 2000){
    return {
      radius: 10,
      color: '#90ccc8',
      Opacity:0,
      weight: 0,
      fillColor: '#90ccc8',
      fillOpacity: 0.2
    };
  }
  else {
    return {
      radius: 10,
      color: '#abf2ee',
      Opacity:0,
      weight: 0,
      fillColor: '#abf2ee',
      fillOpacity: 0.2
    };
  }
};
