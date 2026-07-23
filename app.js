

// initialize the UI class

const ui = new UI();

// initialize the storage class
const storage = new Store();

// get location from LS

const weatherLocation = storage.getLocationData()


//  initialize the weather class
const weather = new Weather(weatherLocation.city, weatherLocation.state);


// Get Weather on Dom Loaded

document.addEventListener('DOMContentLoaded', infoWeather)

document.getElementById('w-change-btn').addEventListener('click', (e) => {

  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;


  // Change Weather Location
  weather.changeLocation(city, state);

  // set location in LS

  storage.setLocationData(city, state);

  //Get and display the weather 

  infoWeather();

  //close modal
  $("#locModal").modal('hide');



})



function infoWeather() {

  weather.getWeather()
    .then(data => {
      ui.paint(data)
  })
  .catch(err => console.log(err));


}

