function updateTime() {
  let taName = document.querySelector("#tahiti");
  let taDate = taName.querySelector(".date");
  let taTime = taName.querySelector(".time");
  let taInfo = moment().tz("Pacific/Tahiti");

  taDate.innerHTML = taInfo.format("MMMM Do, YYYY");
  taTime.innerHTML = taInfo.format("h:mm:ss A");

  let colombia = document.querySelector("#bogota");
  let coDate = colombia.querySelector(".date");
  let coTime = colombia.querySelector(".time");
  let coInfo = moment().tz("America/Bogota");

  coDate.innerHTML = coInfo.format("MMMM Do, YYYY");
  coTime.innerHTML = coInfo.format("h:mm:ss A");

  let italy = document.querySelector("#rome");
  let itDate = italy.querySelector(".date");
  let itTime = italy.querySelector(".time");
  let itInfo = moment().tz("Europe/Rome");

  itDate.innerHTML = itInfo.format("MMMM Do, YYYY");
  itTime.innerHTML = itInfo.format("h:mm:ss A");
}
function updateCity(event) {
  let timezone = event.target.value;
  if (timezone === "Current") {
    timezone = moment.tz.guess();
  }
  let time = moment().tz(timezone);
  let cityName = timezone.replace("_", " ").split("/")[1];
  let cities = document.querySelector("#cities");
  cities.innerHTML = `   
  <div class="city">
      <div>
    <h2>${cityName} </h2>
    </div>
    <div class="date"> ${time.format("MMMM Do, YYYY")}</div>
    <div class="time">${time.format("h:mm:ss A")}</div>`;
}
updateTime();
setInterval(updateTime, 1000);

let selectCity = document.querySelector("#city");
selectCity.addEventListener("change", updateCity);
