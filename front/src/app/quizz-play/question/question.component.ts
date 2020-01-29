import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/services/quizz.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  f = new FormGroup({
    givenAnswer: new FormControl('', Validators.required)
  });
  constructor(public quizz: QuizzService) {}

  ngOnInit() {}

  submit() {
    console.log('submit...');
  }
}
