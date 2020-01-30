import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedComponent } from './finished.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('FinishedComponent', () => {
  let component: FinishedComponent;
  let fixture: ComponentFixture<FinishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [ FinishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
