import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/register/register/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;
  invalidUser:boolean;
  constructor(private _router:Router) { 
    this.user=new User();

  }

  clearUser=()=>{
    this.invalidUser=true;
    this.user=new User();
  }

login=()=>{
    console.log(this.user.email);
    console.log(this.user.password)

    //compare the login credentials
    let userObj=JSON.parse(localStorage.getItem(this.user.email))
    if(userObj!=null)
{
  if(this.user.email==userObj.email   &&   this.user.password==userObj.password){
  console.log("valid user")
  this._router.navigate(["/home"])
    sessionStorage.setItem("key",userObj.name)

}
else{
  this.clearUser()
}
}
else{
  this.clearUser()
}
}


  ngOnInit() {
    //check whether the session exists and navigate
  }
  navigateToRegister=()=>this._router.navigate(['register'])
}
