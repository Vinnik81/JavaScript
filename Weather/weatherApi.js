const apiKey = '82d18c260f5f2d9b4f74e6d383d10282';
const apiUrl = 'https://api.openweathermap.org/data/2.5/'

//weather?q=Moscow&appid=


export async function getCities() {
    let response = await fetch('./cities.json');
    let data = await response.json();
    return data;
}



export async function getWeatherDataByCityName(cityName) {
    let response = await fetch(`${apiUrl}weather?q=${cityName}&appid=${apiKey}&units=metric`);
    let data = await response.json();
    return data;
}
