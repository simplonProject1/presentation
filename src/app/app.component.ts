import { Component } from '@angular/core';
import {ToggleViewService} from './services/toggleview.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // co z tego co wyżej jest potrzebne
})
export class AppComponent {

  constructor (public toggleView: ToggleViewService) {
  }

  toggleColor(color: string): void {
    this.toggleView.setColor(color);
  }

}
