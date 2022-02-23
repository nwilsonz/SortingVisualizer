// Written by Nick Wilson - Started 2/18/22
// The objective of this program is to visualize the merge sort algorithm.
// In the end, I could not figure out how to work this algorithm in specifically to be visualized.
// I could not get it visualized because it is the only algorithm in this project that utilizes separate arrays and does not operate directly on the values array from sketch.js
// However, I will keep it in the project because I think it still shows I know how the algorithm works. If you inspect and look at the console of the project, you will see the sorted array after merge sort has been called on it.
// Merge Sort has a best/average/and worst case time complexity of O(nlogn)
// The method behind Merge Sort is merging. It is a divide-and-conquer algorithm.

// This is the main function which implements the recursive nature of merge sort by calling the merge function.
// If the array's length is 1, we know we should stop, otherwise we should recursively call merge sort on the first and second halves of the array and then merge the two with the merge function.
function mergeSort(arr) {
    const length = arr.length;

    if (length === 1) {
        return arr;
    }

    const mid = Math.floor(length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, length);

    return merge(mergeSort(left), mergeSort(right));
}

// This is the merge function, which handles a large part of the algorithm's design.
// Essentially all it is doing is merging the two subarrays and returning the sorted array.
function merge(leftArr, rightArr) {
    const results = [];

    let i = 0;
    let j = 0;

    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] < rightArr[j]) {
            results.push(leftArr[i]);
            i++;
        } else {
            results.push(rightArr[j]);
            j++;
        }
    }

    while (i < leftArr.length) {
        results.push(leftArr[i]);
        i++;
    }

    while (j < rightArr.length) {
        results.push(rightArr[j]);
        j++;
    }

    return results;
}
