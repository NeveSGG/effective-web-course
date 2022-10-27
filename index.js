const doc = document.documentElement;
const w = window;

let prevScroll = w.scrollY || doc.scrollTop;
let curScroll;
let direction = 0;
let prevDirection = 0;

const header = document.getElementById("site-header");
const checkbox = document.getElementById("checkboxId");
const mobileNavigation = document.getElementById("mobileNavigation");
const logo = document.getElementById("logo");
const headerButton = document.getElementById("headerButton");

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent =
  "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

// call this to Disable
function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}

const checkScroll = () => {
  /*
   ** If header is on top then shadow will be removed
   */

  if (w.scrollY === 0 || doc.scrollTop === 0) {
    header.classList.add("Header--onTop");
  } else {
    header.classList.remove("Header--onTop");
  }

  /*
   ** Direction of scroll
   ** 0 - initial, 1 - up, 2 - down
   */

  curScroll = w.scrollY || doc.scrollTop;
  if (curScroll > prevScroll) {
    //scrolled up
    direction = 2;
  } else if (curScroll < prevScroll) {
    //scrolled down
    direction = 1;
  }
  if (direction !== prevDirection) {
    toggleHeader(direction, curScroll);
  }
  prevScroll = curScroll;
};

const toggleHeader = (direction, curScroll) => {
  if (direction === 2 && curScroll > 50) {
    header.classList.add("hidden");
    prevDirection = direction;
  } else if (direction === 1) {
    header.classList.remove("hidden");
    prevDirection = direction;
  }
};

// Function for handling scroll
const scrollHandling = () => {
  const scrollHandler = () => {
    if (checkbox.checked) {
      window.removeEventListener("scroll", checkScroll);
      mobileNavigation.classList.remove("closed");
      header.classList.add("opened");
      logo.classList.add("onTop");
      headerButton.classList.add("onTop");
      disableScroll();
    } else {
      enableScroll();
      logo.classList.remove("onTop");
      headerButton.classList.remove("onTop");
      header.classList.remove("opened");
      mobileNavigation.classList.add("closed");
      window.addEventListener("scroll", checkScroll);
    }
  };

  window.addEventListener("scroll", checkScroll);
  checkbox.addEventListener("change", scrollHandler);
};

scrollHandling();
