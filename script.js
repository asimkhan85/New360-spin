let current = 1;
const total = 88;          // tumhari 36 images
const img = document.getElementById("spinImage");

function updateImage() {
  img.src = current + ".jpg";
}

let startX = 0;

// Touch start
img.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

// Touch move = spin fast
img.addEventListener("touchmove", (e) => {
  let moveX = e.touches[0].clientX;
  if (moveX < startX - 5) {
    current++;
    if (current > total) current = 1;
    updateImage();
    startX = moveX;
  } else if (moveX > startX + 5) {
    current--;
    if (current < 1) current = total;
    updateImage();
    startX = moveX;
  }
});

// Mouse version (desktop)
img.addEventListener("mousedown", (e) => {
  startX = e.clientX;
});

img.addEventListener("mousemove", (e) => {
  if (e.buttons === 1) {
    let moveX = e.clientX;
    if (moveX < startX - 5) {
      current++;
      if (current > total) current = 1;
      updateImage();
      startX = moveX;
    } else if (moveX > startX + 5) {
      current--;
      if (current < 1) current = total;
      updateImage();
      startX = moveX;
    }
  }
});
