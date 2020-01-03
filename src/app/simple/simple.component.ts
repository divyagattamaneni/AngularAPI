import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
  // users=['java','python']
  //color='pink';
  // toggleClass =false;
  // toggleState(){
  //   this.toggleClass=!this.toggleClass
  // }
  // dynamicCss(){
  //   return{
  //     'btn-danger':true,
  //    'background':this.toggleClass
  //   }
  // }
  // newOne(){
  //   return{
  //     'bg':true,
  //     'text-white':true,
  //     'mt-2':true,
  //     'background':this.toggleClass

  //   }
  // }
  users=[
    {
      name:'sai',
      age:20,
    gender:'male',
      country:'india'
    },
    {
      name:'sai',
      age:25,
      gender:'female',
      country:'india'
    },
    {
      name:'sai',
      age:20,
      gender:'male',
      country:'india'
    },
    {
      name:'sai',
      age:21,
      gender:'female',
      country:'india'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
