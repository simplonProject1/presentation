import { Component, OnInit } from '@angular/core';
import { ToggleDisplayService } from '../../services/toggle-display.service';

@Component({
  selector: 'app-ppm2019',
  templateUrl: './ppm2019.component.html',
  styleUrls: ['./ppm2019.component.css']
})
export class Ppm2019Component implements OnInit {

  constructor(public toggleDisplayService: ToggleDisplayService) {}

  toggleDisplay(display: string): void {
    this.toggleDisplayService.setDisplay(display);
  }

  get year(): number {
    return this.toggleDisplayService.year;
  }

  ngOnInit() {
  }

}
