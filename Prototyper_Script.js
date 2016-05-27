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

// Global variable for which widget is selected.
var widgetSelected = null;

// Array to store the widgets.
var widgetArray = [];

var hideWidgets = false;
// Counter for the insertedWidget(); function
var insertedNum = 0;

var createdWidget;
// For text input.
var input = "";
// For movement of widgets and free-draw.
var dragging = false;

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
    mouseController();
}

/**
 * Controller for the mouse events.
 * @param canvas
 */
function mouseController() {
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
 * 
 * @param event 
 */
function positionManager(event) {
	var mousePos = getMousePosition(canvas, event);
	// Formats a message that shows the coordinates.
	var mouseCoordinates = 'Coordinates: ' + mousePos.x + ',' + mousePos.y;
	
	xPosition = mousePos.x;
	yPosition = mousePos.y;
	
	// Sends the message to be displayed.
	displayCoordinates(mouseCoordinates);
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
}

/**
 * Prints inserted widget into console.
 */
function insertedWidget() {
	console.log(widgetArray[insertedNum]);
	insertedNum++;
}

/**
 * Prints the array into console.
 */
function printArray() {
	if (widgetArray.length == 0) {
		console.log("There doesn't seem to be anything here....");
	} else {
		for (i = 0; i < widgetArray.length; i++) {
			//Test code to check whats in the widgetArray array.
			for(i = 0; i < widgetArray.length; i++){
				// Displays the all the widgets in the array.
				console.log(widgetArray[i]);
			}
		}
	}
	console.log("Total widgets in array: " + widgetArray.length);
}

/**
 * Function for when the mouse button is held down.
 */
function mouseDown() {
	
	xStart = xPosition;
	yStart = yPosition;
	
	if (widgetSelected == null) {
		console.log("No widget selected!");
		
		clickedWidget();
	} else if (widgetSelected == "Square") {
		drawSquare();
	} else if (widgetSelected == "Circle") {
		drawCircle();
	}

}

/**
 * Function for click detection. For selection/movement
 */
function clickedWidget() {
	
	for (i = 0; i < widgetArray.length; i++) {
		if (xPosition > widgetArray[i].x 
		&& xPosition < (widgetArray[i].x + widgetArray[i].width)) {
			if (yPosition > widgetArray[i].y 
				&& yPosition < (widgetArray[i].y + widgetArray[i].height)) {
					console.log("clicked");
			}
		}
	}
}


/**
 * Function for when the mouse button is released.
 */
function mouseUp() {
	
	xEnd = xPosition;
	yEnd = yPosition;
	
	if (widgetSelected == "Line") {
		drawLineWidget();
	} else if (widgetSelected == "Text") {
		drawText();
	}
	
		// Pushes the widget into the array.
	if (createdWidget != null) {
		drawWidget();
	}
}

// function createWidgetSettings(passedInWidget) {
// 	
// 	document.getElementById('widgID').value = passedInWidget.name;
// }

/**
 * Create the Square object from the prototype.
 */
function drawSquare() {
	createSquare.prototype.draw = function(context) {
		context.fillRect(this.x, this.y, this.width, this.height);
		// Parameters explanation for the rectangle: (X-Position, Y-Position, width, height			
	}
	createdWidget = new createSquare();
}

/**
 * Create the Circle object from the prototype.
 */
function drawCircle() {
	createCircle.prototype.draw = function(context) {
		context.beginPath();
		context.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
		context.stroke();
		// Parameters explanation for the circle: (x-position, y-position, radius, starting angle, ending angle)
	}
	 createdWidget = new createCircle();
}



/**
 * Create the Text object from the prototype.
 */
function drawText() {
	createdWidget = new createText();
	input = prompt("Enter text below", "Here...");
	createdWidget.textField = input;
	
	createText.prototype.draw = function(context) {
		context.font = "20px Arial";
		context.fillText(this.textField, this.x, this.y);
	}
}

/**
 * Create the Line object from the prototype.
 */
function drawLineWidget() {
	createdWidget = new createLine();
	createdWidget.xStart = xStart;
	createdWidget.yStart = yStart;
	
	createdWidget.xEnd = xEnd;
	createdWidget.yEnd = yEnd;
	
	createLine.prototype.draw = function(context) {		
		context.beginPath();
		context.moveTo(this.xStart, this.yStart);
		context.lineTo(this.xEnd, this.yEnd);
		context.stroke();
	}
}

/**
 * Draw the widget and push it into the array.
 */
function drawWidget() {
	createdWidget.draw(context);
	createdWidget.name = "Widget " + (widgetArray.length + 1);
	// Push/add the widget into the array.
	widgetArray.push(createdWidget);
	// Prints inserted widget into console.
	insertedWidget();
	// Disable multiple widget usage from 1 click.
	widgetSelected = null;
	createdWidget = null;
}

// _________________________ PROTOTYPE'S BELOW!!

/**
 * Creates a 'Circle' prototype for the 'Square' object.
 */
function createSquare() {
	this.name = name;
	this.x = xPosition;
	this.y = yPosition;
	this.width = 100;
	this.height = 100;
}

/**
 * Creates a 'Circle' prototype for the 'Circle' object.
 */
function createCircle() {
	this.name = name;
	this.x = xPosition;
	this.y = yPosition;
	this.rad = 50; //Default size 50? needs reconsidering when changing size is implemented
}

/**
 * Creates a 'Text' prototype for the 'Text' object.
 */
function createText() {
	this.name = name;
	this.textField = input;
	this.x = xPosition;
	this.y = yPosition;
}

/**
 * Creates a 'Line' prototype for the 'Line' object.
 */
function createLine(){
	this.name = name;
	this.xStart = 0;
	this.yStart = 0;
	this.xEnd = 20;
	this.yEnd = 20;
}

// _________________________ PROTOTYPE'S ABOVE!!

/**
 * Clears the canvas board.
 */
function clearCanvas() {
	// Remove everything drawn on the canvas.
    context.clearRect(0, 0, canvas.width, canvas.height);
	// Clears out console.
	console.clear();
	// Informs developer how much objects were deleted.
	console.log("Deleted: " + (widgetArray.length) + " widgets!");
	// Call clearWidgetArray() to remove everything from the array when clearing canvas.
	clearWidgetArray();
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
 * Hides all the widgets in the array.
 */
function hideWidgetArray() {

	
	if (widgetArray.length == 0) {
		console.log("There's nothing to hide!");
	} else {
		// Cleans out canvas.
		context.clearRect(0, 0, canvas.width, canvas.height);
		// Logs how many widgets were hidden.
		console.log("Hiding widgets... " + widgetArray.length + " hidden!");
	}
}



// _________________________ CANVAS SIZING AREA - BELOW!!

/**
 * Sets the canvas size to: small.
 */
function sCanvas() {
    // Create the canvas with these attributes.
    canvas.width = 320;
    canvas.height = 426;
}

/**
 * Sets the canvas size to: medium.
 */
function mCanvas() {
    // Create the canvas with these attributes.
    canvas.width = 320;
    canvas.height = 470;
}

/**
 * Sets the canvas size to: large.
 */
function lCanvas() {
    // Create the canvas with these attributes.
    canvas.width = 480;
    canvas.height = 640;
}

// _________________________ CANVAS SIZING AREA - ABOVE!!
