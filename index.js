const GoogleChartsNode = require('google-charts-node');
const fs = require("fs");

function drawBarChart() {
    const data = google.visualization.arrayToDataTable([
        ['Sector', 'Buy', 'Sell'],
        ['Information Technology', 4792000, 5792000],
        ['Financials', 3792000, 972000],
        ['Health', 2695000, 855000],
        ['ETF', 482600, 982600],
        ['Real Estates', 226009, 726000],
        ['Materials', 414120, 514320]
    ]);
    const options = {
        title: 'Volume by Sector and Side',
        isStacked: true,
        chartArea: {width: '80%'},
        hAxis: {
            title: 'Fill Notional ($M)',
            minValue: 0
        },
        vAxis: {
        }
    };
    const chart = new google.visualization.BarChart(container);
    chart.draw(data, options);
}

function drawPieChart() {
    const data = google.visualization.arrayToDataTable([
        ['Side', 'Value'],
        ['Buy', 4002000],
        ['Sell', 3792000]
    ]);
    const options = {
        chartArea: {width: '80%'},
    };
    const chart = new google.visualization.PieChart(container);
    chart.draw(data, options);
}

Promise.all([
    GoogleChartsNode.render(drawBarChart, {width: 1280, height: 980,}),
    GoogleChartsNode.render(drawPieChart, {width: 1280, height: 980,}),
]).then(images => {
    fs.writeFileSync("output-1.png", images[0]);
    fs.writeFileSync("output-2.png", images[1]);
});
