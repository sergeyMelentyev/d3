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
	d3.selectAll("div").data([1,5,11,3]);	// bind each elem in selection to each item in an array

	let someData = ["a", "b", "c", "d"];	// use .enter() func if more items in arr than elems in selection
	d3.selectAll("div").data(someData)
		.enter()                            // define what to do with each extra elem
        //.exit()                           // define what to do if there are fewer data elems
        .append("div")                      // define elem or shape and add to the DOM
        //.insert()                         // select where in the DOM add the new elem
		.html(function (d, i) {return d});	// "d" = data val bound to that elem, "i" returns array position

		d3.selectAll("div").data(someData)
		.exit().append("div");				// how to respond when an arr has fewer vals than a selection
}
function filter() {
    let filterd = arrName.filter(function(el) {return el <= 40 ? this : null});		// without side effect
}
function data() {
    // will import data as an arr of JSON
    d3.csv();								// pull comma-delimited data from files
    d3.tsv();								// pull for tab-delimited data from files
    d3.dsv();								// allows to declare the delimiter
    d3.json();

    d3.select("svg")
        .selectAll("rect")
        .data([15, 50, 22, 8, 100, 10])
        .enter()
        .append("rect")
        .attr("width", 10)
        .attr("height", function(data) { return data; })
        .style("fill", "grey")
        .attr("x", function(data, index) { return index * 10; })
        .attr("y", function(data) { return 100 - data; });
}
function scale() {
    let yScale = d3.scaleLinear().domain([0,24500]).range([0,100]);
    d3.select("svg")
        .selectAll("rect")
        .data([14, 68, 24500, 430, 19, 1000, 5555])
        .enter()
        .append("rect")
        .attr("width", 10)
        .attr("height", function(data) {return yScale(data);})
        .style("fill", "grey")
        .attr("x", function(data, index) {return index * 10;})
        .attr("y", function(data) {return 100 - yScale(data);});
}
function categorize() {
    let arr = [423,124,66,424,58,10,900,44,1];
    let qScale = d3.scaleQuantile().domain(arr).range([0,1,2]);    // .range(["s","m","l"]);
    qScale(423); qScale(20);                    // returns 2 or "l"; returns 0 or "s";
}
function nest() {
    d3.json("tweets.json", function(data) { // shared attributes of data can be used to sort them
        let nested = d3.nest().key(function(el) {
            return el.user;
        }).entries(data.tweets);
    });
}
function measure() {
    let arr =  [88,10000,1,75,12,35];
    d3.min(arr, function (el) { return el; })       // return min/max/mean value from arr
}
