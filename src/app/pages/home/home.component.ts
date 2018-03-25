import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      type: ['', Validators.required],
      name: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      message: ['',[Validators.required]],

    });
  }



  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  hasError(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

}
