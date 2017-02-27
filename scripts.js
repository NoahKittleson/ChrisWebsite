$(document).ready(function() {

  var quotes = ['quote1', 'quote2'];
  var iii = 0;
  for (var i = 1; i < quotes.length; i++) {
    $("#" + quotes[i]).hide();
  }
  var fadeLength = 400;

  setInterval(function() {
    $("#" + quotes[iii]).fadeOut(fadeLength);
    iii++;
    if (iii >= quotes.length) {
      iii = 0;
    }
    setTimeout(function(fadeLength ) {
      $("#" + quotes[iii]).fadeIn();
    }, fadeLength);
  }, 5000);
})
