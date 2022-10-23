// Function for handling scroll
const scrollHandler = () => {

  const doc = document.documentElement;
  const w = window;

  let prevScroll = w.scrollY || doc.scrollTop;
  let curScroll;
  let direction = 0;
  let prevDirection = 0;

  const header = document.getElementById('site-header');

  const checkScroll = () => {
    /*
    ** If header is on top then shadow will be removed
    */

    if (w.scrollY === 0) {
      header.classList.add('Header--onTop');
    }
    else {
      header.classList.remove('Header--onTop');
    }

    /*
    ** Direction of scroll
    ** 0 - initial, 1 - up, 2 - down
    */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) { 
      //scrolled up
      direction = 2;
    }
    else if (curScroll < prevScroll) { 
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
      header.classList.add('hidden');
      prevDirection = direction;
    }
    else if (direction === 1) {
      header.classList.remove('hidden');
      prevDirection = direction;
    }
  };
  
  window.addEventListener('scroll', checkScroll);
}

scrollHandler();