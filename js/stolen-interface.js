var BikeStuff = require("./../js/bikeStuff.js").bikeStuffModule;
var apiKey = require('./../.env').apiKey;
$(function() {
  var googleApi = document.createElement("script");
  googleApi.type = "text/javascript";
  googleApi.src = "https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&callback=initMap";
  $("head").append(googleApi);

  var newSearch = new BikeStuff();
  var locationRadius = "";
  var originDateObj = new Date();

  $("#stolen-search").submit(function(event) {
    event.preventDefault();
    var originDate = $("#origin-date").val();
    locationRadius = $("#location-radius").val();
    $("#origin-date").val("");

    originDateObj = new Date(originDate);
    var utcOffset = originDateObj.getTimezoneOffset();
    originDateObj.setMinutes(utcOffset);

    $("#page-buttons").show();
    newSearch.currentPage = 1;
    newSearch.stolenSearch(locationRadius, originDateObj);
  });

  $("#previous-page").click(function() {
    newSearch.pageTurn(false);
    newSearch.stolenSearch(locationRadius, originDateObj);
  });

  $("#next-page").click(function() {
    newSearch.pageTurn(true);
    newSearch.stolenSearch(locationRadius, originDateObj);
  });

});

var map;
initMap = function() {
map = new google.maps.Map(document.getElementById("map"), {
  center: {lat: 45.521, lng: -122.678},
  zoom: 14
});
};

// var map;
// initMap = function() {
//       var uluru = {lat: -25.363, lng: 131.044};
//       var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 4,
//         center: uluru
//       });
//       var marker = new google.maps.Marker({
//         position: uluru,
//         map: map
//       });
//     };
