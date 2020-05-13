const COORDS = "coords";
const API_KEY = "95e38de06357ecf3c50dbb59ae616018";

const weather = document.querySelector(".js-weather");

// appid=API_KEY를 꼭 넣어야 한다. units=metric => Celsius로 온도를 변경해준다.
function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(json => {
      const temp = json.main.temp;
      const place = json.name;
      const todayWeather = json.weather[0].description;
      weather.innerText = `기온 : ${temp} 도 \n 장소 : ${place}n 오늘날씨 : ${todayWeather}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError(position) {
  console.log("where are u?");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadCoords = localStorage.getItem(COORDS);
  if (loadCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
