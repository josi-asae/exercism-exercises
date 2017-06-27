import re

def is_isogram(phrase):
    lowerPhrase = phrase.lower();
    lowerPhrase = re.sub(r' ','',lowerPhrase);
    lowerPhrase = re.sub(r'-','',lowerPhrase);
    usedCharacters = []
    for i in range(0,len(lowerPhrase)):
        for j in range (0,len(usedCharacters)):
            if usedCharacters[j] == lowerPhrase[i]:
                return False;
        usedCharacters.append(lowerPhrase[i])
    return True
    pass
