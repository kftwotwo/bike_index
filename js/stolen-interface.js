var StolenSearch = require("./../js/stolensearch.js").stolenSearchModule;

$(function() {
  $("#stolen-search").click(function() {
    console.log("button clicked");
    var stolenDate = $("#stolen-date").val();
    var locationRadius = $("#location-radius").val();
    $("#stolen-date").val("");
    $("#location-radius").val("");

    var newSearch = new StolenSearch();
    newSearch.search(locationRadius);
  });
});
