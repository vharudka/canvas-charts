import { BaseChart } from './base-chart.js';

export class BarChart extends BaseChart {
  draw(data, labels, max) {
    const chartAreaHeight = this.height - this.margin;
    const columnWidth = (this.width - this.margin * 2) / data.length;

    data.forEach((val, i) => {
      const barHeight = (val / max) * chartAreaHeight;
      const barWidth = columnWidth - 20;

      const x = this.margin + i * columnWidth + 10;
      const y = (this.height - this.margin) - barHeight;

      this.ctx.fillStyle = '#1a7dbb';
      this.ctx.fillRect(x, y, barWidth, barHeight);
    });
  }
}