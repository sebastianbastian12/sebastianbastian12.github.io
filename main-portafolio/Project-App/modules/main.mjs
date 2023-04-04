import { displayWeather } from "./displayWeather.mjs";
let choosenWeathers = [];
let dataJson = null;
const limitInputs = 4;


let storedWeathers = JSON.parse(localStorage.getItem('weathers')) || [];
choosenWeathers = storedWeathers;

export const gettingInputValue = async () => {
    let input = document.querySelector('.inputValue').value;

    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
    const inputValue = input;
    const apiId = '&units=imperial&appid=fd15d96290be857f5672c4e23645f6bb';
    const urlCall = `${apiUrl}${inputValue}${apiId}`;

    try {
        const response = await fetch(urlCall);
        if(response.ok){
            const data = await response.json();
            displayWeather(data);
            dataJson = data;
        } else {
            throw 'Invalid input value! Try again';
        }
    } catch (error) {
        alert(error);
    }
}



const displayFavorites = () => {
    let items = document.querySelector('.favorites');
    items.innerHTML = '';

    for (const dataInfo of choosenWeathers) {
        const html =
        `<div class = 'prueba'>
        <h3>${dataInfo.name} Weather City</h3>
        <p>City: ${dataInfo.name}<p>
        <p>Current Temp: ${dataInfo.main.temp}${'°F'}</p>
        <p>Min Temp: ${dataInfo.main.temp_min}${'°F'}</p>
        <p>Max Temp: ${dataInfo.main.temp_max}${'°F'}</p>
        <p>Sky Description: ${dataInfo.weather[0].description}</p>
        <button class='removeButton'>Remove From My Favorites</button>
        </div>
        `;
        const div = document.createElement('div');
        div.innerHTML = html;
        items.appendChild(div);
        div.querySelector('.removeButton').addEventListener('click', () => {
            removeItem(dataInfo);
            displayFavorites();
          });
    }
}

export const addingItems = () => {
  if (choosenWeathers.length < limitInputs) {
      choosenWeathers.push(dataJson);
      let weathers = choosenWeathers;
      localStorage.setItem('weathers', JSON.stringify(weathers));
      storedWeathers = weathers;
      displayFavorites();
  } else {
      alert(`You can only choose up to ${limitInputs} options maximum.`);
  }
}


const removeItem = (item) => {
  choosenWeathers = choosenWeathers.filter(weather => weather !== item);

  let weathers = JSON.parse(localStorage.getItem('weathers')) || [];
  weathers = weathers.filter(weather => weather !== item);
  localStorage.removeItem('weathers');
  localStorage.setItem('weathers', JSON.stringify(weathers));
}

  window.addEventListener('load', displayFavorites);

