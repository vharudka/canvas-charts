import { BarChart } from './bar-chart.js';
import { LineChart } from './line_chart.js';
import { PieChart } from './pie_chart.js';

export default class CanvasChart {
  constructor(canvasId) {
    this.bar = new BarChart(canvasId);
    this.line = new LineChart(canvasId);
    this.pie = new PieChart(canvasId);
  }

  render(type, data, labels) {
    switch (type.toLowerCase()) {
      case 'bar':
        this.bar.draw(data, labels);
        break;
      case 'line':
        this.line.draw(data, labels);
        break;
      case 'pie':
        this.pie.draw(data, labels);
        break;
    }
  }
}