import { Component, OnInit } from '@angular/core';

import { faSmileWink } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.scss']
})
export class FinishedComponent implements OnInit {

  faSmileWink = faSmileWink;

  constructor() { }

  ngOnInit() {
  }

}
