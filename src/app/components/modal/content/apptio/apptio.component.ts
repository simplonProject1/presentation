import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apptio',
  templateUrl: './apptio.component.html',
  styleUrls: ['./apptio.component.css']
})
export class ApptioComponent {

  constructor(public activeModal: NgbActiveModal) {}

}
