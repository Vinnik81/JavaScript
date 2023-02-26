import * as weatherApi from './weatherApi.js'

let searchForm = document.forms.citySearch;



searchForm.addEventListener('submit', async function() {
    event.preventDefault();

    let cityName = searchForm.city.value;
    let weatherData = await weatherApi.getWeatherDataByCityName(cityName);
    console.log(weatherData);
    document.querySelector('.history').innerHTML += `
<div class="col-12">
                <div class="card">
                    <img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${cityName } ${Math.round(weatherData.main.temp)} ℃</h5>
                        <p class="card-text">${weatherData.weather[0].description}</p>
                    </div>
                </div>
            </div>`

    console.log(weatherData);

    searchForm.reset();
})



document.addEventListener('DOMContentLoaded', async() => {
    let getCities = await weatherApi.getCities();
    renderCitiesList(getCities);

})


function renderCitiesList(cities) {
    let list = document.querySelector('#cities');
    list.innerHTML = '';
    for (const city of cities) {
        let option = document.createElement('option');
        option.value = city.name;
        list.append(option);
    }

}

searchForm.city.addEventListener('input', async() => {
    let cities = await weatherApi.getCities();

    cities = cities.filter(x => x.name.startsWith(event.target.value))
    renderCitiesList(cities);
})