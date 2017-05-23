var Hamming = function() {
}

Hamming.prototype.compute = function(firstSequence, secondSequence) {

    var numDifferences = 0;
    if (firstSequence.length != secondSequence.length) {
        throw new Error('DNA strands must be of equal length.');
    }
    for (var i = 0; i < firstSequence.length; i++){
      if (firstSequence[i] != secondSequence[i]){
        numDifferences++;
      }
    }
    return numDifferences;
}

module.exports = Hamming;
