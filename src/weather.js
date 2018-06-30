class Weather{

	 constructor(city_id){
	 	this.apiKey='5e98696f66ac20fff1b421ce67ebb2ea';
	 	this.city_id=city_id;
	 	this.url=`https://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=${this.apiKey}`;
	 	console.log('weather object inititialized');
	 }

	 //Fetch weather from API
	 async getWeather(){
	 	const response = await fetch(this.url);
	 	const resData = await response.json();
	 	//console.log("Sample Data:");
	 	//const resData = new Sampledata();
	 	return resData;
	 }

	 //change location
	 changeLocation(city_id){
	 	this.city_id=city_id;
	 }

}