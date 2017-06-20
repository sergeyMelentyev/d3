function selection() {
	d3.select("div");		// will select the first element found
	d3.selectAll("div");	// select multiple elements
}
function css() {
	d3.select("#div").style("border", "5px darkgray dashed");
	d3.select("#div").attr("id", "newID");
	d3.select("#div").property("checked", true);
	d3.select("#div").classed("active", true);		// append or remove named class from the list
}
function binding() {
	d3.selectAll("div").data([1,5,11,3])	// bind each elem in selection to each item in an array

	var someData = ["a", "b", "c", "d"];	// if more items in array than elems in selection, that use .enter() func
	d3.selectAll("div").data(someData)
		.enter().append("div");				// define what to do with each extra elem
		.html(function (d, i) {return d});	// "d" = data val bound to that elem, "i" returns array position
	
	d3.selectAll("div").data(someData)
		.exit().append("div");				// how to respond when an arr has fewer vals than a selection
}
function filter() {
	let filterd = arrName.filter(function(el) {return el <= 40 ? this : null});		// without side effect
}
