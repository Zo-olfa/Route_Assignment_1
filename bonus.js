/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let value = init;
  return {
    increment: function () {
      return ++value;
    },
    decrement: function () {
      return --value;
    },
    reset: function () {
      value = init;
      return value;
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment(), "increment"); // 6
console.log(counter.reset(), "reset"); // 5
console.log(counter.decrement(), "decrement"); // 4

// another solution using class
// class Counter {
//   init = 0;
//   value = 0;

//   constructor(init) {
//     this.init = init;
//     this.value = init;
//   }

//   increment() {
//     return ++this.value;
//   }
//   decrement() {
//     return --this.value;
//   }
//   reset() {
//     this.value = this.init;
//     return this.value;
//   }
// }

// var createCounter = function (init) {
//   const count = new Counter(init);
//   return count;
// };
