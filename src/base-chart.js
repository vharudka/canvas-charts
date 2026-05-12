export class BaseChart {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');

    this.margin = 20;
    this.marginBottom = 220;

    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  drawLegend(labels, colors) {
    const boxSize = 12;
    const lineHeight = 20;
    const maxLabelChars = 60;
    const maxVisibleChars = maxLabelChars - 3;
    const labelOffset = 20;
    const legendPadding = 10;

    const startX = this.margin;
    const startY = this.height - (labels.length * lineHeight) - legendPadding;

    this.ctx.font = '12px Arial';
    this.ctx.textBaseline = 'middle';

    labels.forEach((label, i) => {
      const y = startY + (i * lineHeight);

      this.ctx.fillStyle = colors[i];
      this.ctx.fillRect(startX, y, boxSize, boxSize);

      this.ctx.fillStyle = '#1d1d1d';

      const cleanLabel =
        label.length > maxLabelChars
          ? label.substring(0, maxVisibleChars) + "..."
          : label;

      this.ctx.fillText(cleanLabel, startX + labelOffset, y + boxSize / 2);
    });
  }
}