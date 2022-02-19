//Written by Nick Wilson - Started 2/18/22
//Inspired/Influenced by The Coding Train on YouTube.
//The objective of this program is to visualize the QuickSort algorithm.

//First, I will need some variables.
//'values' will hold an array of various random numbers.
//stateOfBars will keep track of what color we want a specific bar to be.
//widthOfBars will control the width of each individual bar that is displayed. Test.

let values = [];
let stateOfBars = [];
let widthOfBars = 10;

//Second, these are the buttons that the user will be able to click. 
//One is for beginning the QuickSort algorithm, the other is for resetting the simulation.

let qsButton;
let resetButton;

//This is a built in function of p5.js which sets up the environment. Here, I will initialize the array of values and give the buttons functionality.

function setup() {
  createCanvas(1680, 814);
  values = new Array(floor(width/widthOfBars));
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
    stateOfBars[i] = -1;
  }
  qsButton = createButton('Begin Quicksort');
  qsButton.position(800,850);
  qsButton.mousePressed(function(){
    quickSort(values, 0, values.length - 1)
  });
  
  resetButton = createButton('Restart');
  resetButton.position(930, 850);
  resetButton.mousePressed(setup);

}

//This is the QuickSort function. It will recursively call itself in order to sort the data by dividing and conquering the resulting subarrays. 
//Since it is asynchronous, the recursive calls will occur simultaneously.
//The 'arr' argument represents an array to be passed to the function. The arguments 'l' and 'r' stand for left (first element in the array) and right (last element in the array). 
//This function awaits a partition function which will return the index of the pivot after it is in its final position for that iteration. This allows the recursive calls to work on the subarrays to the left and right of the pivot independently.
//This recursion will continue until the full array is sorted.
//This QuickSort algorithm has an average time complexity of O(nlogn) - The worst case is O(n^2).

async function quickSort(arr, l, r) {
  if (l >= r) return;
  let pivotIndex = await partition(arr, l, r);
  stateOfBars[pivotIndex] = -1;

  await Promise.all([
    quickSort(arr, l, pivotIndex - 1),
    quickSort(arr, pivotIndex + 1, r)
  ]);
}

//This is the partition function, which will arrange the array's elements such that all elements to the left of the pivot are less than or equal to the pivot, and all elements to the right of the pivot are greater than or equal the pivot.
//The function will then return the index of the pivot at the end of the sorting.
//Note: There are various arbitrary ways to choose a pivot. In my partition function, I chose the last element as the pivot; however, one could easily choose the first element or use a method such as median-of-three.

async function partition(arr, l, r) {
  for (let i = 0; i < r; i++) {
    stateOfBars[i] = 1;
  }

  let pivotIndex = l;
  let pivotValue = arr[r];

  for (let i = l; i < r; i++) {
    if (arr[i] < pivotValue) {
      await swap(arr, i, pivotIndex);
      stateOfBars[pivotIndex] = -1;
      pivotIndex++;
      stateOfBars[pivotIndex] = 0;
    }
  }

  await swap(arr, pivotIndex, r);

  for (let i = 0; i < r; i++) {
    if (i != pivotIndex) stateOfBars[i] = -1;
  }

  return pivotIndex;
}

//This is the draw function, which is another function that is built in with the p5.js library.
//Unike the setup() function, which is only executed once, the draw() function continously executes.
//This function provides us with a background color for the page, the coloring of the bars based on what state they are in, and it also draws the bars as rectangles with the desired dimensions.

function draw() {
  background(51);

  for (let i = 0; i < values.length; i++) {
    stroke(0);
    
    if (stateOfBars[i] == 0) {
      fill('#FF5252');
    } else if (stateOfBars[i] == 1) {
      fill('#00d1d1');
    } else {
      fill(255);
    }

    rect(i * widthOfBars, height - values[i], widthOfBars, values[i]);
  }
}

//This is the swap function, which waits a certain time interval before executing. I have also made it asynchronous so we can await it in the partition function.
//Instead of using temporary variables to swap the values at the two indices, I have used the ES6 destructuring assignment expression which completes the same task.

async function swap(arr, i, j) {
  await sleep(20);
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

//This is the sleep function, which basically says "Wait and don't do anything for a set amount of time". This is useful because we can utilize it in the swap function in order to slow down the rate at which the swaps occur.
//This makes the visualization of the sorting much easier to see.

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}