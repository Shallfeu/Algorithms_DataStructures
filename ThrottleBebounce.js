function debounce(callback, delay) {
  let timer;
  return function (...args) {
    // arguments
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

function throttle(callback, delay) {
  let isWaiting = false;
  let savedArgs = null;
  let savedThis = null;

  return function wrapper(...args) {
    if (isWaiting) {
      savedArgs = args;
      savedThis = this;
      return;
    }
    callback.apply(this, args);
    isWaiting = true;

    setTimeout(() => {
      isWaiting = false;
      if (savedThis) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, delay);
  };
}

const f = throttle(console.log, 1000);

f(1);
f(2);
f(3);
