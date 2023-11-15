var solution = function (k) {
  const charsOfString = getCharsOfString(k);
  const groups = [];
  let i = 0;

  while (i < charsOfString.length) {
    i = checkAndAddLargeGroup(groups, charsOfString, i);
    i++;
  }
  return groups;
};

function checkIfItsALargeGroup(char1, char2, char3) {
  return char1 === char2 && char2 === char3;
}

function checkAndAddLargeGroup(groups, charsOfString, start) {
  let i = countStreak(start, charsOfString);
  if (isLargeGroup(i, start)) {
    groups.push([start, i]);
  }
  return i;
}

function countStreak(start, charsOfString) {
    let i = start;
    while (isNextLetterSame(charsOfString, i)) {
        i++;
    }
    return i;
}

function isNextLetterSame(charsOfString, i) {
    return charsOfString[i] === charsOfString[i + 1];
}

function isLargeGroup(i, start) {
    return i - start >= 2;
}

function getCharsOfString(string) {
  return string.split("");
}

console.log(solution("abcdddeeeeaabbbcd"));
