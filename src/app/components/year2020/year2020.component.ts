import {Component, OnInit, ViewChild} from '@angular/core';
import { ToggleViewService } from '../../services/toggleview.service';
import {ColorsObject} from '../../objects/colors.object';
import {PointObject} from '../../objects/point.object';

@Component({
  selector: 'app-year2020',
  templateUrl: './year2020.component.html',
  styleUrls: ['./year2020.component.css']
})
export class Year2020Component implements OnInit {

  @ViewChild('arrow')
  canvas: any;

  colors: ColorsObject;

  constructor(public toggleView: ToggleViewService) { } // konstruktor musi być w dwóch komponentach, żeby oba komponenty z niego korzystały

  ngOnInit() {
    this.colors = this.toggleView.color;
  }

  createPoint(beginX, beginY) {
    const point = new PointObject();
    point.beginX = beginX;
    point.beginY = beginY;
    return point;
  }
}
