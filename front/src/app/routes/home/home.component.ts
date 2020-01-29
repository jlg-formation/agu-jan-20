import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public quizz: QuizzService) { }

  ngOnInit() {
  }

}
