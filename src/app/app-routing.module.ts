import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  //localhost:4200 => display ListComponent
  {path:'', component: ListComponent},

  //localhost:4200/login => display LoginFormComponent
  {path:'login', component: LoginFormComponent},

  //localhost:4200/register => display RegisterFormComponent
  {path:'register', component: RegisterFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
