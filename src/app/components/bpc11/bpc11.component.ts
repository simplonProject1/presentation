import { Component } from '@angular/core';
import { ToggleDisplayService } from '../../services/toggle-display.service';

@Component({
  selector: 'app-bpc11',
  templateUrl: './bpc11.component.html',
  styleUrls: ['./bpc11.component.css']
})
export class Bpc11Component {

  constructor(public toggleDisplayService: ToggleDisplayService) {}

  toggleDisplay(display: string): void {
    this.toggleDisplayService.setDisplay(display);
  }

  get year(): number {
    return this.toggleDisplayService.year;
  }
}
