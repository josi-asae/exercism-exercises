package clock

import (
	// "fmt"
	"strconv"
)

const testVersion = 4

type Clock struct {
	Hour   int
	Minute int
}

func New(hour, minute int) Clock {
	// if hour is >24 or <0, or if minute > 60 or < 0, adjust accordingly.
	for minute >= 60 {
		minute = minute - 60
		hour = hour + 1
	}
	for hour >= 24 {
		hour = hour - 24
	}
	for minute < 0 {
		minute = minute + 60
		hour = hour - 1
	}
	for hour < 0 {
		hour = hour + 24
	}
	return Clock{hour, minute}
}

func (c Clock) String() string {
	// convert the time ints to strings
	theHour := strconv.Itoa(c.Hour)
	theMinute := strconv.Itoa(c.Minute)

	// check that the numbers always contain 2 digits
	if len(theHour) == 1 {
		theHour = "0" + theHour
	}
	if len(theMinute) == 1 {
		theMinute = "0" + theMinute
	}
	return theHour + ":" + theMinute
}

func (c Clock) Add(minutes int) Clock {
	c.Minute += minutes
	// run the "New" function again so that the Hour and Minutes can be adjusted
	c2 := New(c.Hour, c.Minute)
	return c2
}