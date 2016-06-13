// Developer functions
/**
* Prints the array into console.
*/
function printArray() {
  if (widgetArray.length == 0) {
    console.log("There doesn't seem to be anything here....");
  } else {
    console.log("WIDGET ARRAY PRINTING BELOW:");
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
