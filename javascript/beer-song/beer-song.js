var BeerSong = function() {};

BeerSong.prototype.verse = function(verseNum) {
    var verse = '';
    if (verseNum === 0) {
        verse = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    } else if (verseNum === 1) {
        verse = verseNum + " bottle of beer on the wall, " + verseNum + " bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n"
    } else if (verseNum === 2) {
        verse = verseNum + " bottles of beer on the wall, " + verseNum + " bottles of beer.\nTake one down and pass it around, " + (verseNum - 1) + " bottle of beer on the wall.\n"
    } else {
        verse = verseNum + " bottles of beer on the wall, " + verseNum + " bottles of beer.\nTake one down and pass it around, " + (verseNum - 1) + " bottles of beer on the wall.\n"
    }
    return verse;
}


BeerSong.prototype.sing = function() {
    var startVerse;
    var endVerse;
    if (arguments.length == 1) {
        startVerse = arguments[0];
        endVerse = 0;
    } else {
        startVerse = arguments[0];
        endVerse = arguments[1];
    }
    var verse = '';
    for (var i = startVerse; i > endVerse - 1; i--) {
        if (i != startVerse) {
            verse = verse + "\n";
        }
        var verseNum = i;
        if (verseNum === 0) {
            verse = verse + 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
        } else if (verseNum === 1) {
            verse = verse + verseNum + " bottle of beer on the wall, " + verseNum + " bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n"
        } else if (verseNum === 2) {
            verse = verse + verseNum + " bottles of beer on the wall, " + verseNum + " bottles of beer.\nTake one down and pass it around, " + (verseNum - 1) + " bottle of beer on the wall.\n"
        } else {
            verse = verse + verseNum + " bottles of beer on the wall, " + verseNum + " bottles of beer.\nTake one down and pass it around, " + (verseNum - 1) + " bottles of beer on the wall.\n"
        }
    }
    return verse;
}

module.exports = BeerSong;