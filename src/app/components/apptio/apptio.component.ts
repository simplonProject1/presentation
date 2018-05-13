import {Component, OnInit, ViewChild} from '@angular/core';
import { ToggleDisplayService } from '../../services/toggle-display.service';
import {PointObject} from '../../objects/point.object';

@Component({
  selector: 'app-apptio',
  templateUrl: './apptio.component.html',
  styleUrls: ['./apptio.component.css']
})
export class ApptioComponent  implements OnInit {

  @ViewChild('arrow')
  canvas: any;

  displayMP: DisplayMP;

  constructor(public toggleDisplayService: ToggleDisplayService) {}

  toggleDisplay(display: string): void {
    this.toggleDisplayService.setDisplay(display);
  }

  get year(): number {
    return this.toggleDisplayService.year;
  }

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

}

export class DisplayMP {
  red: boolean;
  green: boolean;
}
