<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css">
    <link href="Prototyper_Stylesheet.css" rel="stylesheet" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <script src="Prototyper_Script.js"></script>
    <title>Exium Prototyper</title>
</head>

<body onload="init()">

<!--Menu bar with the drop-down stuff for File, Settings and Help.-->
<nav class="navbar navbar-default">
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse">
		<!-- Create a navbar with these following items. -->
        <ul class="nav navbar-nav">
			<!-- Dropdown list for "File" -->
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">File <span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a href="#">Open</a></li>
                    <li><a href="#">Save</a></li>
                    <li><a href="#">Exit</a></li>
                </ul>
            </li>
			<!-- Dropdown list for "Settings" -->
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">Settings <span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a href="#">Tool</a></li>
                    <li><a href="#">Something</a></li>
                </ul>
            </li>
			<!-- Dropdown list for "Canvas Size" -->
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">Canvas Size <span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a href="#" onClick="sCanvas()">Small</a></li>
                    <li><a href="#" onClick="mCanvas()">Medium</a></li>
                    <li><a href="#" onClick="lCanvas()">Large</a></li>
                </ul>
            </li>
			<!-- Dropdown list for "Help" -->
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">Help <span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a href="#">Tutorial</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </li>
			<!-- Clears the canvas. -->
			<li><a href="#" onClick="clearCanvas()">Clear Canvas</a></li>
        </ul>
        <button type="button" class="btn btn-default navbar-btn navbar-right" onClick="location.href='Profile.html'">Home</button>
    </div><!-- /.navbar-collapse -->
</nav>

<!-- Container for the sidebar -->
<div id="appSideBar">
	<!-- Clickable legend that collapses in when clicked. -->
	<legend id="#radioContainer">Widgets</legend>
	<div id="buttonContainer">
		<button type="button" class="btn btn-default" onClick="setDrawingMode('Square')">Square</button>
		<button type="button" class="btn btn-default" onClick="setDrawingMode('Circle')">Circle</button>
		<button type="button" class="btn btn-default" onClick="setDrawingMode('Text')">Text</button>
		<button type="button" class="btn btn-default" onClick="setDrawingMode('Line')">Line</button>
		<button type="button" class="btn btn-default" onClick="drawWidgetArray()">Show</button>
		<button type="button" class="btn btn-default" onClick="drawWidget()">6</button>
		<button type="button" class="btn btn-default" onClick="drawWidget()">7</button>
		<button type="button" class="btn btn-default" onClick="drawWidget()">8</button>
		<button type="button" class="btn btn-default" onClick="printArray()">Array</button>
		<button type="button" class="btn btn-default" onClick="hideWidgetArray()">Hide</button>
	</div>
	<!-- Clickable title that collapses in when clicked. -->
	<legend id="#widgetSettings">Widget Settings</legend>
	<form id="widgetSettings" class="form-inline">
		<div class="form-group">
			<label for="widgID">ID:</label>
			<input type="text" class="form-control" id="widgID" placeholder="Widget Name">
		</div>
		<!-- Widget Resizing section. -->
		<div class="form-group">
			<!-- Height section. -->
			<label for="widgHeight">Height:</label>
			<input type="number" class="form-control" id="widgHeight" placeholder="100px">
			<!-- Width section. -->
			<label for="widgWidth">Width:</label>
			<input type="number" class="form-control" id="widgWidth" placeholder="100px">
		</div>
		<!-- Widget Colour section. -->
		<div class="form-group">
			<label for="widgColour">Colour:</label>
			<input type="text" class="form-control" id="widgColour" placeholder="#012345678">
		</div>
		<!-- Widget Font section. -->
		<div class="form-group">
			<!-- Widget Font Style section. -->
			<label for="widgFontStyle">Font Style:</label>
			<select class="form-control" id="widgFontStyle">
				<option value="1">Font 1</option>
				<option value="2">Font 2</option>
				<option value="3">Font 3</option>
				<option value="4">Font 4</option>
			</select>
			<!-- Widget Font Size section. -->
			<label for="widgFontSize">Font Size:</label>
			<select class="form-control" id="widgFontSize">
				<option value="1">8</option>
				<option value="2">10</option>
				<option value="3">12</option>
				<option value="4">14</option>
				<option value="5">16</option>
			</select>
		</div>
		<!-- Widget Font Colour section. -->
		<div class="form-group">
			<label for="widgFontColour">Font Colour:</label>
			<input type="text" class="form-control" id="widgFontColour" placeholder="#012345678">
		</div>
		<!-- Widget File Insertion section. -->
		<div class="form-group">
			<label for="imageUpload">Custom Image:</label>
			<input id="imageUpload" class="form-control" type="file">
		</div>
	</form>
</div>

<!--Canvas for drawing on.-->
<div id="canvasContainer">
	<canvas id="myCanvas" width="425" height="425" style="border: 1px black solid">
		This text is displayed if your browser does not support HTML5 Canvas.
	</canvas>
	<!-- Coordinates for the mouse movement on the canvas for knowledge. -->
	<p>Mouse over the rectangle above to get the horizontal and vertical coordinates of your mouse pointer.</p>
	<p id="mCoordinates"></p>
	<!-- Coordinates for the mouse movement on the canvas for knowledge. -->
</div>

</body>
</html>
