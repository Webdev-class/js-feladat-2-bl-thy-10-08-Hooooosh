
const APIAdress = 'https://archive-api.open-meteo.com/v1/archive?';
async function f1 (lat, long, timeStr) {
    return fetch(`${APIAdress}latitude=${lat}&longitude=${long}&start_date=${timeStr}&end_date=${timeStr}&hourly=temperature_2m`)
    .then(response=> response.json())
    .then(json => Math.floor(json.hourly.temperature_2m.reduce((a, b)=>a+b) / (json.hourly.temperature_2m.length)))
}

module.exports = f1;