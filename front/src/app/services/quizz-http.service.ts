import { Injectable } from '@angular/core';
import { QuizzService } from './quizz.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizzHttpService extends QuizzService {
  constructor(private http: HttpClient) {
    super();
    console.log('http quizz service');
    this.refresh();
  }

  refresh() {
    this.http.get('http://localhost:3000/v1/quizz').subscribe();
  }
}
