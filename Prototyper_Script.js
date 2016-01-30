/**
 * Created by John He on 11/12/2015.
 */



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

/**
 * Initialise everything for canvas and context.
 */
function init() {

    var canvas, context;

    var selection = 0;

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

/**
 * Controller for the mouse events.
 * @param canvas
 */
function mouseController(canvas, context) {

    // Mouse event listeners for the canvas.
    canvas.addEventListener("mousemove", getMousePosition);
    canvas.addEventListener("mouseout", hideCoordinates);
    canvas.addEventListener("click", drawWidget);

    // Global mouse position variables.
    var xPosition = 0;
    var yPosition = 6;

    /**
     * Gets the mouse position and displays it visually in the
     * @param event
     * @returns {boolean}
     */
    function getMousePosition(event) {

        // Gets the event coordinates and stores them into private variables for usage.
        var x = event.x;
        var y = event.y;
        // Offset it to the canvas.
        x -= canvas.offsetLeft;
        y -= canvas.offsetTop;

        var mouseCoordinates = "Coordinates: (" + x + "," + y + ")";
        document.getElementById("mCoordinates").innerHTML = mouseCoordinates;

        xPosition = x;
        yPosition = y;
    }

    /**
     * Hides the mouse position when it leaves the canvas.
     */
    function hideCoordinates() {
        document.getElementById("mCoordinates").innerHTML = "";
    }


    /**
     * For now, I have 'brute forced' corrections to the co-ordinates.
     * This will need to be rectified once the root of the problem is solved
     * -Antonie
     */
    function drawWidget() {
        if(selection == 1)
        context.fillRect(xPosition - 344, yPosition - 72, 150, 100);
        else if(selection == 2){
            context.beginPath();
            context.arc(xPosition - 344, yPosition - 72,50,0,2*Math.PI);
            context.stroke();
        }
        else if(selection == 3){
                var input = prompt("Enter text below", "Here...");

    context.font = "20px Arial";
    context.fillText(input, xPosition - 344, yPosition - 72)
        }

    }

}

/**
 * Draws a square onto the canvas when it is called.
 * This can be further improved to be a textbox or a button.
 */
function drawSquare() {
    /**
     *   Temp commented out
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    //context.fillStyle = blue;
    context.fillRect(200, 20, 150, 100);
    // Parameters explanation for the rectangle: (X-Position, Y-Position, width, height)
     */
    selection = 1;
}


/**
 * Draws a circle onto the canvas when it is called.
 * This can be useful for something.
 */
function drawCircle() {
/**
 *   Temp commented out
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(100,75,50,0,2*Math.PI);
    context.stroke();
 */
    selection = 2;

}

///**
// * Messing around, trying to get a function that'll prompt the user to input some text.
// * The text will then be added to the canvas *
// */
function drawText() {

    selection = 3;
}
//
//    var canvas = document.getElementById("myCanvas");
//    var context = canvas.getContext("2d");
//    var input = prompt("Enter text below", "Here...");
//
//    context.font = "20px Arial";
//    context.fillText(input, 500, 50)
//}
//
//    function createButton() {
//
//        var canvas = document.getElementById("myCanvas");
//        var context = canvas.getContext("2d");
//        var x = document.createElement("BUTTON");
//        var t = document.createTextNode("Click me");
//        x.appendChild(t);
//
//    }
//
//        context.appendChild(button, 500, 50);
//
//    }
//}


