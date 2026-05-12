import { BaseChart } from './base-chart.js';

export class PieChart extends BaseChart {
  draw(data, labels, max) {
    this.clear();
    
    const total = data.reduce((a, b) => a + b, 0);
    let startAngle = 0;

    const colors = [
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

    const chartAreaHeight = this.height - this.margin;
    const centerX = this.width / 2;
    const centerY = chartAreaHeight / 2;
    const radius = Math.min(centerX, centerY) - this.margin;

    data.forEach((val, i) => {
      const sliceAngle = (val / total) * 2 * Math.PI;
      this.ctx.beginPath();
      this.ctx.moveTo(centerX, centerY);
      this.ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
      this.ctx.fillStyle = colors[i];
      this.ctx.fill();
      startAngle += sliceAngle;
    });
  }
}