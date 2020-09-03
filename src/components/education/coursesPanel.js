import React from "react"

import * as d3 from "d3"

const CoursesPanel = () => {
    // Dimensions and Margins of the Graph (Unsure)
    var margin = {top: 10, right: 10, bottom: 10, left: 10},
        width = 445 - margin.left - margin.right,
        height = 445 - margin.top - margin.bottom;

    // Append the SVG object to the body of the page (Unsure)
    var svg = d3.select("#my_dataviz")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr(
                "transform",
                "translate(" + margin.left + "," + margin.top + ")");

    // Read JSON Data
    const path = "../../content/courses.json"
    d3.json(path, function(data) {

        // Give the data to this cluster layout
        // Size depends on the value specified in the .json file
        var root = d3.hierarchy(data).sum(function(d){ return d.value })

        // d3.treemap computes the position of each element of the hierarchy
        d3.treemap()
            .size([width, height])
            .padding(2)
            (root)
        
        // adding rectangles
        svg
            .selectAll("rect")
            .data(root.leaves())
            .enter()
            .append("rect")
                .attr("x", function (d) { return d.x0; })
                .attr("y", function (d) { return d.y0; })
                .attr("width", function (d) { return d.x1 - d.x0; })
                .attr("height", function (d) { return d.y1 - d.y0; })
                .style("stroke", "black")
                .style("fill", "slateblue")
        
        // Adding text labels
        svg
            .selectAll("text")
            .data(root.leaves())
            .enter()
            .append("text")
                .attr("x", function (d) { return d.x0+5; })
                .attr("y", function (d) { return d.y0+20; })
                .text(function (d) { return d.data.name })
                .style("font-size", "15px")
                .style("fill", "white")
    })
    
    return (
        svg
    )
}

export default CoursesPanel