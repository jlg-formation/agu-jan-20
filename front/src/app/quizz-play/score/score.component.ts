import { Component, OnInit } from '@angular/core';
import { faSmileWink } from '@fortawesome/free-regular-svg-icons';
import { faPoo } from '@fortawesome/free-solid-svg-icons';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  faSmileWink = faSmileWink;
  faPoo = faPoo;
  constructor(public quizz: QuizzService) { }

  ngOnInit() {
  }

}
