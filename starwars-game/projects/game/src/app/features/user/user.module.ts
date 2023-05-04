import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from './routes';
import { FormUserComponent } from './form-user/form-user.component';



@NgModule({
  declarations: [
    CreateUserComponent,
    FormUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ]
})
export class UserModule { }
