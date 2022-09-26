import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeServiceComponent } from './employee-service/employee-service.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"employee",component:EmployeeComponent},
  {path:"employee-service", component:EmployeeServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
