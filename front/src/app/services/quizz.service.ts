import { Injectable } from '@angular/core';
import { Quizz } from '../entities/quizz';
import { Question } from '../interfaces/question';
import { Progress } from '../interfaces/progress';
import { QuizzMap } from '../interfaces/quizz-map';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {


  current = this.getCurrent();
  quizzMap = this.getQuizzMap();
  progress = this.getProgress();

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

  saveQuizz() {
    this.quizzMap[this.current.name] = this.current;
    this.saveQuizzMap();
  }

  getQuizzMap(): QuizzMap {
    const str = localStorage.getItem('quizz-map');
    if (!str) {
      return {};
    }
    const qm = JSON.parse(str);
    for (const name of Object.keys(qm)) {
      Object.setPrototypeOf(qm[name], Quizz.prototype);
    }
    return qm;
  }

  saveQuizzMap() {
    localStorage.setItem('quizz-map', JSON.stringify(this.quizzMap));
  }

  hasQuizz() {
    return Object.keys(this.quizzMap).length > 0;
  }

  getQuizzList(): Quizz[] {
    return Object.values(this.quizzMap);
  }

  setCurrent(q: Quizz) {
    this.current = q;
    this.saveCurrent();
  }

  getProgress(): Progress {
    const str = localStorage.getItem('progress');
    if (!str) {
      return undefined;
    }
    return JSON.parse(str);
  }

  initProgress() {
    this.progress = {
      score: 0,
      questionId: 0
    };
    this.saveProgress();
  }

  saveProgress() {
    localStorage.setItem('progress', JSON.stringify(this.progress));
  }
}
