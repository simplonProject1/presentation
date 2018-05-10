import { Injectable } from '@angular/core';
import {ColorsObject} from '../objects/colors.object';

@Injectable()

export class ToggleViewService {

  color: ColorsObject = new ColorsObject();

  constructor() { }

  setColor(color: string): void {
    this.color[color] = !this.color[color];
  }
}
