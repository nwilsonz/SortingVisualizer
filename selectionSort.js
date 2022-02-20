//Written by Nick Wilson - Started 2/18/22
//The objective of this program is to visualize the selection sort algorithm.

//This is the Selection Sort function, which implements the algorithm.
//This algorithm begins with the first element and proceeds to scan the array to find the smallest element in order to exchange it with the first element. This puts the smallest element in its final sorted position.
//From there, we repeat the process by starting with the second element, and so on.
//After n-1 passes, the array is sorted.
//Time complexity: Selection Sort has a O(n^2) on all inputs. 
//Color scheme:
//      Red: Represents the index of the value to be exchanged with the smaller number found (if there is one)
//      White (to the left of the red bar): Represents values in their sorted position after being exchanged.

async function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                stateOfBars[i] = 0;
                minIndex = j;
            }
        }
        await swap(arr, minIndex, i);
        stateOfBars[i] = -1;
    }
}

//This is the swap function.
//Instead of using temporary variables to swap the values at the two indices, I have used the ES6 destructuring assignment expression which completes the same task.

async function swap(arr, i, j) {
    await sleep(50);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

//This is the sleep function, which basically says "Wait and don't do anything for a set amount of time". This is useful because we can utilize it in the swap function in order to slow down the rate at which the swaps occur.
//This makes the visualization of the sorting much easier to see.

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }