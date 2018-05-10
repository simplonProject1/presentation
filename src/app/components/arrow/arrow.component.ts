import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {LineObject} from '../../objects/line';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.css']
})
export class ArrowComponent implements OnInit {

  @ViewChild('arrow')
  canvas: any;

  @Input()
  lines: LineObject[];

  @Input()
  color: string;

  constructor() { }

  ngOnInit() {
    this.createCanvas();
  }

  createCanvas() {
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');
    for (const line of this.lines) {
      this.drawLine(ctx, line);
    }
    ctx.stroke();
  }

  drawLine(ctx, line) {
    console.log(line);
    ctx.moveTo(line.beginX, line.beginY);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 7;
    ctx.lineTo(line.endX, line.endY);
  }

}
