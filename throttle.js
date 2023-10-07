// ! Debouncing
// const debounce = function (fn) {
//   let timeId;
//   return function (...args) {
//     clearTimeout(timeId);
//     timeId = setTimeout(() => {
//       fn.call(this, ...args);
//     }, 2000);
//   };
// };

// const callMe = (e) => {
//   console.log(this);
//   console.log(e.target.value);
// };

// const res = debounce(callMe);

// const input = document.querySelector(".input");

// input.addEventListener("input" , res);

// ! Throttling

const btn = document.querySelector(".btn");

const throttle = function (fn, limit) {
  let timeId;
  let lastRun;

  return function (args) {
    if (!lastRun) {
      fn.call(this , args);
      lastRun = Date.now();
    }

    timeId = setTimeout(() => {
      if (Date.now() - lastRun >= limit) {
        fn.call(this , args);
        lastRun = Date.now();
      }
    }, limit);
  };
};


const clickMe = ()=>{
    console.log("Hello You clicked me");
}

const throttleFn = throttle(clickMe , 2000);


btn.addEventListener('click' , throttleFn);
