import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [UserListComponent],
})
export class UserModule {}
