import { getImageFromGiphyAndReturnURL } from "./imageLookup";

export default async function addStatsToPage(data) {
    let stats = await data;
    let cityName = stats.name;
    let allItems = {
        Longitude: stats.coord.lon, 
        Latitude: stats.coord.lat, 
        "Wind Speed": stats.wind.speed, 
        "Wind Degrees": stats.wind.deg, 
        Weather: stats.weather[0].description, 
        "Feels Like": stats.main.feels_like, 
        Humidity: stats.main.humidity, 
        Pressure: stats.main.pressure, 
        Temperature: stats.main.temp, 
        "Min Temperature": stats.main.temp_max, 
        "Max Temperature": stats.main.temp_min,
    }

    // Change the Name of the city on the main page
    document.querySelector('.current-city').textContent = `Current City: ${cityName}`;

    const containerStats = document.querySelector('#container-stats');
    containerStats.innerHTML = '';
    for (let [key, value] of Object.entries(allItems)) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('stat');
        let p = document.createElement('p');
        p.innerHTML = `<strong>${key}</strong>: ${value}`
        newDiv.append(p);
        containerStats.append(newDiv)
    }    
}