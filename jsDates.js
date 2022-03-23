// JavaScript Date Objects
const d = new Date();
console.log(d);

// Date Objects are created using the new Date () constructor
console.log(new Date());

// New Date from (year, month, day, hour, minute, second, millisecond) input
console.log(new Date(2022, 0, 28, 6, 36, 30, 100));

// New Date from date string
console.log(new Date("October 14, 2021 12:00:00"));

// New Date from milliseconds
console.log(new Date(1000000000000));

// JavaScript counts months from 0 to 11
// JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated)

// Access previous centuries using one or two digit years
console.log(new Date(98, 1));

const a = new Date();
console.log(a);

// date.toString converts the date output to a string
console.log(a.toString());

// date.toUTCString converts the date output to a UTC standard
console.log(a.toUTCString());

// date.toDateString converts the date output to a readable format
console.log(a.toDateString());

// date.toISOString converts the date output to the ISO standard
console.log(a.toISOString());

// ISO 8601 is the international standard for representation of dates and times (YYYY-MM-DD)
const f = new Date("2020-10-14");
console.log(f);

// Date.parse returns the number of milliseconds from January 01, 1970
let msec = Date.parse(f);
console.log(msec);

// Get Date Method allows you to get data about a Date Object
// .getFullYear() returns the year as a four digit number
console.log(f.getFullYear());

// .getMonth() returns the month as a number
console.log(f.getMonth());

// .getDate() returns the day as a number
console.log(f.getDate());

// .getHours() returns the hours as a number
console.log(f.getHours());

// .getMinutes() returns the minutes as a number
console.log(f.getMinutes());

// .getSeconds() returns the seconds as a number
console.log(f.getSeconds());

// .getMilliseconds() returns the milliseconds as a number
console.log(f.getMilliseconds());

// .getTime() returns the milliseconds since 01/01/1970 as a number
console.log(f.getTime());

// .getDay() gets the weekday as a number
console.log(f.getDay());

// Date.now() gets the time
console.log(Date.now());

// Set Date Method allows you to set a date value for a Date Object
// .setFullYear() set the year as a number
let g = new Date();
g.setFullYear(2010);
console.log(g);

// .setMonth() set the month as a number (0 - 11)
g.setMonth(0);
console.log(g);

// .setDate() set the day a a number between (1 - 31)
g.setDate(14);
console.log(g);

// .setHours() set the hours as a number (0 - 23)
g.setHours(13);
console.log(g);

// .setMinutes() set the minutes as a number (0 - 59)
g.setMinutes(33);
console.log(g);

// .setSeconds() set the seconds as a number (0 - 59)
g.setSeconds(10);
console.log(g);

// .setMilliseconds() set the milliseconds as a number (0 - 999)
g.setMilliseconds(140);
console.log(g);

// .setTime() set the number of milliseconds since 01/01/1970
g.setTime(100000000);
console.log(g);
