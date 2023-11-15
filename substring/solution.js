function getAllSubstringsOfLengthFour(s){
    let substrings = [];
    let i = 0;
    while(i + 3 < s.length){
        substrings.push(s.substring(i, i + 4));
        i++;
    }
    return substrings;
}

const output = getAllSubstringsOfLengthFour("abcdcfc");
console.log(output);
