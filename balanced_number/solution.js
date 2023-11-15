function findBalancedNumber(initialNumber) {
  for (let index = Math.floor(initialNumber / 2); index < initialNumber; index++) {
    if (isBalanced(index, initialNumber)) {
      return index;
    }
  }

  return -1;
}

function isBalanced(candidate, initialNumber) {
  return (
    calculateSumFromAtoB(0, candidate) === calculateSumFromAtoB(candidate, initialNumber)
  );
}

function calculateSumFromAtoB(a, b) {
  const n = Math.abs(b - a) + 1; // count of integers in sequence
  const sum = ((a + b) * n) / 2; // Gauss sum formula

  return sum;
}

for (let index = 0; index <10000; index++) {
  const balancedNumber = findBalancedNumber(index);
  if(balancedNumber !== -1){
      console.log(index, balancedNumber);
  }
}
