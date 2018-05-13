import { Component, OnInit, ViewChild } from '@angular/core';
import { ToggleDisplayService } from '../../services/toggle-display.service';
import { PointObject } from '../../objects/point.object';

@Component({
  selector: 'app-mp2019',
  templateUrl: './mp2019.component.html',
  styleUrls: ['./mp2019.component.css']
})
export class Mp2019Component implements OnInit {

  @ViewChild('arrow')
  canvas: any;

  displayMP: DisplayMP;

  constructor(public toggleDisplayService: ToggleDisplayService) {}

  createPoint(beginX, beginY) {
    const point = new PointObject();
    point.beginX = beginX;
    point.beginY = beginY;
    return point;
  }

  ngOnInit() {
    this.displayMP = new DisplayMP();
    this.displayMP.red = false;
    this.displayMP.green = false;
  }

  toggleColorMP2019(color: string): void {
    this.displayMP[color] = !this.displayMP[color];
  }

  toggleDisplay(display: string): void {
    this.toggleDisplayService.setDisplay(display);
  }

  get year(): number {
    return this.toggleDisplayService.year;
  }

}

export class DisplayMP {
  red: boolean;
  green: boolean;
}
