var solution = function (inputString, n) {
  const chars = inputString.toLowerCase().split("");
  console.log("chars: " + chars);
  let weightsString = getWeightsOfChars(chars);
  console.log("weights: " + weightsString);
  return calcSeveralTimesDigitSum(n, weightsString);
};

function getWeightsOfChars(chars) {
  const weightsArray = chars.map((char) => {
    return (char.charCodeAt(0) - 96).toString();
  });
  const weightsString = weightsArray.join("");
  return weightsString;
}

function calcSeveralTimesDigitSum(n, result) {
  for (let i = 0; i < n; i++) {
    result = calculateDigitSum(result);
    console.log("iteration: " + i + " digit sum: " + result);
  }
  return result;
}

function calculateDigitSum(value) {
  sum = value
    .toString()
    .split("")
    .map(String)
    .map(Number)
    .reduce((a, b) => a + b, 0);
  return sum;
}

solution("turing", 3);
