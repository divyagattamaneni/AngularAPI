import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  submit(form:NgForm){
    const username=form.value.username;
    const password=form.value.password;
    console.log(username,password);

   firebase
    .database()
    .ref('/jspiders')
    .set({
      username,
      password
    })
  }

}
