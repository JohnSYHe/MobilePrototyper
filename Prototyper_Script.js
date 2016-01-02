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
 * Draws a square onto the canvas when it is called.
 * This can be further improved to be a textbox or a button.
 */
function drawSquare() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    //context.fillStyle = blue;
    context.fillRect(200, 20, 150, 100);
    // Parameters explanation for the rectangle: (X-Position, Y-Position, width, height)
}


/**
 * Draws a circle onto the canvas when it is called.
 * This can be useful for something.
 */
function drawCircle() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(100,75,50,0,2*Math.PI);
    context.stroke();
}