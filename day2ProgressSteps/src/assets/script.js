const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const line = document.querySelectorAll(".line");
const circles = document.querySelectorAll(".circle");

let currentActive = 0;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > line.length) {
    currentActive = line.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 0;
  }
  update();
});

function update() {
  line.forEach((lineNode, index) => {
    if (index < currentActive) {
      lineNode.classList.add("active");
    } else {
      lineNode.classList.remove("active");
    }
  });
  circles.forEach((circleNode, index) => {
    if (index < currentActive) {
      circleNode.classList.add("active");
    } else {
      circleNode.classList.remove("active");
    }
  });
  if (currentActive === 0) {
    prev.disabled = true;
    prev.classList.remove("active");
  } else if (currentActive === line.length) {
    next.disabled = true;
    next.classList.remove("active");
  } else {
    prev.disabled = false;
    prev.classList.add("active");
    next.disabled = false;
    next.classList.add("active");
  }
  console.log(currentActive);
}
