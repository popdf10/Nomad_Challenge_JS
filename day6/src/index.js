// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const selected = document.querySelector(".selected_item");
const COUNTRY_LS = "country";

function handleClick(event) {
  localStorage.setItem("country", event.target.value);
}

function loadCountry() {
  const country = localStorage.getItem(COUNTRY_LS);
  if (country !== null) {
    selected.value = country;
  }
}

function init() {
  selected.addEventListener("change", handleClick);
  loadCountry();
}

init();
