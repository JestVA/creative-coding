// https://en.wikipedia.org/wiki/Collatz_conjecture

const hotpo = n => {
    let steps = 0;
    if (n === 0 || n === 1) {
      return steps = 0
    }

    if (n % 2 === 0) {
        n /= 2
        steps += 1
        hotpo(n)
    }


    return steps






  
  
  
  
  
  
  // Append 1 to the (right) end of the number in binary (giving 2n + 1);
  // Add this to the original number by binary addition (giving 2n + 1 + n = 3n + 1);
  // Remove all trailing "0"s (i.e. repeatedly divide by two until the result is odd).
  
  
}