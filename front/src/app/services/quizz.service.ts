import { Injectable } from '@angular/core';
import { Quizz } from '../entities/quizz';
import { Question } from '../interfaces/question';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  current = this.getCurrent();
  constructor() {}

  createCurrent(name: string) {
    this.current = new Quizz();
    this.current.name = name;
    this.saveCurrent();
  }

  saveCurrent() {
    localStorage.setItem('current', JSON.stringify(this.current));
  }

  getCurrent(): Quizz {
    const str = localStorage.getItem('current');
    if (!str) {
      return undefined;
    }
    const q = JSON.parse(str);
    // q.__proto__ = Quizz.prototype;
    Object.setPrototypeOf(q, Quizz.prototype);
    return q;
  }

  addQuestion(question: Question) {
    this.current.questions.push(question);
    this.saveCurrent();
  }
}
