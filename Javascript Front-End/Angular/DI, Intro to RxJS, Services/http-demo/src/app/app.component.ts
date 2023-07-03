import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Todos } from './types/Todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  appTodos: Todos[] = [];

  constructor(public userService: UserService) {
    this.appTodos = userService.todos;
  }

  ngOnInit() {
    this.userService.getTodos().subscribe((todos) => {
      this.appTodos = todos;
      console.log(this.appTodos);
    });
  }
}
