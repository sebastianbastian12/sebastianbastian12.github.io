let infoDay = new Date();
let pancake = [infoDay.getDay()];
if (pancake == 5) {
    document.querySelector(".pancakes").style.display = "block";
} else {
    document.querySelector(".pancakes").style.display = "none";

}