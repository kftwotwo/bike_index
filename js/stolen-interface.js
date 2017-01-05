var BikeStuff = require("./../js/bikeStuff.js").bikeStuffModule;

$(function() {
  var newSearch = new BikeStuff();
  var locationRadius = "";
  var originDateObj = new Date();

  $("#stolen-search").submit(function(event) {
    event.preventDefault();
    console.log("form submitted");
    var originDate = $("#origin-date").val();
    locationRadius = $("#location-radius").val();
    $("#origin-date").val("");

    originDateObj = new Date(originDate);

    $("#page-buttons").show();
    $("#previous-page").hide();
    $("#next-page").show();
    newSearch.stolenSearch(locationRadius, originDateObj);
  });

  $("#previous-page").click(function() {
    console.log("previous button clicked");
    newSearch.pageTurn(false);
    $("#result-display ol").empty();
    if(newSearch.currentPage <= 1) {
      $("#previous-page").hide();
    }
    newSearch.stolenSearch(locationRadius, originDateObj);
  });

  $("#next-page").click(function() {
    console.log("next button clicked");
    newSearch.pageTurn(true);
    $("#result-display ol").empty();
    $("#previous-page").show();
    newSearch.stolenSearch(locationRadius, originDateObj);
  });
});
