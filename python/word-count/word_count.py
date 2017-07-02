import re
def word_count(sentence):
    wordcount = {}
    splitString = re.split('[^a-zA-Z0-9]+', sentence)
    for i in range (0,len(splitString)):
        lowerCaseWord = splitString[i].lower()
        if len(lowerCaseWord) > 0:
            foundKey = False
            for key in wordcount:
                if key == lowerCaseWord:
                    wordcount[lowerCaseWord] = wordcount[lowerCaseWord]+1
                    foundKey = True
                    wordcount
            if not foundKey:
                wordcount[lowerCaseWord] = 1
    return wordcount
    pass