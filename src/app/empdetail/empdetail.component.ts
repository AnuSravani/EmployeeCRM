import { Component ,OnInit} from '@angular/core';
import {ActivatedRoute}from '@angular/router';
import { EmployeeService } from '../services/employee.service';

//
@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent implements OnInit {
  id:any
  empdata:any
  constructor(private route:ActivatedRoute,private service:EmployeeService){
    this.id=this.route.snapshot.params["id"]
    
  } 
ngOnInit(): void {
 this.service.getEmployeeDetail(this.id).then(res=>res.json()).then(data=>this.empdata=data)
  
}
}
