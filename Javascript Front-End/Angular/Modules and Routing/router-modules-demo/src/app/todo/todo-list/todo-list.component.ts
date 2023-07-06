import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../../types/Todo';
import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  appTodos: Todo[] = [];

  constructor(
    private todoService: TodoService,
    private globalLoaderService: GlobalLoaderService
  ) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.globalLoaderService.showLoader();
    setTimeout(() => {
      this.todoService.getTodos(10).subscribe({
        next: (todos) => {
          this.appTodos = todos;
          this.globalLoaderService.hideLoader();
        },
        error: (err) => {
          console.error(err);
          this.globalLoaderService.hideLoader();
        },
      });
    }, 2500);
  }
}
