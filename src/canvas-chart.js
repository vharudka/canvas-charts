import { BarChart } from './bar-chart.js';
import { LineChart } from './line_chart.js';
import { PieChart } from './pie_chart.js';

export default class CanvasChart {
  constructor(canvasId) {
    this.bar = new BarChart(canvasId);
    this.line = new LineChart(canvasId);
    this.pie = new PieChart(canvasId);

    this.defaultColors = [
      '#347cdb',
      '#eb4d3b',
      '#29b764',
      '#f2c40c',
      '#9756b0',
      '#17ab8d',
      '#dd751a',
      '#2b3d4f',
      '#c44f02',
      '#861b59'
    ];
  }

  render(type, data, labels, colors) {
    const dataMax = Math.max(...data);
    const finalColors = colors || this.defaultColors;

    switch (type.toLowerCase()) {
      case 'bar':
        this.bar.draw(data, labels, dataMax, finalColors);
        break;
      case 'line':
        this.line.draw(data, labels, dataMax, finalColors);
        break;
      case 'pie':
        this.pie.draw(data, labels, dataMax, finalColors);
        break;
    }
  }
}