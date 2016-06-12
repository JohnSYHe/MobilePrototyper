var canvas, context;
// Global Mouse Positions
var xPosition = 0;
var yPosition = 0;
// Mousedown Position
var xStart = 0;
var yStart = 0;
// Mouseup Position
var xEnd = 0;
var yEnd = 0;
// Last mouse Position
var xPrev = 0;
var yPrev = 0;
// Offset for objects.
var objOffset = 50;
// Global variable for which widget is selected for drawing.
var widgetSelected = null;
// Global variable for which widget is selected for manipulation.
var activeWidget = null;
// Array to store the widgets.
var widgetArray = [];
// Boolean to confirm the visibility of widgets.
var hideWidgets = false;
// Counter for the insertedWidget(); function
var insertedNum = 0;

var createdWidget;
// For text input.
var input = "";
// For movement of widgets, free-draw and drawing lines.
var dragging = false;
var currentlyFreeDrawing = false;
var currentlyDrawingLine = false;

/**
* Initialise everything for canvas and context.
*/
function init() {
  // Find the canvas element.
  canvas = document.getElementById('myCanvas');
  if (!canvas) {
    alert('Error: I cannot find the canvas element!');
    return;
  }
  // Find the context of the canvas.
  if (!canvas.getContext) {
    alert('Error: no canvas.getContext!');
    return;
  }
  // Get the 2D canvas context.
  context = canvas.getContext('2d');
  if (!context) {
    alert('Error: failed to getContext!');
    return;
  }
  // Starts the mouse controller to enable the event listeners for user interaction.
  mainController();
}

/**
* Controller for the mouse events.
* @param canvas
*/
function mainController() {
  document.getElementById("widgIDInput").addEventListener("input", widgetName);
  document.getElementById("widgComment").addEventListener("input", widgetComment);
  document.getElementById("widgHeightInput").addEventListener("input", widgeHeight);
  document.getElementById("widgWidthInput").addEventListener("input", widgetWidth);
  document.getElementById("widgXPosInput").addEventListener("input", widgetXPos);
  document.getElementById("widgYPosInput").addEventListener("input", widgetYPos);

  // Event Listeners for the mouse.
  canvas.addEventListener("mousemove", positionManager);
  canvas.addEventListener("mouseout", hideCoordinates);
  canvas.addEventListener("mousedown", mouseDown);
  canvas.addEventListener("mouseup", mouseUp);
}

