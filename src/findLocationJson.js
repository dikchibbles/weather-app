export async function getLocationJson(location, units='metric') {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=964d5713e914f8e5574cd64379128469`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    return data;
}