1
const source = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(source)
    .then(data => data.json())
    .then(data2 => {
        const prophets = data2['prophets'];
        console.table(prophets);

        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let h4 = document.createElement('h3');
            let img = document.createElement('img');


            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            h3.textContent = 'Date Of Birth: ' + prophets[i].birthdate;
            h4.textContent = 'Place Of Birth: ' + prophets[i].birthplace;
            img.setAttribute('src', prophets[i].imageurl)
            img.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + '-' + (i + 1))


            card.appendChild(h2);
            card.appendChild(h3);
            card.appendChild(h4);
            card.appendChild(img);



            document.querySelector('div.cards').appendChild(card);

        }
    })