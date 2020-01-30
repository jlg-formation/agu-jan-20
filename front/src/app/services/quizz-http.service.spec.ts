import { TestBed } from '@angular/core/testing';

import { QuizzHttpService } from './quizz-http.service';

describe('QuizzHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizzHttpService = TestBed.get(QuizzHttpService);
    expect(service).toBeTruthy();
  });
});
