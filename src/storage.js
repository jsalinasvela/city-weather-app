class Storage{

	constructor(){
		this.city;
		this.defaultCity='Arequipa';
		console.log('Storage object initialized');
	}


	getLocation(){
		if (localStorage.getItem('city')===null) {
			this.city= this.defaultCity;
		}else{
			this.city = localStorage.getItem('city');
		}

		return {
			city:this.city
		}
	}


	setLocation(city_name){
		localStorage.setItem('city', city_name);
	}
}