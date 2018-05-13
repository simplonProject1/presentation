import { Component } from '@angular/core';
import {ToggleDisplayService} from '../../services/toggle-display.service';

@Component({
  selector: 'app-mp2020',
  templateUrl: './mp2020.component.html',
  styleUrls: ['./mp2020.component.css']
})
export class Mp2020Component {

  constructor(public toggleDisplayService: ToggleDisplayService) {}

  toggleDisplay(display: string): void {
    this.toggleDisplayService.setDisplay(display);
  }

  get year(): number {
    return this.toggleDisplayService.year;
  }

}
