import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-year2019',
  templateUrl: './year2019.component.html',
  styleUrls: ['./year2019.component.css']
})
export class Year2019Component implements OnInit {

  fullImagePath: string;

  constructor() {
    this.fullImagePath = 'assets/images/gitqr.png';
  }

  ngOnInit() {
  }

}