/**
* Gets the mouse position.
* @param canvas
* @returns x and y coordinates. Use (VARIABLE NAME).x and (VARIABLE NAME).y
*/
function getMousePosition(canvas, event) {
  var rect = canvas.getBoundingClientRect();

  return {
    x: Math.round((event.clientX-rect.left)/(rect.right-rect.left)*canvas.width),
    y: Math.round((event.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height)
  };
}

/**
* Manages the position of the mouse.
* @param event
*/
function positionManager(event) {

  var mousePos = getMousePosition(canvas, event);
  // Formats a message that shows the coordinates.
  var mouseCoordinates = 'Coordinates: ' + mousePos.x + ', ' + mousePos.y;

  xPosition = mousePos.x;
  yPosition = mousePos.y;

  // Sends the message to be displayed.
  displayCoordinates(mouseCoordinates);

  moveWidget();

  if(currentlyFreeDrawing == true){
    context.beginPath();
    context.moveTo(xPrev, yPrev);
    context.lineTo(xPosition, yPosition);
    context.strokeStyle = "black";
    context.lineWidth = 1;
    context.stroke();
    context.closePath();
  } else if(currentlyDrawingLine == true){
    moveDrawWidgetArray();
    context.beginPath();
    context.moveTo(xStart, yStart);
    context.lineTo(xPosition, yPosition);
    context.strokeStyle = "black";
    context.lineWidth = 1;
    context.stroke();
  }

  xPrev = xPosition;
  yPrev = yPosition;
}

/**
* Sets and displays the co-ordinates below the canvas.
* @param coordinates = the co-ords to be displayed
*/
function displayCoordinates(coordinates){
  document.getElementById("mCoordinates").innerHTML = coordinates;
}

/**
* Hides the mouse position when it leaves the canvas.
*/
function hideCoordinates() {
  document.getElementById("mCoordinates").innerHTML = "";
}

/**
* Receives user onClick and selects the widget to be drawn.
*/
function setDrawingMode(btnValue) {
  widgetSelected = btnValue;
  console.log(btnValue + " has been selected!");

  // When a widget is selected, disable the active widget and movement.
  activeWidget = null;
  dragging = false;
  setAllWidgetsFalse();
  drawWidgetArray();
}

/**
* Prints inserted widget into console.
*/
function insertedWidget() {
  console.log(widgetArray[insertedNum]);
  insertedNum++;
}

function freeDraw() {
  currentlyFreeDrawing = true;
}

/**
* Function for when the mouse button is held down.
*/
function mouseDown(event) {
  xStart = xPosition;
  yStart = yPosition;

  if (widgetSelected == null) {
    clickedWidget();
  } else if (widgetSelected == "Square") {
    drawSquare();
  } else if (widgetSelected == "Circle") {
    drawCircle();
  } else if (widgetSelected == "Freedraw") {
    freeDraw();
  }	else if (widgetSelected == "Line") {
    currentlyDrawingLine = true;
  }
  // Sets dragging to true when mouse is down.
  dragging = true;
}

/**
* Function for when the mouse button is released.
*/
function mouseUp(event) {
  // Stores mouse up positions from where it was released.
  xEnd = xPosition;
  yEnd = yPosition;
  // Sets dragging to false when mouse button is released.
  dragging = false;
  currentlyFreeDrawing = false;
  currentlyDrawingLine = false;

  //moveDrawWidgetArray();
  if (widgetSelected == "Line") {
    drawLineWidget();
  } else if (widgetSelected == "Text") {
    drawText();
  }
  // Pushes the widget into the array.
  if (createdWidget != null ) {
    drawWidget();
  }
}

/**
* Function to move the widget when selected.
*/
function moveWidget() {
  if (dragging == true && activeWidget != null) {
    activeWidget.x = xPosition - objOffset;
    activeWidget.y = yPosition - objOffset;

    moveDrawWidgetArray();
    createWidgetSettings(activeWidget);
  }
}

/**
* Function for click detection. For selection/movement.
*/
function clickedWidget() {
  var widgetFound = false;

  for (i = 0; i < widgetArray.length; i++) {
    if (xPosition > widgetArray[i].x && xPosition < (widgetArray[i].x + widgetArray[i].width)) {
      if (yPosition > widgetArray[i].y && yPosition < (widgetArray[i].y + widgetArray[i].height)) {

        console.log("Clicked: " + widgetArray[i].name);
        createWidgetSettings(widgetArray[i]);
        for (j = 0; j < widgetArray.length; j++){
          widgetArray[j].selected = false;
        }
        activeWidget = widgetArray[i];
        widgetArray[i].selected = true;

        widgetArray.splice(i, 1);
        widgetArray.unshift(activeWidget);

        moveDrawWidgetArray();
        i = widgetArray.length;
        widgetFound = true;

      }
    }
  }

  if (widgetFound == false){
    console.log("Nothing");
    for (j = 0; j < widgetArray.length; j++){
      widgetArray[j].selected = false;
    }
    moveDrawWidgetArray();

    activeWidget = null;
    // Hides the widget settings when a widget is deselected.
    document.getElementById("widgetSettings").style.visibility = 'hidden';
  }
}

/**
*Code to remove widgets from the array.
*/
//Using splice creates a new array, might need to consider this a memory leka if its constantly remembering
//all the arrays we have been creating.
function deleteWidget() {
  for (i = 0; i < widgetArray.length; i++){
    if(widgetArray[i].selected == true){
      widgetArray.splice(i, 1);
      drawWidgetArray();
      i = widgetArray.length;
    }
  }
  updateCommentSideBar();
}

/**
* Clears the array containing all the widgets and resets it for further use.
* Useful for creating a new canvas.
*/
function clearWidgetArray(){
  // Set the array to null.
  widgetArray = null;
  // Make array undefined.
  widgetArray = [];

  insertedNum = 0;
}

/**
* Draws all the widgets in the array.
*/
function drawWidgetArray(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  // Loop that draws the objects in the array one by one.
  for (i = 0; i < widgetArray.length; i++) {
    if (i == 0) {
      console.log("Showing widgets... " + widgetArray.length + " found!");
    }
    widgetArray[i].draw(context);
    console.log("->Re-drew widget: " + i + " " + widgetArray[i].name);
  }
  // Lets developer know that nothing is in the array.
  if (widgetArray.length == 0) {
    console.log("There's nothing to show!");
  }
}

/**
* Redraws the objects when moving them.
*/
function moveDrawWidgetArray() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (i = 0; i < widgetArray.length; i++) {
    widgetArray[i].draw(context);
  }
}

// Temp fuction to loop through the array setting all widget's 'selected' to false
function setAllWidgetsFalse(){
  for (i = 0; i < widgetArray.length; i++) {
    widgetArray[i].selected = false;
  }
}
