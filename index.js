function api() {
    /* locale.format(specifier)
            https://github.com/d3/d3-time-format/blob/master/README.md#locale_format
     */
    /* axis interval ticks
            https://github.com/d3/d3-time#intervals
     */
    /* curves available options
            https://github.com/d3/d3-shape/blob/master/README.md#curves
     */


}
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
    const dataPath = [{x: 5, y: 5}, {x: 10, y: 15}, {x: 15, y: 7}, {x: 20, y: 12}, {x: 25, y: 10}];
    let svgPath = d3.select("body").append("svg").attr("width", "500").attr("height", "500");
    let line = d3.line()
        .x(function (d) {
            return d.x;
        })
        .y(function (d) {
            return d.y;
        });
    //.curve(d3.curveStep);                     // use for square lines, check API
    //.curve(d3.curveCardinal);                 // use for smooth lines, check API
    svgPath.append("path")
        .attr("fill", "none")
        .attr("stroke", "gray")
        .attr("d", line(dataPath));

    // area generator for path element
    const arrArea = [25, 26, 27, 29, 31, 32, 34, 36, 38, 40, 41, 44, 47, 50, 51, 52, 54];
    let heigth = 200;
    let heith = 500;
    let area = d3.area()
        .x(function (d, i) {
            return i * 20;
        })
        .y0(heigth)
        .y1(function (d) {
            return heigth - d;
        });
    let svg = d3.select("body").append("svg").attr("width", "500").attr("height", "500");
    svg.append("path").attr("d", area(arrArea));

    // dynamic attributes
    svg.selectAll("rect").data(arr).enter().append("rect")
        .attr("width", "10")
        .attr("height", function (dArg) {
            return dArg;
        })
        .attr("x", function (dArg, iArg) {
            return iArg * 15;
        })
        .attr("y", function (dArg) {
            return maxVal - dArg
        });
}
function group() {
    const dataPath = [{x: 15, y: 15}, {x: 50, y: 115}, {x: 115, y: 17}, {x: 145, y: 112}, {x: 200, y: 150}];
    let svg = d3.select("body").append("svg").attr("width", "100%").attr("height", "100%");

    let line = d3.line()
        .x(function (d) {
            return d.x;
        })
        .y(function (d) {
            return d.y;
        })
        .curve(d3.curveCardinal);

    let chartGroup = svg.append("g").attr("transform", "translate(0,0)");

    chartGroup.append("path")
        .attr("fill", "none")
        .attr("stroke", "gray")
        .attr("d", line(dataPath));

    chartGroup.selectAll("circle").data(dataPath)
        .enter().append("circle")
        .attr("cx", function (d) {
            return d.x;
        })
        .attr("cy", function (d) {
            return d.y;
        })
        .attr("r", "2");
}
function scale() {
    const arrArea = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 80, 90, 100, 110, 120, 140, 180];

    let height = 200;
    let width = 500;

    let yScale = d3.scaleLinear().domain([0, d3.max(arrArea)]).range([height, 0]);

    let area = d3.area()
        .x(function (d, i) {
            return i * 20;
        })
        .y0(height)
        .y1(function (d) {
            return yScale(d);
        });

    let svg = d3.select("body").append("svg").attr("width", "500").attr("height", "500");
    svg.append("path").attr("d", area(arrArea));
}
function axis() {
    const arrArea = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 80, 90, 100, 110, 120, 140, 180];
    const years = ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008",
        "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"];

    const parseDate = d3.timeParse("%Y");       // full year parser format
    const height = 200;
    const width = 500;
    const margin = {left: 50, right: 50, top: 40, bottom: 0};

    let yScale = d3.scaleLinear().domain([0, d3.max(arrArea)]).range([height, 0]);
    let yAxis = d3.axisLeft(yScale);    // .ticks(3) manage num of yScale ticks
                                        // .tickPadding(10) manage ticks padding

    let xScale = d3.scaleTime().domain(d3.extent(years, function (d) {
        return parseDate(d);
    })).range([0, width]);
    let xAxis = d3.axisBottom(xScale);

    let area = d3.area()
        .x(function (d, i) {
            return xScale(parseDate(years[i]));
        })
        .y0(height)
        .y1(function (d) {
            return yScale(d);
        });

    let svg = d3.select("body").append("svg")
        .attr("height", "600").attr("width", "400");
    let chartGroup = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    chartGroup.append("path").attr("d", area(arrArea));
    chartGroup.append("g").attr("class", "axis y").call(yAxis);
    chartGroup.append("g").attr("class", "axis x")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);
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

function exampleGraphLine() {
    let margin = {top: 40, right: 20, bottom: 50, left: 70},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    let parseTime = d3.timeParse("%d-%b-%y");
    let x = d3.scaleTime().range([0, width]);
    let y = d3.scaleLinear().range([height, 0]);

    let valueline = d3.line()
        .x(function (d) {
            return x(d.date);
        })
        .y(function (d) {
            return y(d.close);
        });

    let svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom)
        .append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.csv("exampleGraphLine.csv", function(error, data) {
        if (error) throw error;
        data.forEach(function(d) {
            d.date = parseTime(d.date);
            d.close = +d.close;
        });
        x.domain(d3.extent(data, function(d) { return d.date; }));
        y.domain([0, d3.max(data, function(d) { return d.close; })]);

        // draw "path" element
        svg.append("path").data([data]).attr("class", "line").attr("d", valueline);

        // draw "circle" elements
        svg.selectAll("dot")
            .data(data)
            .enter().append("circle")
            .attr("r", 3)
            .attr("cx", function(d) { return x(d.date); })
            .attr("cy", function(d) { return y(d.close); });

        // draw "x" axis
        svg.append("g").attr("class", "axis").attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).ticks(7));

        // draw "y" axis
        svg.append("g").attr("class", "axis").call(d3.axisLeft(y));

        // add label for "x" axis
        svg.append("text")
            .attr("transform", "translate(" + (width/2) + " ," + (height + margin.top) + ")")
            .style("text-anchor", "middle")
            .text("Date");

        // add labels for "y" axis
        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y",0 - margin.left)
            .attr("x",0 - (height / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Value");

        // add title
        svg.append("text")
            .attr("x", (width / 2))
            .attr("y", 0 - (margin.top / 2))
            .attr("text-anchor", "middle")
            .style("font-size", "20px")
            .style("text-decoration", "underline")
            .text("Value vs Date Graph");
    });
}
exampleGraphLine();
