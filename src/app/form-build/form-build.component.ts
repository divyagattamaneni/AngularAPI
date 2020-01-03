import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-build',
  templateUrl: './form-build.component.html',
  styleUrls: ['./form-build.component.css']
})
export class FormBuildComponent implements OnInit {

  constructor(private fb:FormBuilder) { }//services Dependency Injection
  ContactForm = this.fb.group({
    name:["",Validators.required],
    email:["",Validators.required]
  });

  get name(){
    return this.ContactForm.get("name");
  } gj7 
  ngOnInit() {
  }

}
