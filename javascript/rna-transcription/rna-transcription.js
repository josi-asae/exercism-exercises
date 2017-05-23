var DnaTranscriber = function() {}

DnaTranscriber.prototype.toRna = function(dna) {

    var rna = dna;
    for (var i = 0; i < dna.length; i++) {
        if (dna[i] != 'G' && dna[i] != 'C' && dna[i] != 'A' && dna[i] != 'T') {
            throw new Error('Invalid input');
        }
    }
    rna = rna.replace(/G/g, "L");
    rna = rna.replace(/C/g, "M");
    rna = rna.replace(/A/g, "N");
    rna = rna.replace(/T/g, "O");
    rna = rna.replace(/L/g, "C");
    rna = rna.replace(/M/g, "G");
    rna = rna.replace(/N/g, "U");
    rna = rna.replace(/O/g, "A");
    return rna;
}

module.exports = DnaTranscriber;
