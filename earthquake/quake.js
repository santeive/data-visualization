const canvas = d3.select(".canva");

let width = "100%";
let height = "100%";
const api_url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson"

const svg = canvas.append("svg")
    .attr('width', width)
    .attr('height', height);

//Parse JSON
d3.json(api_url)
    .then(data => {
        //Here we have our data
        const circle = svg.selectAll("circle")
            .data(data.features);

        circle.attr("cx", (d,i) => Math.floor(Math.random()*200) + d.properties.mag*i)
            .attr("cy", (d,i) => Math.floor(Math.random()*100) + d.properties.mag)
            .attr("r", (d,i) => (d.properties.mag)*2)
            .attr("fill", (d,i) => d.properties.alert);

        circle.enter()
            .append("circle")
            .attr("cx", (d,i) => Math.floor(Math.random()*200) + d.properties.mag*i)
            .attr("cy", (d,i) => Math.floor(Math.random()*100) + d.properties.mag)
            .attr("r", (d,i) => (d.properties.mag)*2)
            .attr("fill", (d,i) => d.properties.alert);
});