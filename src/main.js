import { series } from "./data.js";
const tbody = document.getElementById("series-tbody");
const avgElement = document.getElementById("average");
function renderSeriesInTable(series) {
    series.forEach((serie) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        tbody.appendChild(row);
    });
}
function getSeasonsAverage(series) {
    let total = 0;
    series.forEach((serie) => {
        total += serie.seasons;
    });
    return total / series.length;
}
avgElement.innerHTML = "Seasons average: " + getSeasonsAverage(series);
renderSeriesInTable(series);
