import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public quizz: QuizzService) { }

  ngOnInit() {
  }

}
