import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmpcreateComponent } from './empcreate/empcreate.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const routes: Routes = [  
  {path:"register",component:RegisterComponent},
  {path:"index",component:HomeComponent},
  {path:"employee/add",component:EmpcreateComponent},
  {path:"employee/:id",component:EmpdetailComponent},
  {path:"employee-edit/:id",component:EmployeeEditComponent},
  {path:"",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
