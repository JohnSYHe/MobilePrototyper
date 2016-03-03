// CANVAS SIZING AREA - BELOW!!
/**
 * Sets the canvas size to: small.
 */
function sCanvas() {
    // Gets the canvas id from the html file and stores it in the variable 'canvas' for editing.
    var canvas = document.getElementById("myCanvas");
    // Create the canvas with these attributes.
    canvas.width = 320;
    canvas.height = 426;
}

/**
 * Sets the canvas size to: medium.
 */
function mCanvas() {
    // Gets the canvas id from the html file and stores it in the variable 'canvas' for editing.
    var canvas = document.getElementById("myCanvas");
    // Create the canvas with these attributes.
    canvas.width = 320;
    canvas.height = 470;
}

/**
 * Sets the canvas size to: large.
 */
function lCanvas() {
    // Gets the canvas id from the html file and stores it in the variable 'canvas' for editing.
    var canvas = document.getElementById("myCanvas");
    // Create the canvas with these attributes.
    canvas.width = 480;
    canvas.height = 640;
}
// CANVAS SIZING AREA - ABOVE!!

var canvas, context;

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
	mouseController(canvas, context);
}

// Global Mouse Positions
var xPosition = 0;
var yPosition = 0;

//Global variable for which widget is selected. This should be changed to which button
//has been selected so that it can be used for other methods.
var widgetSelected = null;

// Array for all the objects.
var objectArray = [];

var objectCounter = 0;

/**
 * Controller for the mouse events.
 * @param canvas
 */
function mouseController(canvas, context) {
	
	// Event Listeners for the mouse.
	canvas.addEventListener("mousemove", positionManager);
	canvas.addEventListener("mouseout", hideCoordinates);
	canvas.addEventListener("click", widgetController);
	
    /**
     *Gets the mouse position.
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
	
	/*
	 * @param event Event listener for the mouse and for it to work with Firefox.
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
}

/**
 * Gets the value of the widget selected on the sidebar.
 */
function setDrawingMode(btnValue) {
    widgetSelected = btnValue;
}

/**
 * Draw method. Currently set to only call the draw square method.
 */
function widgetController() {
	
    if (widgetSelected == 0) {
        drawSquare(xPosition, yPosition);
    }
    else if (widgetSelected == 1) {
        drawCircle(xPosition, yPosition)
    }
    else if (widgetSelected == 2) {
        drawText(xPosition, yPosition)
    }
	
	/**
	 * Draws a square onto the canvas when it is called.
	 * This can be further improved to be a textbox or a button.
	 */
	function drawSquare() {
		var squareWidth = 100;
		var squareLength = 100;
		
		//context.fillStyle = blue;
		context.fillRect(xPosition, yPosition, squareWidth, squareLength);
		
		document.getElementById("test").innerHTML = "Testing: " + xPosition + ", " 
			+ yPosition + ", " + squareWidth + ", " + squareLength + ".";
		
		// Adds the square object into the array.
		objectArray.push({xPos: xPosition, yPos: yPosition, width: squareWidth, length: squareLength});
		
		console.log(objectArray[objectCounter]);
		// increments the counter up so it displays the next object values.
		objectCounter++;
		// How many elements are in the array.
		console.log("Total Squares: " + objectArray.length);
		
		console.log("What is inside the array: " + objectArray);
		
		widgetSelected = null;
	}
	
	/**
	 * Draws a circle onto the canvas when it is called.
	 * This can be useful for something.
	 */
	function drawCircle() {
		var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext("2d");
		context.beginPath();
		context.arc(xPosition, yPosition, 50, 0, 2 * Math.PI);
		context.stroke();
		
		widgetSelected = null;
	}

	/**
	 * Draws the text that the user inputs
	 * @param x X-Position of the mouse to be placed on the canvas.
	 * @param y Y-Positition of the mouse to be placed on the canvas.
	*/
	function drawText(x,y) {
		var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext("2d");

		var input = prompt("Enter text below", "Here...");

		context.font = "20px Arial";
		context.fillText(input, xPosition, yPosition);
		
		widgetSelected = null;
	}
}

	
/**
 * Clears the canvas board.
 */
function clearCanvas() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);
}
