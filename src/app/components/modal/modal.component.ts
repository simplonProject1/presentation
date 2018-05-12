import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MatrixComponent} from './content/matrix/matrix.component';
import {ApptioComponent} from '../apptio/apptio.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {

  @Input()
  content: string;

  constructor(private modalService: NgbModal) {}

  // open() {
  //   switch (this.content) {
  //     case 'matrix':
  //       const modalRef = this.modalService.open(MatrixComponent);
  //       modalRef.componentInstance.name = 'World';
  //       break;
  //     case ('apptio'):
  //       const modalRef = this.modalService.open(ApptioComponent);
  //       modalRef.componentInstance.name = 'World';
  //       break;
  //     default:
  //       break;
  //   }
  //
  // }

  ngOnInit() {
  }

}
