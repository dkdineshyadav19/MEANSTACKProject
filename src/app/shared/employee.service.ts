import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { Employee } from './employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee:Employee;
  employee: Employee[];
  readonly baseURL='http://localhost:3000/employees';

  constructor(public http:HttpClient) { }
  postEmployee(emp:Employee){
    return this.http.post(this.baseURL,emp);
  }
}
