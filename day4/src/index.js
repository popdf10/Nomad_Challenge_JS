const title = document.getElementsByClassName("title");
let body = document.body;

function handleResize(event) {
  const width = window.innerWidth;
  console.log(width);
  if (width < 600) {
    body.style.backgroundColor = "blue";
  } else if (width >= 600 && width < 800) {
    body.style.backgroundColor = "purple";
  } else {
    body.style.backgroundColor = "yellow";
  }
}

function init() {
  window.addEventListener("resize", handleResize);
}

init();
