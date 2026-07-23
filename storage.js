class Store {
  constructor() {
    this.city;
    this.state;
    this.defaultCity = 'Lagos';
    this.defaultState = 'NG'
  }

  getLocationData() {
    if(localStorage.getItem("city") === null && localStorage.getItem("state") === null) {
      this.city = this.defaultCity;
      this.state = this.defaultCity;
    


    } else {
      this.city = localStorage.getItem('city');
      this.state = localStorage.getItem('state')
    }

    return {
      city: this.city,
      state: this.state
    }

  }

  setLocationData(city, state) {

   localStorage.setItem('city', city);
   localStorage.setItem('state', state);

   }

}