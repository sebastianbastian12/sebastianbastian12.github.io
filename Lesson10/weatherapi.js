const key = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=fd15d96290be857f5672c4e23645f6bb';
1
fetch(key)
    .then(data => data.json())
    .then(data2 => {
        console.table(data2.main.temp);
        /*document.querySelector('#current-temp').textContent = data2.main.temp;
        const imagesrc = 'https://openweathermap.org/img/w/' + data2.weather[0].icon + '.png'; // note the concatenation
        const desc = data2.weather[0].description; // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);*/

        let f = data2.main.temp;
        let s = data2.wind.speed;
        let h = data2.main.humidity;
        let d = data2.weather[0].description;
        let none = 'N/A';

        document.querySelector('.currently').textContent = `${d}`;
        document.querySelector('.humidity').textContent = ` ${h}${'%'}`;
        document.querySelector('.temperature').textContent = ` ${f} ${'°F'}`;
        document.querySelector('.speed').textContent = ` ${s} ${'mph'}`;

        if (f <= 50 && s >= 3.0) {
            let w = (35.74 + (0.6215 * t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * (t * (Math.pow(s, 0.16))));
            let result = w.toFixed(2);
            document.querySelector('.wChill').textContent = ` ${result} ${'°F'}`;
        } else {
            document.querySelector('.wChill').textContent = none;
        }


    })

/*Forescast Section*/

const keyForecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=fd15d96290be857f5672c4e23645f6bb';


fetch(keyForecast)
    .then(fData => fData.json())
    .then((fData2) => {

        let day = 0;
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        let forecastInfo = fData2.list.filter(forescast => forescast.dt_txt.includes('18:00:00'));
        console.log(forecastInfo);


        forecastInfo.forEach(dia => {
            let d = new Date(dia.dt_txt);
            let count = day + 1;
            document.querySelector(`.tHead${count}`).textContent = days[d.getDay()];
            document.querySelector(`.tinfo${count}`).textContent = dia.main.temp.toFixed(0) + '°F';
            let h = dia.weather[0].icon;
            let g = 'icon' + count;
            const keyIcon = 'https://openweathermap.org/img/w/' + h + '.png';
            document.querySelector(`.icon${count}`).setAttribute('src', keyIcon);
            document.querySelector(`.icon${count}`).setAttribute('alt', g);
            day++
        })
    })

/*Section events with json*/

const recurso = 'preston.json';
fetch(recurso)
    .then(datos => datos.json())
    .then(datos2 => {
        const town = datos2['towns'];

        let city = document.createElement('section');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        p1.textContent = town.events[0];
        p2.textContent = town.events[1];
        p3.textContent = town.events[2];

        city.appendChild(p1);
        city.appendChild(p2);
        city.appendChild(p3);

        document.querySelector('div.events3').appendChild(city);

    })