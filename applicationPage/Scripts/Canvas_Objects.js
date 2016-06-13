/**
* Create the Square object from the prototype.
*/
function drawSquare() {
  createSquare.prototype.draw = function(context) {
    if(this.selected == true){
      context.strokeStyle = 'red';
      context.lineWidth = 2;
      context.beginPath();
      context.rect(this.x - 3, this.y - 3, this.width + 6, this.height + 6);
      context.stroke();
    }
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.beginPath();
    context.rect(this.x, this.y, this.width, this.height);
    context.stroke();
  }
  createdWidget = new createSquare();
}

/**
* Create the Circle object from the prototype.
*/
function drawCircle() {
  createCircle.prototype.draw = function(context) {
    if(this.selected == true){
      context.strokeStyle = "red";
      context.lineWidth = 2;
      context.beginPath();
      context.arc(this.x + objOffset, this.y + objOffset, this.rad+3, 0, 2 * Math.PI);
      context.stroke();
    }
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.beginPath();
    context.arc(this.x + objOffset, this.y + objOffset, this.rad, 0, 2 * Math.PI);
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
  this.objID = 'Square';
  this.name = name;
  this.selected = false;
  this.x = xPosition - objOffset;
  this.y = yPosition - objOffset;
  this.width = 100;
  this.height = 100;
  this.comment = null;
}

/**
* Creates a 'Circle' prototype for the 'Circle' object.
*/
function createCircle() {
  this.objID = 'Circle';
  this.name = name;
  this.selected = false;
  this.x = xPosition - objOffset;
  this.y = yPosition - objOffset;
  this.rad = 50; //Default size 50? needs reconsidering when changing size is implemented
  this.width = 100;
  this.height = 100;
  this.comment = null;
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
