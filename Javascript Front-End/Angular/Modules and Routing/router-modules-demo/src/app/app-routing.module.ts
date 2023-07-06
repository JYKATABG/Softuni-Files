import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserResolver } from './user/user-detail/user-detail.resolver';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user/list' },
  { path: 'user/list', component: UserListComponent },
  {
    path: 'user/detail/:id',
    resolve: { user: UserResolver },
    component: UserDetailComponent,
  },

  { path: 'todo-list', component: TodoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
