import { BaseChart } from './base-chart.js';

export class LineChart extends BaseChart {
  draw(data, labels, max, colors) {
    this.clear();
    
    const chartAreaHeight = this.height - this.margin - this.marginBottom;
    const step = (this.width - this.margin * 2) / (data.length - 1);
    const floor = this.height - this.margin - this.marginBottom;

    this.ctx.beginPath();
    this.ctx.strokeStyle = colors[1];
    this.ctx.lineWidth = 5;

    data.forEach((val, i) => {
      const x = this.margin + i * step;
      const y = floor - (val / max) * chartAreaHeight;
      i === 0 ? this.ctx.moveTo(x, y) : this.ctx.lineTo(x, y);
    });
    this.ctx.stroke();

    this.drawLegend(labels, colors);
  }
}