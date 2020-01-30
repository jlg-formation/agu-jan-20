import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { QuizzHttpService } from './quizz-http.service';

describe('QuizzHttpService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: QuizzHttpService = TestBed.get(QuizzHttpService);
    expect(service).toBeTruthy();
  });
});
