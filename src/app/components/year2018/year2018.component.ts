import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ToggleViewService } from '../../services/toggleview.service';
import {ColorsObject} from '../../objects/colors.object';
import {LineObject} from '../../objects/line';

@Component({
  selector: 'app-year2018',
  templateUrl: './year2018.component.html',
  styleUrls: ['./year2018.component.css']
})
export class Year2018Component implements OnInit {

  @ViewChild('arrow')
  canvas: any;

  colors: ColorsObject;

  greenLines: LineObject[] = [];
  redLines: LineObject[] = [];

  constructor(public toggleView: ToggleViewService) { } // konstruktor musi być w dwóch komponentach, żeby oba komponenty z niego korzystały

  ngOnInit() {
    this.colors = this.toggleView.color;
    this.createCanvas();
    this.greenLines.push(this.createLine(5, 5, 200, 100));
    this.redLines.push(this.createLine(15, 15, 200, 100));
  }

  createCanvas() {
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');
    ctx.moveTo(5, 5);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 7;
    ctx.lineTo(200, 100);
    ctx.stroke();
  }

  createLine(beginX, beginY, endX, endY) {
    const line = new LineObject();
    line.beginX = beginX;
    line.beginY = beginY;
    line.endX = endX;
    line.endY = endY;
    return line;
  }
}


