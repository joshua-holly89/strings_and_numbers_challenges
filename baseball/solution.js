function calPoints(ops) {
    console.log("input", ops);
  var resultArray = [];
  for (i = 0; i < ops.length; i++) {
    if (ops[i] === "C") {
      resultArray.pop();
    } else if (ops[i] === "D") {
      resultArray.push(resultArray[resultArray.length - 1] * 2);
    } else if (ops[i] === "+") {
      resultArray.push(
        resultArray[resultArray.length - 2] + resultArray[resultArray.length -1]
      );
    } else {
      resultArray.push(parseInt(ops[i], 10));
    }
    console.log(resultArray);
  }
  const result = resultArray.reduce((a, b) => a + b);
  return result;
}

console.log("sum", calPoints(["5","2", "C", "D","+"]));
console.log("sum", calPoints(["5","-2", "4", "C", "D","9","+","+"]));
console.log("sum", calPoints(["1"]));