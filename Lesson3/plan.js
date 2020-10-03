let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
let d = new Date();
let string = document.lastModified;
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = "Current Date:" + " " + dayName + ", " + "  " + monthName + "," + "  " + d.getDate() + "," + "  " + year + ".";
let lupdated = "Last Update:" + " " + string + ".";
document.getElementById("currentdate").textContent = fulldate;
document.getElementById("lastupdated").textContent = lupdated;
document.getElementById("currentyear").textContent = year;
d.getDay()
d.getMonth()
d.getFullYear()
d.getDate()