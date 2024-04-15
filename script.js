 const url = 'https://api.openweathermap.org/data/2.5/weather';

const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

// Fetch weather data for Delhi by default
$(document).ready(function () {
	weatherFn('New Delhi');
});


// Fetching API to get JSON data.
async function weatherFn(cityName) {
// Getting in query parameters.
	const temp =
		`${url}?q=${cityName}&appid=${apiKey}&units=metric`;
// Using fetch API.
	try {
		const res = await fetch(temp);
		const data = await res.json();
// Checking if response is Okay or not.
		if (res.ok) {
			weatherShowFn(data);
		} else {
			alert('City not found. Please try again.');
		}
	} catch (error) {
// Returning Error 
		console.error('Error fetching weather data:', error);
	}
}

// Integrating the data recieved from JSON file for certain cities.
function weatherShowFn(data) {
	$('#city-name').text(data.name);
	$('#date').text(moment().
		format('MMMM Do YYYY, h:mm:ss a'));
	$('#temperature').
		html(`${data.main.temp}°C`);
	$('#description').
		text(data.weather[0].description);
	$('#wind-speed').
		html(`Wind Speed: ${data.wind.speed} m/s`);
	$('#weather-info').fadeIn();
}
