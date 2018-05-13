import { Component } from '@angular/core';
import { ToggleDisplayService } from '../../services/toggle-display.service';

@Component({
  selector: 'app-ppm2020',
  templateUrl: './ppm2020.component.html',
  styleUrls: ['./ppm2020.component.css']
})
export class Ppm2020Component {

  constructor(public toggleDisplayService: ToggleDisplayService) {}

  toggleDisplay(display: string): void {
    this.toggleDisplayService.setDisplay(display);
  }

  get year(): number {
    return this.toggleDisplayService.year;
  }

}
