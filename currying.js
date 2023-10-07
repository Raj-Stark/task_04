// ! Currying Part 1

// const sum = function (...args) {
//   const storage = [...args];

//   if (storage.length === 4) {
//     const ans = storage.reduce((accu, elem) => {
//       return (accu += elem);
//     }, 0);

//     return ans;
//   } else {
//     const temp = function (...args2) {
//       storage.push(...args2);

//       if (storage.length === 4) {
//         const ans = storage.reduce((accu, elem) => {
//           return (accu += elem);
//         }, 0);

//         return ans;
//       } else {
//         return temp;
//       }
//     };

//     return temp;
//   }
// };

// const res2 = sum(1)(2)(3)(4);

// console.log(res2);

// ! Currying Part 2

// const currySum = function () {
//   let sum = 0;

//   return function (num = 0) {
//     sum += num;

//     return sum;
//   };
// };

// let ans = currySum();

// console.log(ans(5));
// console.log(ans(15));
// console.log(ans(25));

// ! Infinite Currying

// function add(a) {
//   return function (b) {
//     if (b) {
//       return add(a + b);
//     } else {
//       return a;
//     }
//   };
// }

// console.log(add(4)(3)(2)());
