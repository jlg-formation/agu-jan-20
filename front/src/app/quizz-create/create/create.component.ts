import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private quizz: QuizzService) {}

  ngOnInit() {}

  submit() {
    console.log('submit');
    this.quizz.createCurrent(this.f.value.name);
    this.router.navigateByUrl('/setup');
  }
}
