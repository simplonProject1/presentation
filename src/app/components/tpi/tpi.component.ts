import { Component } from '@angular/core';
import { ToggleDisplayService } from '../../services/toggle-display.service';

@Component({
  selector: 'app-tpi',
  templateUrl: './tpi.component.html',
  styleUrls: ['./tpi.component.css']
})
export class TpiComponent {

  constructor(public toggleDisplayService: ToggleDisplayService) {}

  toggleDisplay(display: string): void {
    this.toggleDisplayService.setDisplay(display);
  }

  get year(): number {
    return this.toggleDisplayService.year;
  }
}
