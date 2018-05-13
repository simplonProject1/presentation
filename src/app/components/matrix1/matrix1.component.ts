import { Component, OnInit } from '@angular/core';
import { ToggleDisplayService } from '../../services/toggle-display.service';

@Component({
  selector: 'app-matrix1',
  templateUrl: './matrix1.component.html',
  styleUrls: ['./matrix1.component.css']
})
export class Matrix1Component implements OnInit {

  constructor(public toggleDisplayService: ToggleDisplayService) { }

  toggleDisplay(display: string): void {
    this.toggleDisplayService.setDisplay(display);
  }

  get year(): number {
    return this.toggleDisplayService.year;
  }

  ngOnInit() {
  }

}
