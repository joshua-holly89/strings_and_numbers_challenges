var solution = function (n) {
  const decimalNumberArray = buildNumberArray(n);
  console.log(decimalNumberArray);
  const binaryNumberArray =
    convertDecimalToBinaryNumberArray(decimalNumberArray);
  console.log(binaryNumberArray);
  const countedones = convertToCountedOnesArray(binaryNumberArray);
  return countedones;
};

function buildNumberArray(n) {
  const numberArray = [];
  for (let i = 0; i <= n; i++) {
    numberArray.push(i);
  }
  return numberArray;
}

function convertDecimalToBinaryNumberArray(array) {
  const decimalNumberArray = [];
  for (let i = 0; i < array.length; i++) {
    decimalNumberArray.push((array[i] >>> 0).toString(2));
  }
  return decimalNumberArray;
}

function convertToCountedOnesArray(array) {
  const countedOnesArray = [];
  for (let i = 0; i < array.length; i++) {
    const currentString = array[i];
    let countOfOnes = 0;
    for (let j = 0; j < currentString.length; j++) {
      const currentLetter = currentString.charAt(j);
      if (currentLetter === "1") {
        countOfOnes++;
      }
    }
    countedOnesArray.push(countOfOnes);
  }
  return countedOnesArray;
}

function printArray(arr) {
  console.log(JSON.stringify(arr).replace(/,\s*/g, ","));
}
const output = solution(3);
printArray(output);
