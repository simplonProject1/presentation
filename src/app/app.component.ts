import { Component } from '@angular/core';
import {ToggleViewService} from './services/toggleview.service';
import {ToggleDisplayService} from './services/toggle-display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // co z tego co wyżej jest potrzebne
})
export class AppComponent {

  constructor (public toggleView: ToggleViewService, public toggleDisplayService: ToggleDisplayService) {
  }

  toggleColor(color: string): void {
    this.toggleView.setColor(color);
  }

  toggleDisplay(display: string): void {
    this.toggleDisplayService.setDisplay(display);
  }

}
