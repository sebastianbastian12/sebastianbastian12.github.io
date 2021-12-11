function toggleMenu1() {
    let f = document.getElementById('company-cards');
    f.className = 'sample1';
}

function toggleMenu2() {
    let f = document.getElementById('company-cards');
    f.className = 'sample2';
}

/*Json companies section*/

const source = 'companies.json';
fetch(source)
    .then(data => data.json())
    .then(data2 => {
        const companies = data2['companies'];
        console.table(companies);

        for (let i = 0; i < companies.length; i++) {
            let card = document.createElement('div');
            let img = document.createElement('img');
            let h2 = document.createElement('h2');
            let link = document.createElement('a');



            h2.textContent = companies[i].name;
            link.setAttribute('href', companies[i].url);
            link.textContent = companies[i].name2 + ".com";
            img.setAttribute('src', companies[i].logo)
            img.setAttribute('alt', companies[i].name)


            card.appendChild(h2);
            card.appendChild(link);
            card.appendChild(img);



            document.querySelector('#company-cards').appendChild(card);

        }
    })
    /*Toggle menu*/

function toggleMenu() {
    document.getElementsByClassName("navigation-link")[0].classList.toggle("responsive");
}

/*Current day and last mofofication code
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
let lUpdated = `Last Update: ${string}.`;




document.querySelector("#lastupdated").textContent = lUpdated;
document.querySelector("#currentyear").textContent = year; */

/*Lazy load*/
const imagesToLoad = document.querySelectorAll('img[data-src]');
const officialImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                officialImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((images) => {
        observer.observe(images);
    });
} else {
    imagesToLoad.forEach((images) => {
        officialImages(images);
    });
}

const key = 'https://api.openweathermap.org/data/2.5/weather?id=3688689&units=imperial&appid=fd15d96290be857f5672c4e23645f6bb';
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

const keyForecast = 'https://api.openweathermap.org/data/2.5/forecast?id=3688689&units=imperial&appid=fd15d96290be857f5672c4e23645f6bb';


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

const recurso = 'agosto.json';
fetch(recurso)
    .then(datos => datos.json())
    .then(datos2 => {
        const town = datos2['eventos'];

        let month = document.createElement('div');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        p1.textContent = town.events[0];
        p2.textContent = town.events[1];
        p3.textContent = town.events[2];

        month.appendChild(p1);
        month.appendChild(p2);
        month.appendChild(p3);

        document.querySelector('div.event1').appendChild(month);

    })

const recurso2 = 'septiembre.json';
fetch(recurso2)
    .then(datos1 => datos1.json())
    .then(datos1 => {
        const town2 = datos1['eventos'];

        let month = document.createElement('div');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        p1.textContent = town2.events[0];
        p2.textContent = town2.events[1];
        p3.textContent = town2.events[2];

        month.appendChild(p1);
        month.appendChild(p2);
        month.appendChild(p3);

        document.querySelector('div.event2').appendChild(month);

    })

const recurso3 = 'octubre.json';
fetch(recurso3)
    .then(datos4 => datos4.json())
    .then(datos4 => {
        const town3 = datos4['eventos'];

        let month = document.createElement('div');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        p1.textContent = town3.events[0];
        p2.textContent = town3.events[1];
        p3.textContent = town3.events[2];

        month.appendChild(p1);
        month.appendChild(p2);
        month.appendChild(p3);

        document.querySelector('div.event3').appendChild(month);

    })