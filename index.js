function select() {
    d3.select("body").append("svg");		// select 1st found el and append new el
    d3.selectAll("div");					// select multiple elems
}
function style() {
    const arr = [100, 180, 118, 200];
    let svg = d3.select("body").append("svg");
    svg.style("border", "1px gray solid");
    svg.attr("height", "500px").attr("width", "500px");
    svg.attr("id", "newID");
    svg.attr("class", "newClass");
    svg.property("checked", true);
    svg.classed("active", true);			// append or remove class "active"
}
function binding() {
    const arr = [100, 180, 118, 200];
    let svg = d3.select("body").append("svg").attr("width", "500px").attr("height", "500px");
    svg.selectAll("rect").data(arr)			// bind each el in selection to each item from arr
        .enter()                            // what to do with each extra el
        //.exit()                           // what to do if there are fewer data elems
        .append("rect")                     // add elem or shape to the DOM
        //.insert()                         // select where in the DOM add the new el
}
function shaps() {
    // static attributes
    svg.selectAll("rect").data(arr).enter().append("rect")
        .attr("x", "").attr("y", "").attr("width", "").attr("height", "")
        .attr("rx", "").attr("ry", "").attr("class", "").attr("transform", "");
    svg.selectAll("rect").data(arr).enter().append("circle")
        .attr("cx", "").attr("cy", "").attr("r", "").attr("class", "")
        .attr("transform", "");
    svg.selectAll("rect").data(arr).enter().append("ellipse")
        .attr("cx", "").attr("cy", "").attr("ry", "").attr("rx", "")
        .attr("class", "").attr("transform", "");
    svg.selectAll("rect").data(arr).enter().append("line")
        .attr("x1", "").attr("y1", "").attr("x2", "").attr("y2", "")
        .attr("class", "").attr("transform", "");
    svg.selectAll("rect").data(arr).enter().append("text").text("text")
        .attr("x", "").attr("y", "").attr("dx", "").attr("yd", "")
        .attr("class", "").attr("text-anchor", "").attr("transform", "");

    // path="Mx,y Lx,y Lx,y Lx,y z"; "M" move to starting pos, "L" line to, "z" close path
    svg.selectAll("rect").data(arr).enter().append("path")
        .attr("d", "").attr("class", "").attr("transform", "").attr("pathLength", "");
    // line generator for path element
    const dataPath = [{x:5,y:5},{x:10,y:15},{x:15,y:7},{x:20,y:12},{x:25,y:10}];
    let svgPath = d3.select("body").append("svg").attr("width", "500").attr("height", "500");
    let line = d3.line()
        .x(function (d) { return d.x; })
        .y(function (d) { return d.y; });
    //.curve(d3.curveStep);                     // use for square lines, check API
    //.curve(d3.curveCardinal);                 // use for smooth lines, check API
    svgPath.append("path")
        .attr("fill", "none")
        .attr("stroke", "gray")
        .attr("d", line(dataPath));

    // area generator for path element
    const arrArea = [25,26,27,29,31,32,34,36,38,40,41,44,47,50,51,52,54];
    const year = ["2000","2001","2002","2003","2004","2005","2006","2007","2008",
        "2009","2010","2011","2012","2013","2014","2015","2016"];
    let heigth = 200;
    let heith = 500;
    let area = d3.area()
        .x(function (d, i) { return i*20; })
        .y0(heigth)
        .y1(function (d) { return heigth - d; });
    let svg = d3.select("body").append("svg").attr("width", "500").attr("height", "500");
    svg.append("path").attr("d", area(arrArea));

    // dynamic attributes
    svg.selectAll("rect").data(arr).enter().append("rect")
        .attr("width", "10")
        .attr("height", function (dArg) { return dArg; })
        .attr("x", function (dArg, iArg) { return iArg * 15; })
        .attr("y", function (dArg) { return maxVal - dArg });
}


function animation() {
    d3.select("#a").transition().delay(1000).style("opacity", 0.5);
    d3.selectAll("circle").transition().duration(2000).attr("cy", 200);
}
function filter() {
    let filterd = arrName.filter(function (el) {
        return el <= 40 ? this : null
    });		// without side effect
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
        .attr("height", function (data) {
            return data;
        })
        .style("fill", "grey")
        .attr("x", function (data, index) {
            return index * 10;
        })
        .attr("y", function (data) {
            return 100 - data;
        });
}
function scale() {
    let yScale = d3.scaleLinear().domain([0, 24500]).range([0, 100]);
    d3.select("svg")
        .selectAll("rect")
        .data([14, 68, 24500, 430, 19, 1000, 5555])
        .enter()
        .append("rect")
        .attr("width", 10)
        .attr("height", function (data) {
            return yScale(data);
        })
        .style("fill", "grey")
        .attr("x", function (data, index) {
            return index * 10;
        })
        .attr("y", function (data) {
            return 100 - yScale(data);
        });
}
function categorize() {
    let arr = [423, 124, 66, 424, 58, 10, 900, 44, 1];
    let qScale = d3.scaleQuantile().domain(arr).range([0, 1, 2]);    // .range(["s","m","l"]);
    qScale(423);
    qScale(20);                    // returns 2 or "l"; returns 0 or "s";
}
function nest() {
    d3.json("tweets.json", function (data) { // shared attributes of data can be used to sort them
        let nested = d3.nest().key(function (el) {
            return el.user;
        }).entries(data.tweets);
    });
}
function measure() {
    let arr = [88, 10000, 1, 75, 12, 35];
    d3.min(arr, function (el) {
        return el;
    })       // return min/max/mean value from arr
}
