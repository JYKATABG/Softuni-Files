import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule, SharedModule],
  exports: [TodoListComponent],
})
export class TodoModule {}
