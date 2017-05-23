var Bob = function(input) {};

Bob.prototype.hey = function(hail) {
    var responseCase = 0;
    var lastCharacter = hail.slice(-1);
    var noLowerChars = this.isOnlyUpperCase(hail);
    var hasLetters = this.hasUpperLetters(hail);
    var onlySpaces = this.hasOnlySpaces(hail);


    // hail is a question
    if (lastCharacter == '?') {
        responseCase = 1;
    }
    // hail doesn't have lower case letters and does have upper case letters
     if (noLowerChars && hasLetters) {
        responseCase = 2;
    }
    // hail is either empty or has only spaces
    if (hail == '' || onlySpaces) {
        responseCase = 3;
    }
    switch (responseCase) {
        case 1:
            return 'Sure.';
            break
        case 2:
            return 'Whoa, chill out!';
            break
        case 3:
            return 'Fine. Be that way!';
            break
        default:
            return 'Whatever.';
            break
    }
};

Bob.prototype.isOnlyUpperCase = function(str) {
    return str === str.toUpperCase();
}

Bob.prototype.hasUpperLetters = function(str) {
var hasLetters = false;
    var matches = str.match(/([A-Z]+)/g);
    if (matches){
      hasLetters = true;
    }
    return hasLetters;
}

Bob.prototype.hasOnlySpaces = function(str) {
var hasOnlySpaces = true;
    var matches = str.match(/([^ ]+)/g);
    if (matches){
      hasOnlySpaces = false;
    }
    return hasOnlySpaces;
}

module.exports = Bob;