from datetime import date, datetime, timedelta
def meetup_day(year, month, dayOfWeek, dateDescriptor):
    # if the descriptor is a 1st, 2nd, etc, caluclate number of days between first of month and that weekday
    # then add 7 * descriptor to find date
    # if the descriptor is a "teenth", calculate the day of the week of the thirteenth
    # then calculate how many days between that day and the target day.
    # monday is 0, tuesday 1 etc.
    weekdays = {'Monday': 0, 'Tuesday': 1, 'Wednesday': 2, 'Thursday': 3, 'Friday': 4, 'Saturday': 5, 'Sunday': 6}
    cardinalMultiplier = {'1st': 1, '2nd':2,'3rd':3,'4th':4,'5th':5}
    if dateDescriptor == "1st" or dateDescriptor == "2nd" or dateDescriptor == "3rd" or dateDescriptor == "4th" or dateDescriptor == "5th":
        startDate = date(year, month, 1)
        dayDifference = weekdays[dayOfWeek] - startDate.weekday()
        if dayDifference < 0:
            dayDifference = dayDifference + 7
        daysToAdd = 7 * (cardinalMultiplier[dateDescriptor]-1) + dayDifference
    elif dateDescriptor == 'teenth':
        startDate = date(year, month, 13)
        dayDifference = weekdays[dayOfWeek] - startDate.weekday()
        if dayDifference < 0:
            dayDifference = dayDifference + 7
        daysToAdd = dayDifference
    else:
        if month < 12:
            startDate = date(year, month + 1, 1) - timedelta(days=1)
        else:
            startDate = date(year + 1, 1, 1) - timedelta(days=1)
        dayDifference = weekdays[dayOfWeek] - startDate.weekday()
        if dayDifference > 0:
            dayDifference = dayDifference - 7
        daysToAdd = dayDifference
    finalDate = startDate + timedelta(days=daysToAdd)
    if finalDate.month != month:
        raise MeetupDayException("Day doesn't exist")
    return finalDate
    pass

thing = meetup_day(2013, 7, 'Wednesday', '3rd')