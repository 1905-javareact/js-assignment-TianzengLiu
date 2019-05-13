/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < numArray.length; i++) {
            if (numArray[i] && numArray[i + 1] && numArray[i] > numArray[i + 1]) {
                swap(numArray, i, i + 1);
                swapped = true;
            }
        }
    } while(swapped);

    return numArray;
}

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

//Test
let array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log(bubbleSort(array))