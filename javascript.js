/*Menu desplegable code*/
function toggleMenu() {
    document.getElementsByClassName("navigation-links")[0].classList.toggle("responsive");
}

/*Current day and last mofofication code*/
let days = [
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
let infoDate = new Date();
let string = document.lastModified;
let dayName = days[infoDate.getDay()];
let monthName = months[infoDate.getMonth()];
let year = infoDate.getFullYear();
let fullDate = `Current Date: ${dayName}, ${infoDate.getDate()} ${monthName} ${year}.`;
let lUpdated = `Last Update: ${string}.`;
let info1 = `${infoDate.getDate()} ${monthName} ${year}`;

document.querySelector("#currentdate").textContent = fullDate;
document.querySelector("#lastupdated").textContent = lUpdated;
document.querySelector("#currentyear").textContent = year;

/*Pancakes code*/

let infoDay = new Date();
let pancake = [infoDay.getDay()];
if (pancake == 5) {
    document.querySelector(".pancakes").style.display = "block";
} else {
    document.querySelector(".pancakes").style.display = "none";

}

/*Font library code*/

WebFont.load({ google: { families: ["Quicksand", "Secular One"] } });

/*Last visit*/
let oneDay = 1000 * 60 * 60 * 24;
let date1 = new Date(string);
let date2 = new Date(info1);
let subtraction = date1 - date2;
let result = Math.round(subtraction / oneDay);
document.querySelector('.calculation').textContent = `Number of days between your last visit and today: ${result} days.`;