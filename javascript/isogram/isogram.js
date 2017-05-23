var Isogram = function(input) {
    this.phrase = input;
};

Isogram.prototype.isIsogram = function() {
    var lowerPhrase = this.phrase.toLowerCase();
    lowerPhrase = lowerPhrase.replace(/[ ]/g, "");
    lowerPhrase = lowerPhrase.replace(/[-]/g, "");
    var usedCharacters = [];
    for (var i = 0; i < lowerPhrase.length; i++) {
        for (var j = 0; j < usedCharacters.length; j++) {
            if (usedCharacters[j] === lowerPhrase[i]) {
                return false;
            }
        }
        usedCharacters.push(lowerPhrase[i]);
    }
    return true;
}

module.exports = Isogram;