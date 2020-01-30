import { Component, OnInit, ViewChild } from '@angular/core';
import { QuizzService } from 'src/app/services/quizz.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TimerComponent } from 'src/app/widget/timer/timer.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @ViewChild(TimerComponent, { static: false }) timer: TimerComponent;

  f = new FormGroup({
    givenAnswer: new FormControl('', Validators.required)
  });
  constructor(public quizz: QuizzService, private router: Router) {}

  ngOnInit() {}

  submit() {
    console.log('submit...');
    const givenAnswer = this.f.value.givenAnswer;
    console.log('givenAnswer: ', givenAnswer);
    const correctAnswer = this.quizz.current.questions[
      this.quizz.progress.questionId
    ].correctAnswer;
    console.log('correctAnswer: ', correctAnswer);
    if (correctAnswer === givenAnswer) {
      this.quizz.progress.score++;
    }
    this.quizz.progress.questionId++;
    this.quizz.saveProgress();
    if (
      this.quizz.progress.questionId === this.quizz.current.questions.length
    ) {
      this.router.navigateByUrl('/score');
      return;
    }
    this.f.reset();
    this.timer.ngOnDestroy();
    this.timer.ngOnInit();
  }

  timeout(msg: string) {
    console.log('dring dring: ' + msg);
    this.submit();
  }
}
