import { Component ,OnInit} from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit{
  employee:any
  constructor(private services:EmployeeService ,private router:Router){

  }
  ngOnInit(): void {
    this.services.getAllEmployees().then(res=>res.json()).then(data=>this.employee=data)
  }
  redirectToEmployee(id:any){
    this.router.navigateByUrl(`employee/${id}`)
  }
  removeEmployee(id:any){
    this.services.removeEmployee(id).then(res=>this.ngOnInit())
  }
 
  
}
