function BikeStuff() {
  this.currentPage = 1;
}

BikeStuff.prototype.stolenSearch = function(locationRadius, originDate) {
  var whatPage = this.currentPage;
  var notEmpty = true;

  $("#next-page").hide();
  $("#previous-page").hide();
  $("#result-display ol").empty();
  $("#result-display ol").append("<li>Processing Request...</li>");
  $("#page-buttons h5").text("Page Number: " + whatPage);
  $.get("https://bikeindex.org/api/v3/search?page=" + whatPage + "&per_page=25&location=IP&distance=" + locationRadius + "&stolenness=stolen").then(function(response) {
    $("#result-display ol").empty();

    response.bikes.forEach(function(bike) {
      var stolenDate = new Date(parseInt(bike.date_stolen + "000"));
      if(stolenDate > originDate) {
        notEmpty = true;
        $("#result-display ol").append("<li>" + bike.title + ", " + stolenDate.toDateString() + "</li>");
      } else {
        notEmpty = false;
      }
    });
    showButton = function() {
      if(whatPage <= 1) {
        $("#previous-page").hide();
      } else {
        $("#previous-page").show();
      }
    };

  }).then(function() {
    if(!notEmpty) {
      $("#result-display ol").append("<div id=\"center-flexer\"><div id=\"ending-border\"></div></div><li id=\"result-ender\">--No more results to display--</li>");
    } else {
      $("#next-page").show();
    }
    showButton();
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
