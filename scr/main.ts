import {series} from "./data.js";
import {serie} from "./serie.js";

const tbody = document.getElementById("series-tbody")!;

function renderSeriesInTable(series: serie[]): void {
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

renderSeriesInTable(series);
