import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {PointObject} from '../../objects/point.object';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.css']
})
export class ArrowComponent implements OnInit {

  @ViewChild('arrow')
  canvas: any;

  @Input()
  lines: PointObject[];

  @Input()
  direction: string;

  @Input()
  color: string;

  constructor() { }

  ngOnInit() {
    this.createCanvas();
  }

  createCanvas() {
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');
    this.createArrow(this.lines[this.lines.length - 1]);
    ctx.moveTo(this.lines[0].beginX, this.lines[0].beginY);
    for (const point of this.lines) {
      this.drawLine(ctx, point);
    }
    ctx.stroke();
  }

  drawLine(ctx, point) {
    ctx.strokeStyle = this.color;
    ctx.lineTo(point.beginX, point.beginY);
    ctx.lineWidth = 7;
  }

  createArrow(point) {
    switch (this.direction) {
      case 'up':
        this.lines.push(this.createPoint(point.beginX - 5, point.beginY));
        this.lines.push(this.createPoint(point.beginX, point.beginY - 10));
        this.lines.push(this.createPoint(point.beginX + 5, point.beginY));
        this.lines.push(this.createPoint(point.beginX, point.beginY));
        break;
      case 'right':
        this.lines.push(this.createPoint(point.beginX, point.beginY - 5));
        this.lines.push(this.createPoint(point.beginX + 10, point.beginY));
        this.lines.push(this.createPoint(point.beginX, point.beginY + 5));
        this.lines.push(this.createPoint(point.beginX, point.beginY));
        break;
      case 'down':
        this.lines.push(this.createPoint(point.beginX - 5, point.beginY));
        this.lines.push(this.createPoint(point.beginX, point.beginY + 10));
        this.lines.push(this.createPoint(point.beginX + 5, point.beginY));
        this.lines.push(this.createPoint(point.beginX, point.beginY));
        break;
      case 'left':
        this.lines.push(this.createPoint(point.beginX, point.beginY - 5));
        this.lines.push(this.createPoint(point.beginX - 10, point.beginY));
        this.lines.push(this.createPoint(point.beginX, point.beginY + 5));
        this.lines.push(this.createPoint(point.beginX, point.beginY));
        break;
      default:
        break;
    }
  }

  createPoint(beginX, beginY) {
    const point = new PointObject();
    point.beginX = beginX;
    point.beginY = beginY;
    return point;
  }

}


