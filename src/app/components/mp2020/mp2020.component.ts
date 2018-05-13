import {Component, OnInit, ViewChild} from '@angular/core';
import { ToggleDisplayService } from '../../services/toggle-display.service';
import {PointObject} from '../../objects/point.object';
import {DisplayMP} from '../mp2019/mp2019.component';

@Component({
  selector: 'app-mp2020',
  templateUrl: './mp2020.component.html',
  styleUrls: ['./mp2020.component.css']
})
export class Mp2020Component implements OnInit {

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
