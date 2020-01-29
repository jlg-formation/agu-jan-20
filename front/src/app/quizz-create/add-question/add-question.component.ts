import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz.service';
import { Question } from 'src/app/interfaces/question';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  f = new FormGroup({
    label: new FormControl('Quelle est la capitale de la France ?', [
      Validators.required,
      Validators.maxLength(200)
    ]),
    answerA: new FormControl('Bruxelles', Validators.required),
    answerB: new FormControl('Paris', Validators.required),
    answerC: new FormControl('Bucarest', Validators.required),
    answerD: new FormControl('Moscou', Validators.required),
    correctAnswer: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private quizz: QuizzService) {}

  ngOnInit() {}

  submit() {
    console.log('add question submit');
    this.quizz.addQuestion(this.f.value as Question);
    this.router.navigateByUrl('/setup');
  }
}
