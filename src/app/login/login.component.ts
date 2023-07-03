import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {Router} from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginform=new FormGroup({
    name:new FormControl(),
    password:new FormControl(),})
  constructor(private router:Router){

  }
  ngOnInit(): void {
    
  }
authenticate(){
  console.log(this.loginform.value);
  this.router.navigateByUrl("index")
  
}
get name(){
  return this.loginform.get("name")
}
get password(){
  return this.loginform.get("password")
}
}
