if (localStorage.veces == undefined) {
    localStorage.veces = 1;
} else {
    localStorage.veces = Number(localStorage.veces) + 1;
}

let counting = `Numero de Visitas: ${localStorage.veces}`;
document.querySelector('.info').innerHTML = counting;

const lastVisit = localStorage.getItem('lastvisit') || Date.now();
let dayBetween = (lastVisit - Date.now()) / 864000;
if (dayBetween < 1) {
    message = 'Welcome To Our Page';

} else {
    message = `You Visited This Page <strong>${dayBetween}</strong> day ago `;
}

document.querySelector('#calculation').innerHTML = message;
localStorage.setItem('lastvisit', Date.now());