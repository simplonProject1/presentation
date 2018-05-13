import { Injectable } from '@angular/core';
import { DisplayObject } from '../objects/display.object';

@Injectable({
  providedIn: 'root'
})
export class ToggleDisplayService {

  display: DisplayObject = new DisplayObject();

  year = 2019;

  constructor() { }

  setDisplay(display: string): void {
    this.display[display] = !this.display[display];
  }

  setYear(currentYear: number): void {
    this.year = currentYear;
  }

}
