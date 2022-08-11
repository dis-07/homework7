'usw strict';


//////////////      Task #1

// function sumTo (n) {
//     if (n === 1) {
//         return n;
//     }
//     return n + sumTo( n - 1);
// }

// console.log(sumTo(5));
// console.log(sumTo(10));
// console.log(sumTo(7));


//////////////      Task #2


const sentance = "Lorem ipsum dolor sit amet";

function findShort(str) {
    return str.split(' ').reduce((a, b) => (b.length < a.length) ? b : a);
  };

  console.log(findShort('hello wordld olllllll'));
  console.log(findShort(sentance));