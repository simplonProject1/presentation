import {Component, Input} from '@angular/core';
import {MatrixComponent} from '../modal/content/matrix/matrix.component';
import {ApptioComponent} from '../modal/content/apptio/apptio.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

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
      case 'matrix':
        modalRef = this.modalService.open(MatrixComponent);
        modalRef.componentInstance.name = 'World';
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
