class City{

	constructor(city_name){
		this.city_name=city_name;
		this.url=`http://localhost:3000/cities?name=${city_name}`;
	}

	//Fetch city id
	async get(){
		
		const response = await fetch(this.url);
		const resData = await response.json();
		return resData;
	}

	changeLocation(city_name){
		this.city_name=city_name;
		this.url=`http://localhost:3000/cities?name=${city_name}`;
	}

}