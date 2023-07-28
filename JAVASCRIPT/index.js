function updateTime() {
  let taName = document.querySelector("#tahiti");
  let taDate = taName.querySelector(".date");
  let taTime = taName.querySelector(".time");
  let taInfo = moment().tz("Pacific/Tahiti");

  taDate.innerHTML = taInfo.format("MMMM Do, YYYY");
  taTime.innerHTML = taInfo.format("h:mm:ss [<small>]A[</small]");

  let colombia = document.querySelector("#bogota");
  let coDate = colombia.querySelector(".date");
  let coTime = colombia.querySelector(".time");
  let coInfo = moment().tz("America/Bogota");

  coDate.innerHTML = coInfo.format("MMMM Do, YYYY");
  coTime.innerHTML = coInfo.format("h:mm:ss [<small>]A[</small]");

  let italy = document.querySelector("#rome");
  let itDate = italy.querySelector(".date");
  let itTime = italy.querySelector(".time");
  let itInfo = moment().tz("Europe/Rome");

  itDate.innerHTML = itInfo.format("MMMM Do, YYYY");
  itTime.innerHTML = itInfo.format("h:mm:ss [<small>]A[</small]");
}
function updateCity(event) {
  let timezone = event.target.value;
  if (timezone === "Current") {
    timezone = moment.tz.guess();
    document.body.style.backgroundImage = `url(images/new-york.jpg)`;
  } else if (timezone === "America/Bogota") {
    document.body.style.backgroundImage = `url(images/bogota.jpg)`;
  } else if (timezone === "Asia/Tokyo") {
    document.body.style.backgroundImage = `url(images/tokyo.jpg)`;
  } else if (timezone === "Pacific/Tahiti") {
    document.body.style.backgroundImage = `url(images/tahiti.jpg)`;
  } else if (timezone === "Europe/Rome") {
    document.body.style.backgroundImage = `url(images/venice.jpg)`;
    document.body.style.backgroundPosition = " center bottom -100px";
  }

  let time = moment().tz(timezone);
  let cityName = timezone.replace("_", " ").split("/")[1];
  let cities = document.querySelector("#cities");
  cities.innerHTML = `   
  <div class="city">
      <div>
    <h2>${cityName} </h2>
    <div class="date"> ${time.format("MMMM Do, YYYY")}</div> 
    </div>
    <div class="time">${time.format("h:mm:ss")}<small>${time.format(
    "A"
  )}</small></div>
    </div>  
    <a href="index.html">Return to Homepage</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let selectCity = document.querySelector("#city");
selectCity.addEventListener("change", updateCity);
