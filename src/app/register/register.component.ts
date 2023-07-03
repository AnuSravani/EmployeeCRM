import { Component,OnInit} from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
regform=new FormGroup({
  username:new FormControl("",Validators.required),
  password:new FormControl("",Validators.required),
  email:new FormControl("",[Validators.required,Validators.email])
})
get username(){
  return this.regform.get("username")
}
get password(){
  return this.regform.get("password")
}
get email(){
  return this.regform.get("email")
}

constructor(private router:Router){

}
ngOnInit(): void {
  
}
signUp(){
  console.log(this.regform.value);
  this.router.navigateByUrl("")
  
}
}
