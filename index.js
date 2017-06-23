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
		.enter().append("div")				// define what to do with each extra elem
		.html(function (d, i) {return d});	// "d" = data val bound to that elem, "i" returns array position

		d3.selectAll("div").data(someData)
		.exit().append("div");				// how to respond when an arr has fewer vals than a selection
}
function filter() {
    let filterd = arrName.filter(function(el) {return el <= 40 ? this : null});		// without side effect
}
function data() {
    // will import data as an arr of JSON
    d3.csv();								// built to pull comma-delimited data from files
    d3.tsv();								// built to pull for tab-delimited data from files
    d3.dsv();								// allows to declare the delimiter

    d3.json("tweets.json", function(obj) {
        //console.log(obj.tweets);
    });
}


let json = {
    "tweets": [
        {
            "user": "Al",
            "content": "I really love seafood.",
            "timestamp": " Mon Dec 23 2013 21:30 GMT-0800 (PST)",
            "retweets": ["Raj","Pris","Roy"], "favorites": ["Sam"]
        },
        {
            "user": "Al",
            "content": "I take that back, this doesn't taste so good.",
            "timestamp": "Mon Dec 23 2013 21:55 GMT-0800 (PST)",
            "retweets": ["Roy"],
            "favorites": []
        },
        {
            "user": "Al",
            "content": "From now on, I'm only eating cheese sandwiches.",
            "timestamp": "Mon Dec 23 2013 22:22 GMT-0800 (PST)",
            "retweets": [],
            "favorites": ["Roy","Sam"]
        },
        {
            "user": "Roy",
            "content": "Great workout!",
            "timestamp": " Mon Dec 23 2013 7:20 GMT-0800 (PST)",
            "retweets": [],"favorites": []
        },
        {
            "user": "Roy",
            "content": "Spectacular oatmeal!",
            "timestamp": " Mon Dec 23 2013 7:23 GMT-0800 (PST)",
            "retweets": [],
            "favorites": []
        },
        {
            "user": "Roy",
            "content": "Amazing traffic!",
            "timestamp": " Mon Dec 23 2013 7:47  GMT-0800 (PST)",
            "retweets": [],
            "favorites": []
        },
        {
            "user": "Roy",
            "content": "Just got a ticket for texting and driving!",
            "timestamp": " Mon Dec 23 2013 8:05 GMT-0800 (PST)",
            "retweets": [],
            "favorites": ["Sam", "Sally", "Pris"]
        },
        {
            "user": "Pris",
            "content": "Going to have some boiled eggs.",
            "timestamp": " Mon Dec 23 2013 18:23 GMT-0800 (PST)",
            "retweets": [],
            "favorites": ["Sally"]
        },
        {
            "user": "Pris",
            "content": "Maybe practice some gymnastics.",
            "timestamp": " Mon Dec 23 2013 19:47  GMT-0800 (PST)",
            "retweets": [],
            "favorites": ["Sally"]
        },
        {
            "user": "Sam",
            "content": "@Roy Let's get lunch",
            "timestamp": " Mon Dec 23 2013 11:05 GMT-0800 (PST)",
            "retweets": ["Pris"],
            "favorites": ["Sally", "Pris"]
        }
    ]
};


d3.csv("cities.csv", function(obj) {
    console.log(obj);
});
