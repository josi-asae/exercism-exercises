var Gigasecond = function(input) {
    this.theDate = input;
};

Gigasecond.prototype.date = function() {
  // you have t use Date.parse, not Math.abs in order to correctly get dates before 1970.
    var currentDateInMilliseconds = Date.parse(this.theDate);
    var futureDateInMilliseconds = currentDateInMilliseconds + Math.pow(10, 12);
    var futureDate = new Date(futureDateInMilliseconds);
    return futureDate;
}

module.exports = Gigasecond;