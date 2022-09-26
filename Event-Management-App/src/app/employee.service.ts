import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }
  loadEmployeeData():Observable<Employee[]>{
    return this.http.get<Employee[]>("http://localhost:3000/employees");
  }
  storeEmployeeData(employee:any):Observable<Employee>{
    return this.http.post<Employee>("http://localhost:3000/employees",employee);
  }
  findEmployeeById(id:any):Observable<Employee>{
    return this.http.get<Employee>("http://localhost:3000/employees/"+id);
  }
  delete(id:any):Observable<any>{
    return this.http.delete<any>("http://localhost:3000/employees/"+id);
  }
  updateEmployee(employee:any):Observable<Employee>{
    return this.http.put<Employee>("http://localhost:3000/employees", employee);
  }
}
