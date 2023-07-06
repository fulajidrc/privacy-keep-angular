import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  loginForm:FormGroup;
  submitted = false
  constructor(private formBuilder: FormBuilder){
    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }


  onSubmit() {
    this.submitted = true
    console.warn(this.loginForm.value);
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }
}
