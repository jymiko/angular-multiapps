import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  testControl = new FormControl('', Validators.required);
  errorMessages = { required: 'The name field is required' };
  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl(0, Validators.required),
  })
  constructor() { }

  ngOnInit(): void {
  }

}
