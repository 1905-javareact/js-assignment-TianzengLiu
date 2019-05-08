/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {

    if (someStr === "" || startIndex === "" || endIndex === "") {
        throw "Incorrect input, please input a string";
    } 

    let newString = new String();
    someStr =  someStr.split("");
    newString = newString.split("");
    for (let i = startIndex, j = 0; i < endIndex; i++) {
       newString[j++] = someStr[i];
    }
    return newString;

    
}

console.log(substring("", 1, 4));