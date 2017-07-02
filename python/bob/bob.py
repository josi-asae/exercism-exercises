import re
def hey(hail):
    hail = hail.rstrip()
    responseCase = 0;
    lastCharacter = hail[-1:]
    noLowerChars = isOnlyUpperCase(hail)
    hasLetters = hasUpperLetters(hail)
    onlySpaces = hasOnlySpaces(hail)

    # hail is a question
    if lastCharacter == '?':
        responseCase = 1
    # hail doesn't have lower case letters and does have upper case letters
    if noLowerChars and hasLetters:
        responseCase = 2
    # hail is either empty or has only spaces
    if hail == '' or onlySpaces:
        responseCase = 3
    if responseCase == 1:
        return 'Sure.'
    elif responseCase == 2:
        return 'Whoa, chill out!'
    elif responseCase == 3:
        return 'Fine. Be that way!'
    else:
        return 'Whatever.'
    pass

def isOnlyUpperCase(str):
    return str == str.upper()

def hasUpperLetters(str):
    hasLetters = False;
    matches = re.search(r'[A-Z]+',str)
    if matches:
        hasLetters = True
    return hasLetters

def hasOnlySpaces(str):
    hasOnlySpaces = True;
    matches = re.search(r'\S+',str)
    if matches:
        hasOnlySpaces = False
    return hasOnlySpaces