class Weather {
  constructor(city,state) {
    this.apiKey = "81aa4493a4d3a4921c192243854522a9";
    this.city = city;
    this.state = state;
  }

  //Fetch Weather data from API 

  async getlocation() {

    const geolocation = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.city}&limit=1&appid=${this.apiKey}`)

    const geoResponse = await geolocation.json();


    return geoResponse;
    


    
  }

  async getWeather() {

    const locationData = await this.getlocation();

    const latitude = locationData[0].lat

    const longitude = locationData[0].lon



    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}`)

    const weatherData = await response.json()

    return  weatherData;
    

  }

  changeLocation(city,state) {
    this.city = city;
    this.state = state;

  }
}