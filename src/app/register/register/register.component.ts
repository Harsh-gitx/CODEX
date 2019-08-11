import { Component, OnInit } from '@angular/core';
import {User} from './User';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { confirmPassValidator } from './Validation'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User
  registerForm=this._builder.group({
    name:[''],
    email:[''],
    pass:['', Validators.required],
    confirmPass:['',[Validators.required]],
    mobile:['']
  },{validator:confirmPassValidator});
  constructor(private _router:Router,private _builder:FormBuilder) { 
this.user=new User()
  }
  
  ngOnInit() {

  }

  //this._builder.gr

  register=()=>{
    console.log(this.user)
    localStorage.setItem(this.user.email,JSON.stringify(this.user));
  //navigate them to login
        this._router.navigate(["/login"])
    


  }
}
