function BikeStuff() {
}

BikeStuff.prototype.stolenSearch = function(locationRadius, originDate) {
  $.get("https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=IP&distance=" + locationRadius + "&stolenness=stolen").then(function(response) {
    this.storedResponse = response;

    response.bikes.forEach(function(bike) {
      console.log("raw date stolen: " + bike.date_stolen);
      var stolenDate = new Date(parseInt(bike.date_stolen + "000"));
      if(stolenDate > originDate) {
        $("#result-display").append("<li>" + bike.title + ", " + stolenDate.toDateString() + "</li>")
      }
    });
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
};

exports.bikeStuffModule = BikeStuff;
