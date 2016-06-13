/**
* The name setting of the widget.
*/
function widgetName() {
  if (activeWidget != null) {
    activeWidget.name = document.getElementById("widgIDInput").value;
  }
  updateCommentSideBar();
}

/**
* The comment setting of the widget.
*/
function widgetComment() {
  if (activeWidget != null) {
    activeWidget.comment = document.getElementById("widgComment").value;
  }
  updateCommentSideBar();
}

/**
* Populates the Comments Sidebar for acknowledgement.
*/
function updateCommentSideBar() {

  // Get the comment-sidebar div to add the comments to.
  var addComment = document.getElementById("comment-sidebar-comments");
  // Clear everything inside the comment-sidebar.
  addComment.innerHTML = "";

  for (i=0; i < widgetArray.length; i++) {
    if (widgetArray[i].comment != null) {
      // Create the text area element.
      var txtArea = document.createElement("TEXTAREA");
      // Set the class for CSS.
      txtArea.setAttribute("class", "commentBox");
      // Set the id for CSS.
      txtArea.setAttribute("id", widgetArray[i].name);
      // Create a text node to add into it.
      var comment = document.createTextNode(widgetArray[i].name + ": " + widgetArray[i].comment);
      // Add the text node into the txtarea.
      txtArea.appendChild(comment);
      // Prevent user from editing the textArea.
      txtArea.disabled = true;
      // Add the textArea into the div.
      addComment.appendChild(txtArea);
    }
  }

  if (widgetArray.length == 0) {
    addComment.innerHTML = "Add a comment to an object to populate this sidebar!";
  }

}

/**
* The height setting of the widget.
*/
function widgeHeight() {
  if (activeWidget != null) {
    activeWidget.height = parseInt(document.getElementById("widgHeightInput").value);
    // Redraws it to reflect the changes on the canvas.
    moveDrawWidgetArray();
  }
}

/**
* The width setting of the widget.
*/
function widgetWidth() {
  if (activeWidget != null) {
    activeWidget.width = parseInt(document.getElementById("widgWidthInput").value);
    // Redraws it to reflect the changes on the canvas.
    moveDrawWidgetArray();
  }
}

/**
* The X position setting of the widget.
*/
function widgetXPos() {
  if (activeWidget != null) {
    activeWidget.x = parseInt(document.getElementById("widgXPosInput").value);
    // Redraws it to reflect the changes on the canvas.
    moveDrawWidgetArray();
  }
}

/**
* The X position setting of the widget.
*/
function widgetYPos() {
  if (activeWidget != null) {
    activeWidget.y = parseInt(document.getElementById("widgYPosInput").value);
    // Redraws it to reflect the changes on the canvas.
    moveDrawWidgetArray();
  }
}

/**
* Grabs the values of the objects and displays it in the settings form.
*/
function createWidgetSettings(passedInWidget) {
  document.getElementById("widgetSettings").style.visibility = "visible";
  document.getElementById("widgIDInput").value = passedInWidget.name;
  document.getElementById("widgHeightInput").value = passedInWidget.height;
  document.getElementById("widgWidthInput").value = passedInWidget.width;
  document.getElementById("widgXPosInput").value = passedInWidget.x;
  document.getElementById("widgYPosInput").value = passedInWidget.y;
  document.getElementById("widgComment").value = passedInWidget.comment;
}
