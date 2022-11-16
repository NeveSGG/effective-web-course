const button2 = document.getElementById("button1");
const button1 = document.getElementById("button2");

const slides = document.getElementsByClassName("carousel__slide__image");
const points = document.getElementsByClassName("carousel__indicator");

if (!localStorage.numberOfSlide) {
  localStorage.setItem('numberOfSlide', 0);
}

let autoSlide = setInterval(() => {
  showNextSlide()
}, 5000);

const showSlide = (number) => {
  let counter = 0;
  for (let item of slides) {
    if (counter === number) {
      item.classList.remove("hide");
      points[counter].classList.add("selected");
    } else {
      item.classList.add("hide");
      points[counter].classList.remove("selected");
    }
    counter++;
  }
}

const showNextSlide = () => {
  clearInterval(autoSlide);

  const prev = parseInt(localStorage.numberOfSlide);
  const next = (parseInt(localStorage.numberOfSlide) + 1) % 4;

  slides[prev].classList.add("move-to-left");
  points[prev].classList.remove("selected");

  localStorage.numberOfSlide = next;

  slides[next].classList.add("move-to-right");
  slides[next].classList.remove("hide");
  points[next].classList.add("selected");

  setTimeout(() => {
    setTimeout(() => {
      slides[prev].classList.add("hide");
      slides[prev].classList.remove("move-to-left");
    }, 490)

    slides[next].classList.remove("move-to-right");

  }, 10)

  autoSlide = setInterval(() => {
    showNextSlide()
  }, 5000);
}

const showPrevSlide = () => {
  clearInterval(autoSlide);

  const prev = parseInt(localStorage.numberOfSlide);
  let next = prev;
  if (prev === 0) {
    next = slides.length;
  }
  next -= 1;
  localStorage.numberOfSlide = next;

  slides[prev].classList.add("move-to-right");
  points[prev].classList.remove("selected");
  slides[next].classList.add("move-to-left");
  slides[next].classList.remove("hide");
  points[next].classList.add("selected");

  setTimeout(() => {
    setTimeout(() => {
      slides[prev].classList.add("hide");
      slides[prev].classList.remove("move-to-right");
    }, 490)

    slides[next].classList.remove("move-to-left");

  }, 10)

  autoSlide = setInterval(() => {
    showNextSlide()
  }, 5000);
}

const moveRect = (e) => {
  switch (e.code) {
    case "ArrowLeft":
      showPrevSlide();
      break;
    case "ArrowRight":
      showNextSlide();
      break;
    case "Space":
      showNextSlide();
      break;
  }
}

showSlide(parseInt(localStorage.numberOfSlide));

button1.addEventListener("click", showNextSlide);
button2.addEventListener("click", showPrevSlide);
addEventListener("keydown", moveRect);