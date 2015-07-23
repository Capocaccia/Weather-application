var API_URL = 'http://api.wunderground.com/api/7a47b141d9b58611/conditions/q/'
var lookup = document.querySelector('.lookup');

lookup.onclick = function() {
  var input = document.querySelector('input');
  var zip = input.value;

  getJSON(API_URL + zip + '.json', function (data) {
    var span = document.querySelector('span');
    var hum = document.querySelector('.hum');

    span.innerHTML = data.current_observation.temp_f;
    hum.innerHTML = data.current_observation.relative_humidity;
  });
}

function getJSON(url, cb) {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', url);
  xhr.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      cb(JSON.parse(this.response));
    }
  };

  xhr.send();
}

//SPLIT BETWEEN THE TWO BUTTON ACTIONS.
//Button functions above.
//Table containing 7 day forecast / geolocation below

var API_URL = 'http://api.wunderground.com/api/7a47b141d9b58611/conditions/q/'
var loc = document.querySelector('.location');

loc.onclick = function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;

    getJSON(API_URL + lat + "," + long + '.json', function (data) {
      var span = document.querySelector('span');
      var hum = document.querySelector('.hum');
      var city = document.querySelector('.city');
      var sky = document.querySelector('.sky');
      var win = document.querySelector('.win');
      var humi = document.querySelector('.humi');
      var tempf = document.querySelector('.tempf');
      var tempc = document.querySelector('.tempc');
      var prec = document.querySelector('.prec');

      span.innerHTML = data.current_observation.temp_f;
      hum.innerHTML = data.current_observation.relative_humidity;
      city.innerHTML = data.current_observation.observation_location.city;
      sky.innerHTML = data.current_observation.weather;
      win.innerHTML = data.current_observation.wind_mph;
      humi.innerHTML = data.current_observation.relative_humidity;
      tempf.innerHTML = data.current_observation.temp_f;
      tempc.innerHTML = data.current_observation.temp_c;
      prec.innerHTML = data.current_observation.precip_today_in;

    });
  });
};
