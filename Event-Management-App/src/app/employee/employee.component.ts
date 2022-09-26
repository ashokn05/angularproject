import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeRef = new FormGroup({
    id: new FormControl(),
    first_name: new FormControl(),
    last_name: new FormControl(),
    email: new FormControl()
  });

  employees:Array<Employee>=[]
  constructor(public es:EmployeeService, public router:Router) { }

  ngOnInit(): void {
    this.loadEmployeeDetails();
  }

  loadEmployeeDetails(){
    this.es.loadEmployeeData().subscribe({
      next:(data:any)=>this.employees=data,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("Completed")
    })
  }
  storeEmployee(){
    let employee = this.employeeRef.value;
    this.es.storeEmployeeData(employee).subscribe({
      next:(data:any)=>console.log(data),
      error:(error:any)=>console.log(error),
      complete:()=>this.loadEmployeeDetails()
    })
    this.employeeRef.reset();
  }

  viewDetails(employee:any){
    sessionStorage.setItem("employeeInfo",JSON.stringify(employee));
    this.router.navigate(["employee-service"]);
  }

}
