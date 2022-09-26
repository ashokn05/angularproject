import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-service',
  templateUrl: './employee-service.component.html',
  styleUrls: ['./employee-service.component.css']
})
export class EmployeeServiceComponent implements OnInit {
  empDetail!: FormGroup;
  employee:any;
  empObj : Employee = new Employee();
  constructor(public router:Router, public es: EmployeeService, public formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.empDetail = this.formBuilder.group({
      id : [''],
      first_name:[''],
      last_name:[''],
      email:['']
    });
    let obj = sessionStorage.getItem("employeeInfo");
    if(obj != null){
      this.employee = JSON.parse(obj);
    }
  }

  ViewAll(){
    this.router.navigate(["employee"]);
  }

  deleteEmployee(id:any){
    this.es.delete(id).subscribe({
      next:(result:any)=>console.log(result),
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
  }
  updateEmployee(){
    this.empObj.id = this.empDetail.value.id;
    this.empObj.first_name = this.empDetail.value.first_name;
    this.empObj.last_name = this.empDetail.value.last_name;
    this.empObj.email = this.empDetail.value.email;

    this.es.updateEmployee(this.empObj).subscribe({
    // (res=>{
    //   console.log(res);
    //   this.ViewAll();
    // },err=>{
    //   console.log(err);
    next:(res:any)=>console.log(res),
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
  }

  editEmployee(emp : Employee) {
    this.empDetail.controls['id'].setValue(emp.id);
    this.empDetail.controls['first_name'].setValue(emp.first_name);
    this.empDetail.controls['last_name'].setValue(emp.last_name);
    this.empDetail.controls['email'].setValue(emp.email);

  }

}
