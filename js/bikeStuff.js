function BikeStuff() {
  this.currentPage = 1;
}

BikeStuff.prototype.stolenSearch = function(locationRadius, originDate) {
  $("#page-buttons h5").text("Page Number: " + this.currentPage);
  $.get("https://bikeindex.org/api/v3/search?page=" + this.currentPage + "&per_page=25&location=IP&distance=" + locationRadius + "&stolenness=stolen").then(function(response) {
    this.storedResponse = response;

    response.bikes.forEach(function(bike) {
      console.log("raw date stolen: " + bike.date_stolen);
      var stolenDate = new Date(parseInt(bike.date_stolen + "000"));
      if(stolenDate > originDate) {
        $("#result-display ol").append("<li>" + bike.title + ", " + stolenDate.toDateString() + "</li>");
      }
    });
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
};

BikeStuff.prototype.pageTurn = function(next) {
  if(next) {
    this.currentPage++;
  } else if(!next) {
    if(this.currentPage > 1) {
      this.currentPage--;
    }
  }
};

exports.bikeStuffModule = BikeStuff;
