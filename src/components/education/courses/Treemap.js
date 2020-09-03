import * as d3 from "d3"
import React, { useRef, useEffect } from "react"

function Treemap({ width, height, data }) {
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
            .style("border", "1px solid black")
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
            .paddingRight(7)
            .paddingInner(3)
            (root);
        
        const color = d3.scaleOrdinal()
            .domain(["boss1", "boss2", "boss3"])
            .range(["#402D54", "#D18975", "#8FD175"]);

        const opacity = d3.scaleLinear()
            .domain([10, 30])
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
            .text(function(d){ return d.data.name.replace('mister_','') })
            .attr("font-size", "19px")
            .attr("fill", "white")
        
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
            .attr("fill", "white")
        
        // add the parent node titles
        svg
        .selectAll("titles")
        .data(root.descendants().filter(function(d){return d.depth==1}))
        .enter()
        .append("text")
            .attr("x", function(d){ return d.x0})
            .attr("y", function(d){ return d.y0+21})
            .text(function(d){ return d.data.name })
            .attr("font-size", "19px")
            .attr("fill",  function(d){ return color(d.data.name)} )

        // add the chart heading
        svg
        .append("text")
            .attr("x", 0)
            .attr("y", 14)
            .text("Three group leaders and 14 employees")
            .attr("font-size", "19px")
            .attr("fill", "grey")
    }

    return (
        <div className="chart">
            <svg ref={ref}>
            </svg>
        </div>
    )
}

export default Treemap