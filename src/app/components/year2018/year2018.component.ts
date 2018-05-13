import {Component, OnInit, ViewChild} from '@angular/core';
import { ToggleViewService } from '../../services/toggleview.service';
import {ColorsObject} from '../../objects/colors.object';
import {PointObject} from '../../objects/point.object';
import { ToggleDisplayService } from '../../services/toggle-display.service';

@Component({
  selector: 'app-year2018',
  templateUrl: './year2018.component.html',
  styleUrls: ['./year2018.component.css']
})
export class Year2018Component implements OnInit {

  @ViewChild('arrow')
  canvas: any;

  colors: ColorsObject;

  constructor(public toggleView: ToggleViewService, public toggleDisplayService: ToggleDisplayService) { }

  ngOnInit() {
    this.colors = this.toggleView.color;
  }

  createPoint(beginX, beginY) {
    const point = new PointObject();
    point.beginX = beginX;
    point.beginY = beginY;
    return point;
  }

  toggleDisplay(display: string): void {
    this.toggleDisplayService.setDisplay(display);
  }
}


