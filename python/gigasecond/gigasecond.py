from datetime import datetime, timedelta
import math

def add_gigasecond(theDate):
    gigasecond = timedelta(seconds=math.pow(10,9))
    futureDate = theDate + gigasecond
    return futureDate;
    pass