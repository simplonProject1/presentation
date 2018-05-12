import {Component, OnInit} from '@angular/core';
import { ToggleDisplayService } from '../../services/toggle-display.service';

@Component({
  selector: 'app-mp2019',
  templateUrl: './mp2019.component.html',
  styleUrls: ['./mp2019.component.css']
})
export class Mp2019Component {

  constructor(public toggleDisplayService: ToggleDisplayService) {}

  toggleDisplay(display: string): void {
    this.toggleDisplayService.setDisplay(display);
  }

  get year(): number {
    return this.toggleDisplayService.year;
  }

}
