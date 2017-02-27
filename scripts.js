$(document).ready(function() {

  var quotes = ['quote1', 'quote2'];
  var iii = 0;
  for (var i = 1; i < array.length; i++) {
    $("#" + array[i]).hide();
  }
  setInterval(function() {
    $("#" + quotes[iii]).hide();
    iii++;
    if (iii >= quotes.length) {
      iii = 0;
    }
    $("#" + quotes[iii]).show();
  }, 3000);
}
