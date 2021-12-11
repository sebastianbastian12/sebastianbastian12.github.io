/*Home Page City Data*/

const recurso = 'towns.json';
fetch(recurso)
    .then(datos => datos.json())
    .then(datos2 => {
        const towns = datos2['towns'];
        console.table(towns);

        for (let i = 0; i < towns.length; i++) {
            let city = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let img = document.createElement('img');


            h2.textContent = towns[i].name;
            h3.textContent = towns[i].motto;
            p1.textContent = 'Year Founded: ' + towns[i].yearFounded;
            p2.textContent = 'Population: ' + towns[i].currentPopulation;
            p3.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            img.setAttribute('src', towns[i].photo)
            img.setAttribute('alt', towns[i].name)




            city.appendChild(h2);
            city.appendChild(h3);
            city.appendChild(p1);
            city.appendChild(p2);
            city.appendChild(p3);
            city.appendChild(img);



            document.querySelector('div.ciudades').appendChild(city);

        }
    })