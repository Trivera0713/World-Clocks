function updateTime() {
  let nyName = document.querySelector("#new-york");
  let nyDate = nyName.querySelector(".date");
  let nyTime = nyName.querySelector(".time");
  let nyInfo = moment().tz("America/New_York");

  nyDate.innerHTML = nyInfo.format("MMMM Do, YYYY");
  nyTime.innerHTML = nyInfo.format("h:mm:ss A");
}
updateTime();
setInterval(updateTime, 1000);
