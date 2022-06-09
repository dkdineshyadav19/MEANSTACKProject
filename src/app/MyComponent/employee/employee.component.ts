import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService:EmployeeService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm)
  {
    console.log()
    this.employeeService.postEmployee(form.value).subscribe(
      (res)=>{
        console.log(res)
      }
    );

  }
}
