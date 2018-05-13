import { Component, OnInit } from '@angular/core';
import { ToggleViewService } from './services/toggleview.service';
import { ToggleDisplayService } from './services/toggle-display.service';
import { DisplayObject} from './objects/display.object';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  display: DisplayObject;

  constructor (public toggleView: ToggleViewService, public toggleDisplayService: ToggleDisplayService) {
  }

  ngOnInit() {
    this.display = this.toggleDisplayService.display;
  }

  toggleColor(color: string): void {
    this.toggleView.setColor(color);
  }

  toggleDisplay(display: string): void {
    this.toggleDisplayService.setDisplay(display);
  }

  toggleYear(year: number): void {
    this.toggleDisplayService.setYear(year)
  }

  get year(): number {
    return this.toggleDisplayService.year;
  }

}
