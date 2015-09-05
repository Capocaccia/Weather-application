var API_URL = 'http://api.wunderground.com/api/7a47b141d9b58611/conditions/q/'
var lookup = document.querySelector('.lookup');
var geo = document.querySelector('.geoLocate');
var pwmtb = document.querySelector('.pwmtb');
var hct = document.querySelector('.hct');
var stanky = document.querySelector('.stanky');
var gMtn = document.querySelector('.gMtn');

lookup.onclick = function() {
  var input = document.querySelector('input');
  var zip = input.value;
  getJSON(API_URL + zip + '.json', function (data) {
      var hum = document.querySelector('.hum');
      var city = document.querySelector('.city');
      var sky = document.querySelector('.sky');
      var win = document.querySelector('.win');
      var tempf = document.querySelector('.tempf');
      var precip = document.querySelector('.precip');

      hum.innerHTML = data.current_observation.relative_humidity;
      city.innerHTML = data.current_observation.observation_location.city;
      sky.innerHTML = data.current_observation.weather;
      win.innerHTML = data.current_observation.wind_mph;
      tempf.innerHTML = data.current_observation.temp_f;
      precip.innerHTML = data.current_observation.precip_today_in;
      console.log(data)
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

geo.onclick = function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;

    getJSON(API_URL + lat + "," + long + '.json', function (data) {
      var hum = document.querySelector('.hum');
      var city = document.querySelector('.city');
      var sky = document.querySelector('.sky');
      var win = document.querySelector('.win');
      var tempf = document.querySelector('.tempf');
      var precip = document.querySelector('.precip');

      city.innerHTML = data.current_observation.observation_location.city;
      sky.innerHTML = data.current_observation.weather;
      win.innerHTML = data.current_observation.wind_mph;
      hum.innerHTML = data.current_observation.relative_humidity;
      precip.innerHTML = data.current_observation.precip_today_in;
      tempf.innerHTML = data.current_observation.temp_f;
    });
  });
};

pwmtb.onclick = function() {
  var zip = 37205

  getJSON(API_URL + zip + '.json', function (data) {
      var hum = document.querySelector('.hum');
      var city = document.querySelector('.city');
      var sky = document.querySelector('.sky');
      var win = document.querySelector('.win');
      var tempf = document.querySelector('.tempf');
      var precip = document.querySelector('.precip');

      hum.innerHTML = data.current_observation.relative_humidity;
      city.innerHTML = data.current_observation.observation_location.city;
      sky.innerHTML = data.current_observation.weather;
      win.innerHTML = data.current_observation.wind_mph;
      precip.innerHTML = data.current_observation.precip_today_in;
      tempf.innerHTML = data.current_observation.temp_f;
  });
}

hct.onclick = function() {
  var zip = 37217

  getJSON(API_URL + zip + '.json', function (data) {
      var hum = document.querySelector('.hum');
      var city = document.querySelector('.city');
      var sky = document.querySelector('.sky');
      var win = document.querySelector('.win');
      var tempf = document.querySelector('.tempf');
      var precip = document.querySelector('.precip');

      hum.innerHTML = data.current_observation.relative_humidity;
      city.innerHTML = data.current_observation.observation_location.city;
      sky.innerHTML = data.current_observation.weather;
      win.innerHTML = data.current_observation.wind_mph;
      precip.innerHTML = data.current_observation.precip_today_in;
      tempf.innerHTML = data.current_observation.temp_f;
  });
}


stanky.onclick = function() {
  var zip = 38134

  getJSON(API_URL + zip + '.json', function (data) {
      var hum = document.querySelector('.hum');
      var city = document.querySelector('.city');
      var sky = document.querySelector('.sky');
      var win = document.querySelector('.win');
      var tempf = document.querySelector('.tempf');
      var precip = document.querySelector('.precip');

      hum.innerHTML = data.current_observation.relative_humidity;
      city.innerHTML = data.current_observation.observation_location.city;
      sky.innerHTML = data.current_observation.weather;
      win.innerHTML = data.current_observation.wind_mph;
      precip.innerHTML = data.current_observation.precip_today_in;
      tempf.innerHTML = data.current_observation.temp_f;
  });
}

gMtn.onclick = function() {
  var zip = 80228

  getJSON(API_URL + zip + '.json', function (data) {
      var hum = document.querySelector('.hum');
      var city = document.querySelector('.city');
      var sky = document.querySelector('.sky');
      var win = document.querySelector('.win');
      var tempf = document.querySelector('.tempf');
      var precip = document.querySelector('.precip');

      hum.innerHTML = data.current_observation.relative_humidity;
      city.innerHTML = data.current_observation.observation_location.city;
      sky.innerHTML = data.current_observation.weather;
      win.innerHTML = data.current_observation.wind_mph;
      precip.innerHTML = data.current_observation.precip_today_in;
      tempf.innerHTML = data.current_observation.temp_f;
  });
}
