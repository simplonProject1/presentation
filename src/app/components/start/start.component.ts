import {Component} from '@angular/core';
import {ApptioComponent} from '../apptio/apptio.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Mp2019Component} from '../mp2019/mp2019.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})

export class StartComponent {

  constructor(private modalService: NgbModal) { }

  open(content) {

    let modalRef: any;

    switch (content) {
      case 'mp2019':
        modalRef = this.modalService.open(Mp2019Component);
        modalRef.componentInstance.name = 'World'; // co to po co?
        break;
      case ('apptio'):
        modalRef = this.modalService.open(ApptioComponent);
        modalRef.componentInstance.name = 'World';
        break;
      default:
        break;
    }
  }
}
