const listOfNumbers = [
        /* you want to find variance and
                std deviation */
                ];

const variance = numArr =>
// assumes numArr is a list of numbers;
{
  const mean = numArr.reduce((acc,curr) =>
  {
    return acc + curr;
  }, 0) / numArr.length;

  let total = 0;

  for(let i = 0; i < numArr.length; i++)
  {
    total += (numArr[i] - mean) ** 2;
  }

  return total / numArr.length; // this is variance
}

// Gets standard deviation. The number in a
 // population by which to judge
  // differences in measurements
  // higher order function
const stdDeviation = numArr => variance(numArr) ** 0.5;