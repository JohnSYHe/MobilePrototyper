// CANVAS SIZING AREA - BELOW!!

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
// Global variable for which widget is selected.
var widgetSelection = null;
// Array to store the widgets.
var widgetArray = [];
var counter = 1;

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
}

/**
 * Receives user onClick and selects the widget to be drawn.
 */
function setDrawingMode(btnValue) {
    widgetSelection = btnValue;
}

/**
 * Widget Controller Method.
 */
function widgetController() {

	var createdWidget;
	
	if (widgetSelection == null) {
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
		
	} else if (widgetSelection == 0) {
		createSquare.prototype.draw = function(context) {
		context.fillRect(this.x, this.y, this.width, this.height);
		// Parameters explanation for the rectangle: (X-Position, Y-Position, width, height			
		}
		 createdWidget = new createSquare();	
		
	} else if (widgetSelection == 1) {
		createCircle.prototype.draw = function(context) {
		context.beginPath();
		context.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
		context.stroke();			
		// Parameters explanation for the circle: (x-position, y-position, radius, starting angle, ending angle)
		}
		 createdWidget = new createCircle();	
		 
	} else if (widgetSelection == 2) {
	
		createdWidget = new createText();
		var input = prompt("Enter text below", "Here...");
		createdWidget.textField = input;
		
		createText.prototype.draw = function(context) {
			context.font = "20px Arial";
			context.fillText(this.textField, this.x, this.y);
		}

		
	} else if (widgetSelection == 3) {	
	
		createdWidget = new createLine();		
		createdWidget.xStart = xPosition;
		createdWidget.yStart = yPosition;
		
		function endLine(){			
			createdWidget.xEnd = xPosition;
			createdWidget.yEnd = yPosition;
			canvas.removeEventListener('click', endLine);			
		}
		
		canvas.addEventListener('click', endLine);
			
		createLine.prototype.draw = function(context) {		
			context.beginPath();
			context.moveTo(this.xStart, this.yStart);
			context.lineTo(this.xEnd, this.yEnd);
			context.stroke();
		}
		
	}

		else if (widgetSelection == 7){
		//Select widget code
		//Code to loop through the array and check all objects and if any co-ordinates match, if they do
		//set that objects 'select' field to true.
		//LOTS OF CODE HERE
		//Each object has an xPos and a yPos as well as a length. if we go xpos + length as well as ypos + length when we loop
		//through the array, if any objects area matches the mouse position, set its 'selected' field to true.
		//for(i = 0, i <= widgetarray.length, i++)
			//if (mouseposition == shape area <somehow>){
				//selected = true;
				//i = widgetarraylength
			//}
			//i++;
			
		
		//If object is selected, the widget settings form should receive all values from the selected object
		//Changing any values then updates the object and puts it back into the array
		}
				
	
	

	if (createdWidget != null) {	
		for (i = 0; i <= widgetArray.length; i++){
			createdWidget.draw(context);			
			createdWidget.name = "Button " + counter;
			counter++;
			widgetArray.push(createdWidget);
		
			//Test code to check what's in the widgetArray array.
			for(i = 0; i < widgetArray.length; i++){
				// Displays the all the widgets in the array.
				console.log(widgetArray[i]);
			}
			// Developer - Displays the amount of objects in the array.
			console.log("Total Objects in Array:" + widgetArray.length);	
			widgetSelection = null;
		}
	}
	
	/**
	 * Creates a square object with multiple parameters.
	 */
	function createSquare() {
		this.name = name || 'undefined';
		this.x = xPosition || 0;
		this.y = yPosition || 0;
		this.width = 100 || 200;
		this.height = 100 || 200;
	}

	/**
	 * Creates a circle object with multiple parameters.
	 */
	function createCircle() {
		this.name = name || 'undefined';
		this.x = xPosition || 0;
		this.y = yPosition || 0;
		this.rad = 50 || 100; //Default size 50? needs reconsidering when changing size is implemented
	}

	/**
	 * Draws the text that the user inputs
	 * @param x X-Position of the mouse to be placed on the canvas.
	 * @param y Y-Positition of the mouse to be placed on the canvas.
	*/
	function createText() {
		
		this.name = name || 'undefined';
		this.textField = input || 'undefined';
		this.x = xPosition || 0;
		this.y = yPosition || 0;
		

	}
	
	function createLine(){
	
		this.name = name || 'undefined'
		this.xStart = 0;
		this.yStart = 0;
		this.xEnd = 20;
		this.yEnd = 20;
		
	}
	

}

/**
 * Clears the canvas board.
 */
function clearCanvas() {
	// Remove everything drawn on the canvas.
    context.clearRect(0, 0, canvas.width, canvas.height);
	// Informs developer how much objects were deleted.
	console.log("Deleted: " + (counter - 1) + " widgets!");
	// Call clearWidgetArray() to remove everything from the array when clearing canvas.
	//clearWidgetArray();
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
	// Reset counter back to 1.
	counter = 1;
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
function hideWidgets() {
	// Cleans out canvas.
	context.clearRect(0, 0, canvas.width, canvas.height);
}
