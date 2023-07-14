import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../types/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  submitHandler(form: NgForm): void {
    if (!form) return;

    if (form.invalid) {
      return;
    }

    const value: User = form.value;
    console.log(value.email);
    console.log(value.password);
  }
}
