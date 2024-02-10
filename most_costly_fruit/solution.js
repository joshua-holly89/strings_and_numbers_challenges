function solution(arr) {
  console.log(arr);
  let highestValue = -1;
  let indexwithHighestValue = -1;
  for (i = 0; i < arr.length; i++) {
    const fruit = arr[i];
    let value = -1;
    value = parseInt(fruit, 10);
    if (isNaN(value)) {
      value = fruit.length;
    }
    console.log("value of index",i +":", value);
    if (value > highestValue) {
      highestValue = value;
      indexwithHighestValue = i;
    }
  }
  return arr[indexwithHighestValue];
}

console.log(solution(["apple3", "banana", "8", "3"]));
