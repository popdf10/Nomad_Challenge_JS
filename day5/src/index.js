// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const clock = document.querySelector(".christmas_time");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const time = Date.now();
  let d_day = xmasDay.getTime() - time;
  d_day = Math.floor(d_day / 1000);
  const sec = Math.floor(d_day % 60);
  d_day = d_day / 60;
  const min = Math.floor(d_day % 60);
  d_day = d_day / 60;
  const hours = Math.floor(d_day % 24);
  const day = Math.floor(d_day / 24);
  clock.innerText = `${day < 10 ? `0${day}` : day}d ${
    hours < 10 ? `0${hours}` : hours
  }h ${min < 10 ? `0${min}` : min}m ${sec < 10 ? `0${sec}` : sec}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
