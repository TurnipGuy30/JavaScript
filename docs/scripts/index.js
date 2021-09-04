/*
Access the form element using the method getElementById()
The following URL will help you to do this:
https://www.javascript-coder.com/javascript-form/getElementById-form/
*/
/*
Also store the tdCost id element as a variable.
The following link will help you to do this:
https://www.w3schools.com/jsref/met_document_getElementById.asp
*/
/*
select the "Calculate Cost" and "Reset" buttons by
getting their elements by ID. Add an event handler code to an
onclick event. The Calculate Cost button should run the function
that calculates the costs and the Reset button should run the
function that resets the text boxes and output.
The links below will help you to do this:
https://www.w3schools.com/js/js_htmldom_document.asp
https://www.w3schools.com/jsref/event_onclick.asp
*/
/*
Create a function that calculates the surface area.

Get the value of each variable you created at the beginning
and store each value as a new variable.
https://www.javascript-coder.com/javascript-form/getElementById-form/

Test whether the user has entered a number in
the text boxes and return an alert if non-numbers are entered. If
numbers have been entered into the text boxes, calculate the surface area
and return the result. You can use the following links to help you with this.
https://www.w3schools.com/js/js_functions.asp
https://www.w3schools.com/jsref/jsref_isNaN.asp
*/
/*
Create a function that calculates the depth of the edges
and returns the result.
You can use the following link to help you with this.
https://www.w3schools.com/js/js_functions.asp

At the beginning of your function get the value of each variable you
created at the beginning of your program and store each value as a new variable.
https://www.javascript-coder.com/javascript-form/getElementById-form/
*/
/*
create a function that stores the results of the previous functions
as variables. Use a conditional statement to determine the thickness
of the glass and calculate the cost of the glass. You can use the URL
below to help you do this:
https://www.w3schools.com/js/js_if_else.asp

Calculate the cost of the glue, labour, sub-total, tax and total cost.

Use the .toFixed() method to round the result to two decimal places.
You can use the URL below to help you do this:
https://www.w3schools.com/jsref/jsref_tofixed.asp
*/
/*
Create a function named resetInputs to reset the inputs (depth, Width, Height).
Use this link to help https://www.w3schools.com/js/tryit.asp?filename=tryjs_form_reset

Also reset the output (tdCost). Use this link to help you do this
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_innerhtml_delete
*/

// Test if JS is running when
var test = function() {
	alert("JS loaded!");
};

// Alert if page is non-existent
var page = function() {
	alert("This page is in progress.");
};

/*
// Declare measurement variables
var depth;
var width;
var height;
*/

// Variables for costs, used in calculations
var glue = 0.1; // $/cm
var glass4mm = 0.06; // $/cm^2
var glass6mm = 0.1; // $/cm^2
var labour = 100; // $/hr
var gst = 0.1; // decimal, not percentage

// Take <form> and output <p> by IDs and store
var form = document.getElementById("inputs");
var output = document.getElementById("tdCost");

// Take <button> tags by IDs and store
var btnCalcCost = document.getElementById("btnCalcCost");
var btnReset = document.getElementById("btnReset");

// Functions to return various calculations, calcGlue does NOT glue around the lid
function calcSurfaceArea (d, w, h) {
	sides = 2 * h * d;
	ends = 2 * d * w;
	faces = 2 * w * h;
	total = sides + ends + faces;
	return total;
};
function calcGlueCost(d, w, h) {
	total = (2 * d) + (2 * w) + (4 * h);
	return total;
};
var calcSurface = calcSurfaceArea();
var calcGlue = calcGlueCost();

// When "Calculate Cost" is clicked
btnCalcCost.onclick = function() {

	// Take form elements by IDs and store
	var depth = document.getElementById("txtDepth").value;
	var width = document.getElementById("txtWidth").value;
	var height = document.getElementById("txtHeight").value;

	// LFD: alert("depth="+depth+", width="+width+", height="+height);

	// Check if inputs are valid numbers
	if (! (Number.isInteger(depth) || Number.isInteger(width) || Number.isInteger(height) || depth >= 30 || width >= 30 || height >= 30)) {
		output.innerHTML = "Please make each dimension at least 30cm.";
	}

	// If inputs are valid, perform calculations
	else {

		// Find surface area
		var surface = calcSurfaceArea(depth, width, height);

		// Find glass cost
		if (height > 25) {
			surfaceCost = surface * glass6mm;
			thickness = "6mm";
		} else {
			surfaceCost = surface * glass4mm;
			thickness = "4mm";
		};

		// Find glue cost
		var glueCost = calcGlueCost(depth, width, height) * glue;

		// Find labour cost
		var labourCost = surface / labour;

		// Find subtotal
		var subtotal = surfaceCost + glueCost + labourCost;

		// Calculate total cost
		var total = (subtotal * gst).toFixed(2);

		// Extra: Calculate capaity in litres
		var capacityLitres = depth * width * height / 1000;

		// Extra: Calculate capacity in gallons using approximate rate
		var capacityGallons = (capacityLitres / 3.785).toFixed(2);

		// Output information to paragraph
		// LFD: output = "depth="+depth+",width="+width+",height="+height;
		output.innerHTML = "<strong>Total Cost: $" + Number(total) + "</strong> (incl. GST)<br>Surface Area: " + Number(surface) + " cm<sup>2</sup><br>Capacity: " + capacityLitres + " L (" + capacityGallons + " gal)";
	};
};

// When "Reset" is clicked, reset form and output
btnReset.onclick = function() {
	form.reset();
	output.innerHTML = "";
};
