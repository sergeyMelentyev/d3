function selection() {
	d3.select("div");		// will select the first element found
	d3.selectAll("div");	// select multiple elements
}
function shaps() {
	d3.select("svg").append("line").attr("x1", 20)
	.attr("y1", 20).attr("x2",400).attr("y2",400)
	.style("stroke", "black").style("stroke-width","2px");

	d3.select("svg").append("text").attr("x",20)
	.attr("y",20).text("HELLO");

	d3.select("svg").append("circle").attr("r", 20)
	.attr("cx",20).attr("cy",20).style("fill","red");

}
function css() {
	d3.select("#div").style("border", "5px darkgray dashed");
	d3.select("#div").attr("id", "newID");
	d3.select("#div").property("checked", true);
	d3.select("#div").classed("active", true);		// append or remove named class from the list
}
function animation() {
	d3.select("#a").transition().delay(1000).style("opacity", 0.5);
	d3.selectAll("circle").transition().duration(2000).attr("cy", 200);
}
function binding() {
	d3.selectAll("div").data([1,5,11,3])	// bind each elem in selection to each item in an array

	var someData = ["a", "b", "c", "d"];	// use .enter() func if more items in arr than elems in selection
	d3.selectAll("div").data(someData)
		.enter().append("div")				// define what to do with each extra elem
		.html(function (d, i) {return d});	// "d" = data val bound to that elem, "i" returns array position
	
	d3.selectAll("div").data(someData)
		.exit().append("div");				// how to respond when an arr has fewer vals than a selection
}
function filter() {
	let filterd = arrName.filter(function(el) {return el <= 40 ? this : null});		// without side effect
}
function tabular() {
	// import data as an arr of JSON
	d3.csv();								// built to pull comma-delimited data from files
	d3.tsv();								// built to pull for tab-delimited data from files
	d3.dsv();								// allows to declare the delimiter
}
function object() {
	d3.json();
}
