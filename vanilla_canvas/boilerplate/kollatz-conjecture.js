// https://en.wikipedia.org/wiki/Collatz_conjecture
// Refactored
const hotpo = (n, steps = 0) => {
    const numberIsEven = n => {
        return hotpo(n / 2, steps + 1)
    }
    const numberIsOdd = n => {
        return hotpo(3 * n + 1, steps + 1)
    }
    return (n === 0 || n === 1) ? steps :
    (n % 2 === 0) ? numberIsEven(n) : numberIsOdd(n)
}

// const hotpo = n => {
//         let steps = 0;
//         if (n === 0 || n === 1) {
//           return steps = 0
//         }
        

//         if (n > 1) {
//             n % 2 === 0 ? numberIsEven(n) : numberIsOdd(n)
//         }
        
//         function numberIsEven(n) {
//             n = n / 2
//             steps++
//             if (n > 1) {
//                 n % 2 === 0 ? numberIsEven(n) : numberIsOdd(n)
//             }
//         }
        
//         function numberIsOdd(n) {
//             n = 3 * n + 1
//             steps++
//             if (n > 1) {
//                 n % 2 === 0 ? numberIsEven(n) : numberIsOdd(n)
//             }
//         }

//         return steps
// }

    /*
  Append 1 to the (right) end of the number in binary (giving 2n + 1);
  Add this to the original number by binary addition (giving 2n + 1 + n = 3n+1);
  Remove all trailing "0"s (i.e. repeatedly divide by two until the result is odd).
    */

// Refactored
// Now this is a reminder again to use implicit parameter binding, even as a store of accumulator
const hotpo = (n, acc = 0) => {
    if (n <= 1) {
      // neatly provide an effective break for the recursive loop  
      return acc;
    } else {
      return hotpo(n%2==0 ? n/2 : 3*n+1, acc+1);
    }
  }

// A good example of a while loop that does not break your laptop
var hotpo = function(n){
    var rs=0;
    while (n>1){
      rs++;
      n=n%2?n*3+1:n/2;
    }
    return rs;
}

// And the one line hipster 
const hotpo = n => n === 1 ? 0 : 1 + hotpo(n % 2 ? (n * 3 + 1) : n / 2);


