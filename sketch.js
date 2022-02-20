//Written by Nick Wilson - Started 2/18/22

//First, I will need some variables.
//'values' will hold an array of various random numbers.
//stateOfBars will keep track of what color we want a specific bar to be.
//widthOfBars will control the width of each individual bar that is displayed. 

let values = [];
let stateOfBars = [];
let widthOfBars = 10;

//Second, these are the buttons that the user will be able to click. 

let qsButton;   //Quick Sort
let bsButton;   //Bubble Sort
let ssButton;   //Selection Sort
let isButton;   //Insertion Sort
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

  bsButton = createButton('Begin BubbleSort');
  bsButton.position(660, 850);
  bsButton.mousePressed(function() {
    bubbleSort(values)
  });

  ssButton = createButton('Begin Selection Sort');
  ssButton.position(500, 850);
  ssButton.mousePressed(function() {
    selectionSort(values)
  });

  isButton = createButton('Begin Insertion Sort');
  isButton.position(340, 850);
  isButton.mousePressed(function() {
    insertionSort(values)
  });

  resetButton = createButton('Restart');
  resetButton.position(930, 850);
  resetButton.mousePressed(setup);

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