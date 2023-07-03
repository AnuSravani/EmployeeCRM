import { Component ,OnInit} from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router'
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  id:any
  constructor(private route:ActivatedRoute,private service:EmployeeService,private router:Router){
    this.id=this.route.snapshot.params["id"]
    console.log(this.id);
    
  }
    empform=new FormGroup({
      name:new FormControl("",Validators.required),
      email:new FormControl("",[Validators.required,Validators.email]),
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
    ngOnInit(): void {
      this.service.getEmployeeDetail(this.id).then(res=>res.json()).then(data=>this.updateform(data)
      )
    }
    updateform(data:any){
      // this.empform.patchvalue(data)
      this.empform.patchValue({
        name:data.name,
        email:data.email,
        department:data.department,
        phone:data.phone,
        salary:data.salary
      })
      
    }
    editEmployee(){
      let data=this.empform.value
      this.service.editEmployee(data,this.id).then(res=>res.json()).then(data=>this.router.navigateByUrl("index"))
    }
}
