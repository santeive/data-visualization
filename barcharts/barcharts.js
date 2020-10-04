const canvas = d3.select(".canva");

const api_url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson"

// svg alement
const svg = canvas.append("svg")
    .attr('width',600)
    .attr('height',600);


const rect = svg.selectAll("rect");

d3.json('text.json')
    .then(data => {
        
        console.log(data);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.heigth)])
            .range([0, 250]);

        console.log(y(0));
        console.log(y(250));
        console.log(y(500));

        rect.data(data)
            .enter().append("rect")
            .attr("width", (d,i) => d.with)
            .attr("height", (d,i) => d.heigth*2)
            .attr("fill", (d) => d.fill)
            .attr("x", (d,i) => i*25)
});