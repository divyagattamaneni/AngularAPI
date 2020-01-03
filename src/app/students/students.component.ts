import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Form } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  form= new FormGroup({
    studentList : new FormArray([])
    
  });
  //use getter
  get getstudents(){
    return this.form.get('studentList')
  };

  addStudent(student){
        (this.getstudents as FormArray).push(new FormControl(student.value))
  }

  removestudent(student){
    let index= (this.getstudents as FormArray).controls.indexOf(student);
    (this.getstudents as FormArray).removeAt(index);

  }

  ngOnInit() {
  }

}
