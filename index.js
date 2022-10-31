const button2 = document.getElementById("button1");
const button1 = document.getElementById("button2");

const slides = document.getElementsByClassName("carousel__slide__image");
const points = document.getElementsByClassName("carousel__indicator");

let numberOfSlide = 0;

const showSlide = (number) => {
    let counter = 0;
    for (let item of slides) {
        if (counter === number) {
            item.classList.remove("hide");
            item.classList.add("show");
            points[counter].classList.add("selected");
        } else {
            item.classList.remove("show");
            item.classList.add("hide");
            points[counter].classList.remove("selected");
        }
        counter++;
    }
}

const showNextSlide = () => {
    numberOfSlide = (numberOfSlide + 1) % 4;
    showSlide(numberOfSlide);
}

const showPrevSlide = () => {
    if (numberOfSlide === 0) {
        numberOfSlide = 4;
    }
    numberOfSlide = (numberOfSlide - 1);
    showSlide(numberOfSlide);
}

showSlide(numberOfSlide);

button1.addEventListener("click", showNextSlide);
button2.addEventListener("click", showPrevSlide);