import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzPlayRoutingModule } from './quizz-play-routing.module';
import { ListComponent } from './list/list.component';
import { ScoreComponent } from './score/score.component';
import { QuestionComponent } from './question/question.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WidgetModule } from '../widget/widget.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListComponent, ScoreComponent, QuestionComponent],
  imports: [
    CommonModule,
    QuizzPlayRoutingModule,
    FontAwesomeModule,
    WidgetModule,
    ReactiveFormsModule
  ]
})
export class QuizzPlayModule { }
