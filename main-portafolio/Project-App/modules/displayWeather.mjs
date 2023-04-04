import { addingItems } from "./main.mjs";

export const displayWeather = (dataInfo) => {
    const html = 
    `<div class = 'prueba'>
    <h3>${dataInfo.name} Weather City</h3>
    <p>City: ${dataInfo.name}<p>
    <p>Current Temp: ${dataInfo.main.temp}${'°F'}</p>
    <p>Min Temp: ${dataInfo.main.temp_min}${'°F'}</p>
    <p>Max Temp: ${dataInfo.main.temp_max}${'°F'}</p>
    <p>Sky Description: ${dataInfo.weather[0].description}</p>
    <button class = 'addButton'>Add To My Favorites</button>
    </div>
    `
    document.querySelector('.searches').innerHTML = html;       
    document.querySelector('.addButton').addEventListener('click', addingItems); 
}