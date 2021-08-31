/*
Access the form element using the method getElementById()
The following URL will help you to do this:
https://www.javascript-coder.com/javascript-form/getelementbyid-form/
*/
/*
Also store the tdCost id element as a variable.
The following link will help you to do this:
https://www.w3schools.com/jsref/met_document_getelementbyid.asp
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
https://www.javascript-coder.com/javascript-form/getelementbyid-form/

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
https://www.javascript-coder.com/javascript-form/getelementbyid-form/
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

// Test if JS is running
alert('js running');

// Alert if page is non-existent
in_progress = funtion() {
	alert('This page is in progress.')
};

// Variables for costs, used in calculations
glue = 0.1;// $/cm
glass4mm = 0.06;// $/cm^2
glass6mm = 0.1;// $/cm^2
labour = 100;// $/hr
gst = 0.1;// decimal, not percentage

// Take <form> and output <p> by IDs and store
var form = document.getElementById('inputs');
var tdCost = document.getElementById('tdCost');

// Take <button> tags by IDs and store
var calc = document.getelementbyid('btnCalcCost');
var reset = document.getelementbyid('btnReset');

// Take form elements by IDs and store
depth = Number(form.txtdepth);
width = Number(form.txtWidth);
height = Number(form.txtHeight);

// Functions to return various calculations, calcGlue does NOT glue around the lid.
var calcSurface = function(d, w, h) {
	sides = 2 * self.h * self.d;
	ends = 2 * self.d * self.w;
	faces = 2 * self.w * self.h;
	total = sides + ends + faces;
	return total;
};
var calcGlue = function(d, w, h) {
	total = (2 * self.d) + (2 * self.w) + (4 * self.h);
	return total;
};

// When "Calculate Cost" is clicked
calc.onclick = {
	if (isNaN(depth) || isNaN(width) || isNaN(height)) {
		alert("Please fill out all fields.");
	} else if ((depth <= 10) || (width <= 10) || (height <= 10)) {
		alert("Please enter values larger than 10.");
	// TODO: else if dimensions too big, give alert
	} else {
		surface = calcSurface(depth, width, height);
		if (height > 25) {
			surfaceCost = surface * glass6mm;
			thickness = "6mm";
		} else {
			surfaceCost = surface * glass4mm;
			thickness = "4mm";
		};
		glueCost = calcGlue(depth, width, height) * glue;
		labourCost = surface / labour;
		subtotal = surfaceCost + glueCost + labourCost;
		total = (subtotal * gst).toFixed(2);
		tdCost.innerHTML = "Surface Area: " + surface + "cm<sup>2</sup><br>Cost: $" + total;
	};
};

// When "Reset" is clicked, reset form and output
reset.onclick = {
	depth.value = "";
	width.value = "";
	height.value = "";
	tdCost.innerHTML = "";
};
