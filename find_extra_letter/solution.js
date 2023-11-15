function findExtraLetter(s1,s2){
 const sortedChars1 = getCharsOfString(s1).sort();
 const sortedChars2 = getCharsOfString(s2).sort();

 for (let index = 0; index < sortedChars2.length; index++) {
    const char1 = sortedChars1[index];
    const char2 = sortedChars2[index];
    if(char1 !== char2){
        return char2;
    }
 }
 "sdafsd".substring(5);
}

function getCharsOfString(s){
    return s.split("");
}

const extraLetter = findExtraLetter("abcd", "deabc");

console.log(extraLetter);