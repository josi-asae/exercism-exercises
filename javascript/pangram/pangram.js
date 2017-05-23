var Pangram = function(input) {
    this.sentence = input;
}

Pangram.prototype.isPangram = function() {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var pChecker = 0;
    for (var j = 0; j < alphabet.length; j++) {
        pChecker = 0;
        for (var i = 0; i < this.sentence.length; i++) {
            // make sure every character is lower case
            var letter = this.sentence[i].toLowerCase();
            if (letter == alphabet[j]) {
                pChecker++;
            }
        }
        if (pChecker == 0) {
            return false;
        }
    }
    return true;
};

module.exports = Pangram;