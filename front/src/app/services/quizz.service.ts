import { Injectable } from '@angular/core';
import { Quizz } from '../entities/quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  current: Quizz;
  constructor() {}

  createCurrent(name: string) {
    this.current = new Quizz();
    this.current.name = name;
  }
}
