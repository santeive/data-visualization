const canvas = d3.select(".canva");

let width = 600;
let height = 600;
const api_url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_hour.geojson"

const svg = canvas.append("svg")
    .attr('width', width)
    .attr('height', height);

//Parse JSON
d3.json(api_url)
    .then(data => {
        //Here we have our data
        const circle = svg.selectAll("circle")
            .data(data.features);

        circle.attr("cx", (d,i) => d.properties.mag)
            .attr("cy", 14)
            .attr("r", 14)
            .attr("fill", "black");

        circle.enter()
            .append("circle")
            .attr("cx", (d,i) => (d.properties.mag)*10)
            .attr("cy", 14)
            .attr("r", (d,i) => (d.properties.mag)*10)
            .attr("fill", "purple")
});