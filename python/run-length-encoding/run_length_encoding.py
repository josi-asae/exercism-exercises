import re


def decode(stringToDecode):
    decodedString = ""
    # read first character.
    # If it's a letter, print that letter and delete charater from string
    # If it's a number, regex until you find something that's not a number
    # once you have the number, look for the letter following it.
    # convert string number to actual number
    # loop and print that letter the appropriate number of times.
    while len(stringToDecode) > 0:
        firstLetter = stringToDecode[:1]
        letterCount =  ""
        if firstLetter.isalpha() or firstLetter.isspace():
            decodedString = decodedString + firstLetter
            stringToDecode = stringToDecode[1:]
        else:
            result = re.match(r'[0-9]+', stringToDecode)
            letterCount = int(result.group(0))
            stringToDecode = stringToDecode[len(result.group(0)):]
            nextLetter = stringToDecode[:1]
            stringToDecode = stringToDecode[1:]
            for i in range(0,letterCount):
                decodedString = decodedString + nextLetter
    return decodedString
    pass


def encode(stringToEncode):
    encodedString = ""
    # read first character
    # look ahead to see how many additional characters match that one
    # count how many of that character there are.
    # if count == 1, just print the number, if count > 1, convert count to number and add letter
    # remove that number of characters from the string
    while len(stringToEncode) > 0:
        firstLetter = stringToEncode[:1]
        letterCount = 0
        for i in range(0, len(stringToEncode)):
            if stringToEncode[i] == firstLetter:
                letterCount += 1
            else:
                break
        if letterCount > 1:
            encodedString = encodedString + ("%d%s"%(letterCount,firstLetter))
        else:
            encodedString = encodedString + ("%s"%(firstLetter))
        stringToEncode = stringToEncode[letterCount:]
    return encodedString
    pass