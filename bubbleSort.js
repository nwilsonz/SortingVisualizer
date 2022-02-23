//Written by Nick Wilson - Started 2/18/22
//The objective of this program is to visualize the bubble sort algorithm.


//This is the bubbleSort function which implements the algorithm.
//Bubble Sort is a very simple brute-force algorithm which repeatedly swaps two adjacent elements if they are in the wrong order.
//The method behind bubble sort is exchanging.
//For example, the first two elements are compared. If the first element is larger than the second element, they need to swap positions.
//This process continues until the array is fully sorted.
//Note: This is optimized bubble sort. A flag called 'swapped' is used to determine whether or not the loops should break.
//For example, if an adjacent pair of values are compared and do not need to be swapped, we move on to the next pair, 
//      but if those also do not need to be swapped AND the swapped flag is set to 0 (false), then we can stop here and save time, because the rest of the array is already sorted.
//Color Scheme
//      Red: Represents the value being compared to it's adjacent value to the right
//      Blue: Unsorted values
//      White: Sorted in its final place
//Bubble Sort has a worst case time complexity of O(n^2), an average case of O(n^2), and a best case of O(n)
async function bubbleSort(arr) {
    
    let end = arr.length - 1;
    for (let i = 0; i < end; i++) {
        let swapped = 0;
        for (let j = 0; j < end - i; j++) {
            if (arr[j] > arr[j + 1]) {
                stateOfBars[j] = 0;
                await swap(arr, j, j+1);
                stateOfBars[j+1] = -1;
                swapped = 1;
            }
            stateOfBars[j] = 1;
        }
        if (swapped == 0) return;
    }
}

//This is the swap function.
//Instead of using temporary variables to swap the values at the two indices, I have used the ES6 destructuring assignment expression which completes the same task.

async function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

