function isValid(s) {
  console.log(s);
  const chars = s.split("");
  let lastOpenedBracket; //(,{,[
  for (i = 0; i <= chars.length; i++) {
    const currentChar = chars[i];
    if (currentChar === "(" || currentChar === "{" || currentChar === "[") {
      lastOpenedBracket = currentChar;
    }
    if (currentChar === ")") {
      if (lastOpenedBracket !== "(") {
        return false;
      }
    }
    if (currentChar === "]") {
      if (currentChar === "]") {
        if (lastOpenedBracket !== "[") {
          return false;
        }
      }
      if (currentChar === "}") {
        if (lastOpenedBracket !== "(") {
          return false;
        }
      }
    }
  }
  return true;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
