import * as d3 from "d3"
import React, { useRef, useEffect } from "react"

function Treemap({ width, height, data }) {
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
    }, []);

    useEffect(() => {
        draw();
    }, [data]);

    const draw = () => {
        const svg = d3.select(ref.current);

        // Give the data to cluster layout
        var root = d3.hierarchy(data).sum(function(d) { return d.value });
        
        // init treemap
        d3.treemap()
            .size([width, height])
            .paddingTop(28)
            .paddingLeft(7)
            .paddingInner(5)
            (root);
        
        const color = d3.scaleOrdinal()
            .domain(["Computer Science", "Mathematics", "Statistics", "Commerce"])
            .range(["#ffc7c7", "#ffe2e2", "#d6e0f0", "#8785a2"]);

        const opacity = d3.scaleLinear()
            .domain([100, 400])
            .range([.5,1]);

        // select nodes
        var nodes = svg
                    .selectAll("rect")
                    .data(root.leaves())

        // animate new additions
        nodes
            .transition().duration(300)
                .attr('x', function (d) { return d.x0; })
                .attr('y', function (d) { return d.y0; })
                .attr('width', function (d) { return d.x1 - d.x0; })
                .attr('height', function (d) { return d.y1 - d.y0; })
                .style("opacity", function(d){ return opacity(d.data.value)})
                .style("fill", function(d){ return color(d.parent.data.name)} )
        
        // draw rectangles
        nodes.enter()
            .append("rect")
            .attr('x', function (d) { return d.x0; })
            .attr('y', function (d) { return d.y0; })
            .attr('width', function (d) { return d.x1 - d.x0; })
            .attr('height', function (d) { return d.y1 - d.y0; })
            .style("stroke", "black")
            .style("fill", function(d){ return color(d.parent.data.name)} )
            .style("opacity", function(d){ return opacity(d.data.value)})

        nodes.exit().remove()

        // select node titles
        var nodeText = svg
            .selectAll("text")
            .data(root.leaves())


        // add the text
        nodeText.enter()
            .append("text")
            .attr("x", function(d){ return d.x0+5})    // +10 to adjust position (more right)
            .attr("y", function(d){ return d.y0+20})    // +20 to adjust position (lower)
            .text(function(d){ return d.data.name })
            .attr("font-size", "11px")
            .attr("font-family", "IBM Plex Mono")
            .attr("fill", "black")
        
        // select node values
        var nodeVals = svg
            .selectAll("vals")
            .data(root.leaves())
            
        // add values
        nodeVals.enter()
            .append("text")
            .attr("x", function(d){ return d.x0+5})    // +10 to adjust position (more right)
            .attr("y", function(d){ return d.y0+35})    // +20 to adjust position (lower)
            .text(function(d){ return d.data.value })
            .attr("font-size", "11px")
            .attr("font-family", "IBM Plex Mono")
            .attr("fill", "black")
                
        // add the parent node titles
        svg
            .selectAll("titles")
            .data(root.descendants().filter(function(d){return d.depth==1}))
            .enter()
            .append("text")
                .attr("x", function(d){ return d.x0+10})
                .attr("y", function(d){ return d.y0+21})
                .text(function(d){ return d.data.name })
                .attr("font-size", "15px")
                .attr("font-family", "IBM Plex Mono")
                .attr("fill",  function(d){ return color(d.data.name) })
    }

    return (
        <div>
            <svg ref={ref}>
            </svg>
        </div>
    )
}

export default Treemap