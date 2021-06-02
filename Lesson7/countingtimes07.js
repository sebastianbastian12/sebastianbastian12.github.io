if (localStorage.veces == undefined) {
    localStorage.veces = 1;
} else {
    localStorage.veces = Number(localStorage.veces) + 1;
}

let counting = `Numero de Visitas: ${localStorage.veces}`;
document.querySelector('.info').textContent = counting;