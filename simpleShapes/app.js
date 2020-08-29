const canvas = d3.select(".canva");

const svg = canvas.append("svg")
    .attr('width', "500")
    .attr("height", "500");

svg.append("circle")
    .attr("cx", "100")
    .attr("cy", "100")
    .attr("r", "50")
    .attr("fill", "blue")