const key = 'https://api.openweathermap.org/data/2.5/weather?id=4164138&units=imperial&appid=fd15d96290be857f5672c4e23645f6bb';


fetch(key)
    .then(data => data.json())
    .then(data2 => {
        console.table(data2.main.temp);
        let f = data2.main.temp;
        document.querySelector('.temperature').textContent = `${Math.round(f)}°F`;
        f.textContent

    })
    /* function miami() {
        fetch(key)
            .then(data => data.json())
            .then(data2 => {
                console.table(data2.main.temp);
                let card = document.createElement('section');
                let f = document.createElement('h2');
                f.textContent = data2.main.temp;
                card.appendChild(f);
                document.querySelector('div.cards').appendChild(card);

            })
    } */

function toCelsius() {
    fetch(key)
        .then(data => data.json())
        .then(data2 => {
            console.table(data2.main.temp);
            let f = data2.main.temp;
            let celsius = (f - 32) * 5 / 9;
            document.querySelector('.temperature').textContent = `${Math.round(celsius)}°C`;
        })

}

function farenheit() {
    fetch(key)
        .then(data => data.json())
        .then(data2 => {
            console.table(data2.main.temp);
            let f = data2.main.temp;
            document.querySelector('.temperature').textContent = `${Math.round(f)}°F`;
        })
}

function toKelvin() {
    fetch(key)
        .then(data => data.json())
        .then(data2 => {
            console.table(data2.main.temp);
            let f = data2.main.temp;
            let kelvin = (f - 32) * 5 / 9 + 273.15;
            document.querySelector('.temperature').textContent = `${Math.round(kelvin)}°K`;
        })
}