export class BaseChart {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');

    this.margin = 20;

    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}