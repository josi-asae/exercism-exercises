def distance(firstSequence, secondSequence):

    numDifferences = 0
    if len(firstSequence) != len(secondSequence):
        raise ValueError('DNA strands must be of equal length.')
    for i in range (0,len(firstSequence)):
      if firstSequence[i] != secondSequence[i]:
        numDifferences += 1
    return numDifferences;
    pass