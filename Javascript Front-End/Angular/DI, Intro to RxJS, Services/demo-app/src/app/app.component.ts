import { Component } from '@angular/core';
import { User } from './types/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Company demo';

  users: User[] = [
    { name: 'Penka', age: 27 },
    { name: 'Sasho', age: 13 },
    { name: 'Gencho', age: 42 },
    { name: 'Vanko', age: 68 },
  ];

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    if (
      inputAge.value === '' ||
      inputName.value === '' ||
      Number(inputAge.value) >= 90 ||
      Number(inputAge.value) <= 0
    ) {
      alert('Enter valid user data');
      this.clearInput(inputName, inputAge);
      return;
    }
    for (let user of this.users) {
      if (inputName.value === user.name) {
        alert(`${user.name} is already in the company! Try again!`);
        this.clearInput(inputName, inputAge);
        return;
      }
    }

    let user = { name: inputName.value, age: Number(inputAge.value) };
    this.users.push(user);
    this.clearInput(inputName, inputAge);
  }

  clearInput(name: HTMLInputElement, age: HTMLInputElement) {
    name.value = '';
    age.value = '';
  }
}
