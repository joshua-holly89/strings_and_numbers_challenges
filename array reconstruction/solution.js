function solution(main, sub) {
    console.log("input", main, sub);
    for (let i = 0; i < main.length; i++) {
    const mainElement = main[i];
    let matchingSubElementFound = false;
    for (let j = 0; j < sub.length; j++) {
      subElement = sub[j].reduce((a, b) =>
        parseInt(a.toString() + b.toString(), 10)
      );
      if (mainElement === subElement) {
        matchingSubElementFound = true;
      }
    }
    if (!matchingSubElementFound) {
      return false;
    }
  }
  return true;
}

console.log(solution([15,88], [[88], [15]]));
console.log(solution([49,18,16], [[16,18,49]]));