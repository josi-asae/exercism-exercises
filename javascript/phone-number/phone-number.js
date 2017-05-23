var PhoneNumber = function(input) {
    this.phoneNumberInput = input;
};

PhoneNumber.prototype.number = function() {
    var cleanedNumber = this.phoneNumberInput.replace(/[^0-9]/g, "");
    if (cleanedNumber.length > 11 || cleanedNumber.length < 10) return '0000000000';
    if (cleanedNumber.length == 11 && cleanedNumber[0] != 1) return '0000000000';
    if (cleanedNumber.length == 11) return cleanedNumber.substr(1);
    return cleanedNumber;
};
PhoneNumber.prototype.areaCode = function() {
  var areaCode = this.number().substring(0,3);
  return areaCode;
};
PhoneNumber.prototype.toString = function() {
  var areaCode = this.number().substring(0,3);
  var exchangeCode = this.number().substring(3,6);
  var subscriberNumber = this.number().substring(6,10);
  return '(' + areaCode + ') ' + exchangeCode + '-' + subscriberNumber;
};

module.exports = PhoneNumber;