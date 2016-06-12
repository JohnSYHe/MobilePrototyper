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
  updateCommentSideBar();
}

function downloadCanvas() {
  // window.open(canvas.toDataURL("image/png"));

  var canvasData = canvas.toDataURL("image/png");

  var aLink = document.createElement('a');
  var evt = document.createEvent("HTMLEvents");
  evt.initEvent("click");
  aLink.download = 'image.png';
  aLink.href = canvasData;
  aLink.dispatchEvent(evt);

  // window.location = canvas.toDataURL('image/png');
  // var img    = canvas.toDataURL("image/png");
  // document.write('<img src="'+img+'"/>');

  // var dataURL = canvas.toDataURL('image/jpeg');
  // this.href = dt;
  // console.log(dataURL);
}













// _________________________ CANVAS SIZING AREA - BELOW!!

/**
* Sets the canvas size to: small.
*/
function sCanvas() {
  var warnUser = confirm("This will clear the canvas if you proceed!");

  if (warnUser == true) {
    // Create the canvas with these attributes.
    canvas.width = 320;
    canvas.height = 426;
  } else {
    // Do nothing.
  }
}

/**
* Sets the canvas size to: medium.
*/
function mCanvas() {
  var warnUser = confirm("This will clear the canvas if you proceed!");

  if (warnUser == true) {
    // Create the canvas with these attributes.
    canvas.width = 320;
    canvas.height = 470;
  } else {
    // Do nothing.
  }
}

/**
* Sets the canvas size to: large.
*/
function lCanvas() {

  var warnUser = confirm("This will clear the canvas if you proceed!");
  if (warnUser == true) {
    // Create the canvas with these attributes.
    canvas.width = 480;
    canvas.height = 640;
  } else {
    // Do nothing.
  }
}

// _________________________ CANVAS SIZING AREA - ABOVE!!
