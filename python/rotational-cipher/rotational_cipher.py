def rotate(message, shift):
    newMessage = ''
    # loop over characters in message
    for letter in range(0,len(message)):
        # convert character to number
        letterKey = ord(message[letter])
        # check if character is a lower case letter
        if letterKey > 96 and letterKey <= 96 + 26:
            newLetterKey = (letterKey - 96 + shift)%26
            if newLetterKey == 0:
                newLetterKey = 26
            newLetter = chr(newLetterKey + 96)
        # check if the character is an upper case letter
        elif letterKey > 64 and letterKey <= 64 + 26:
            newLetterKey = (letterKey - 64 + shift)%26
            if newLetterKey == 0:
                newLetterKey = 26
            newLetter = chr(newLetterKey + 64)
        # if character isn't a letter, don't change it
        else:
            newLetter = message[letter]
        # compose new message
        newMessage = newMessage + newLetter
    return newMessage
