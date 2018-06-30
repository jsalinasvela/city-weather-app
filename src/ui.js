class UI{

	constructor(){
		this.location = document.querySelector('#w-location');
		this.description = document.querySelector('#w-desc');
		this.string = document.querySelector('#w-string');
		this.icon = document.querySelector('#w-icon');
		this.details = document.querySelector('#w-details');
		this.humidity = document.querySelector('#w-humidity');
		this.temperature = document.querySelector('#w-temperature');
		this.feel = document.querySelector('#w-feels-like');
		this.wind = document.querySelector('#w-wind');
		console.log('Initializing ui object');
	}

	showWeather(weather){
		console.log('I am now here');
		console.log(weather);
		this.location.textContent = weather.name;
		this.description.textContent = weather.weather[0].description;
		this.string.textContent = "Latitude: "+weather.coord.lat + ", Longitude: "+weather.coord.lon;
		this.icon.src=weather.weather[0].icon;

		this.humidity.textContent='Humidity: '+weather.main.humidity;
		this.temperature.textContent = 'Temperature: '+weather.main.temp;
		this.feel.textContent= 'Pressure: '+weather.main.pressure;
		this.wind.textContent ='Wind Speed: ' + weather.wind.speed;
	}
}