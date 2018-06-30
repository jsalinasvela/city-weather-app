const storage = new Storage();

const ui = new UI();

let city;

let weather;

//get weather on DOM load
document.addEventListener('DOMContentLoaded', ()=>{
	console.log(storage.getLocation());
	console.log(storage.getLocation().city);

	city = new City(storage.getLocation().city);
	getCityId();
});

const changeLoc_btn = document.querySelector('#w-change-btn');
changeLoc_btn.addEventListener('click', ()=>{
	const new_city = document.querySelector('#ciudad').value;
	//console.log(new_city);
	storage.setLocation(new_city);
	city.changeLocation(new_city);
	getCityId();
	$('#locModal').modal('hide');
});


function get_weather(city_id){

	weather = new Weather(city_id);
	getCityWeather();

}

function getCityWeather(){
	weather.getWeather()
		.then(data =>{
			console.log('We are done');
			console.log(data);
			ui.showWeather(data);

		})
		.catch(err => console.log(err));

}

function getCityId(){
	city.get()
		.then(results => {
			//console.log(results);
			//console.log(results[0].id);
			console.log('I am here');
			console.log(results[0].id);
			get_weather(results[0].id);
		})
		.catch(err => console.log(err));
}

//getCityId();