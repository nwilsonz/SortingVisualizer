//Written by Nick Wilson - Started 2/18/22
//The objective of this program is to visualize the insertion sort algorithm.

//This is the insertionSort function which implements the algorithm.
//Insertion sort is an intuitive algorithm. Conceptually, the array has a sorted part and an unsorted part.
//  Values from the unsorted part are selected and compared to the values to its left and ultimately get inserted into their correct position.
//The method behind insertion sort is insertion. It utilizes the decrease-by-one technique.
//Color Scheme:
//      Red: Represents the current value being looked at
//      Blue: Represents the unsorted part of the array.
//      White: Represents the sorted part of the array (Note: The sorted values may change position if necessary to introduce a new unsorted element in)
//Insertion sort has a worst case time complexity of O(n^2) and a best/average case of O(nlogn).

async function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        stateOfBars[i] = 0;
        let j = i - 1;
        for (let k = i + 1; k < arr.length; k++) {
            stateOfBars[k] = 1;
        }
        while (j >= 0 && arr[j] > current) {
            await sleep(1);
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
        stateOfBars[i] = -1;
    }
}

//This is the sleep function, which basically says "Wait and don't do anything for a set amount of time". This is useful because we can utilize it in the swap function in order to slow down the rate at which the swaps occur.
//This makes the visualization of the sorting much easier to see.

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }