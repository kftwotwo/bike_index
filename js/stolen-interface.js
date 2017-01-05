var BikeStuff = require("./../js/bikeStuff.js").bikeStuffModule;

$(function() {
  $("#stolen-search").submit(function(event) {
    event.preventDefault();
    console.log("button clicked");
    var originDate = $("#origin-date").val();
    var locationRadius = $("#location-radius").val();
    $("#origin-date").val("");

    var originDateObj = new Date(originDate);

    var newSearch = new BikeStuff();
    newSearch.stolenSearch(locationRadius, originDateObj);
  });
});
