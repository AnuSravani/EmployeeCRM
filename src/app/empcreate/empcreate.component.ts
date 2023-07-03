import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { EmployeeService } from '../services/employee.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-empcreate',
  templateUrl: './empcreate.component.html',
  styleUrls: ['./empcreate.component.css']
})
export class EmpcreateComponent implements OnInit {
  empform=new FormGroup({
    name:new FormControl("",Validators.required),
    email:new FormControl("",Validators.required),
    department:new FormControl("",Validators.required),
    phone:new FormControl("",Validators.required),
    salary:new FormControl("",Validators.required)
  })
  get name(){
    return this.empform.get("name")
  }
  get email(){
    return this.empform.get("email")
  }
  get department(){
    return this.empform.get("department")
  }
  get phone(){
    return this.empform.get("phone")
  }
  get salary(){
    return this.empform.get("salary")
  }
  
constructor(private services:EmployeeService,private router:Router){

}
ngOnInit(): void {
  
}
saveemp(){
  console.log(this.empform.value);
  let data=this.empform.value
  this.services.createEmployee(data).then(res=>res.json()).then(data=>this.router.navigateByUrl("index"))
  

  
}
}
