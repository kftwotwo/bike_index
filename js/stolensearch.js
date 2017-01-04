function StolenSearch() {
}

StolenSearch.prototype.search = function(locationRadius) {
  $.get("https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=IP&distance=" + locationRadius + "&stolenness=stolen").then(function(response) {
    this.storedResponse = response;
    console.log(this.storedResponse);
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
};

exports.stolenSearchModule = StolenSearch;
