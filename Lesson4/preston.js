function toggleMenu() {
    document.getElementsByClassName("listlink")[0].classList.toggle("responsive");
}
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
let fulldate = dayName + ", " + "  " + d.getDate() + "  " + monthName + "  " + year + ".";
document.getElementById("currentdate").textContent = fulldate;

d.getDay()
d.getMonth()
d.getFullYear()
d.getDate()