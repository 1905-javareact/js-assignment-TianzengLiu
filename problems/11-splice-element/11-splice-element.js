/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    let newArray = new Array(someArr.length - 1);
    for (let i = 0, j =0; i < someArr.length; i++) {
    //   newArray[i] = someArr[i];
        if (i === index) {
           continue;
        }
        newArray[j++] = someArr[i];
}
    return newArray;
 
}


let someArr = new Array;
someArr[0] = "1";
someArr[1] = "2";
someArr[2] = "3";
someArr[3] = "4";
someArr[4] = "5";
console.log(spliceElement(someArr, 2));