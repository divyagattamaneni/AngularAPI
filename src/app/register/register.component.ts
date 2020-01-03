import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validator, Validators} from '@angular/forms';
import { CustomValidators } from '../name.validators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  //to create r3eactive form we need to import formgroup,form control class from angular forms module
  register = new FormGroup({//forms this is form-group parent 
      username:new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern('jspiders'),CustomValidators.removespace]),//we have to create form controls
      password:new FormControl("",Validators.required)
    
    
  })
  get username(){
    return this.register.get("username");
  }
  get password(){
    return this.register.get("password");
  }

  ngOnInit() {
  }

}
