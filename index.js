/*
 * Complete the 'validString' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts STRING input as parameter.
 */

function validString(input) {
  console.log(input);

  let arr = input.replace(/[^\[\]({})]/g, "").split("");

  const obj = {
    "]": "[",
    "}": "{",
    ")": "(",
  };

  const arr2 = [];

  let isValidBracket = true;
  console.log(arr);
  arr.forEach((bracket) => {
    if (obj[bracket]) {
      if (!arr2.length) {
        isValidBracket = false;
      } else {
        if (arr2[arr2.length - 1] === obj[bracket]) {
          arr2.pop();
        } else {
          isValidBracket = false;
        }
      }
    } else {
      arr2.push(bracket);
    }
    console.log(arr2);
  });
  return isValidBracket;
}

// question 2
function findUniquePairs(numbers, target) {
  let sortedNumbers = numbers.sort((a, b) => a - b);

  let pairs = {};

  sortedNumbers.forEach((num1) => {
    sortedNumbers.forEach((num2) => {
      const targetAttempt = num1 + num2;
      if (targetAttempt === target && pairs[num2] !== num1) {
        pairs[num1] = num2;
      }
    });
  });

  return Object.entries(pairs);
}
