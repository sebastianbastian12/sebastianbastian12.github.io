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