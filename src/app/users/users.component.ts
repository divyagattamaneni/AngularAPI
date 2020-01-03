import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  user=[
    {
      name:'sai',
      photo:'https://cdn.pixabay.com/photo/2015/06/08/15/06/woman-801872_1280.jpg',
      id:1,
      designation:'developer',
      doj:new Date('21/02/2019'),
      education:'B.tech',
      bfd:new Date('24/07/1998'),
      company:'testyantra',
      salary:20000,
      location:'banglore'
    },
    {
      name:'nani',
      photo:'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg',
      id:2,
      designation:'testing',
      doj:new Date('19/5/2018'),
      education:'mca',
      bfd:new Date('24/4/1995'),
      company:'test',
      salary:70000,
      location:'hydrabad'
    },
  {
    name:'tharun',
      photo:'https://cdn.pixabay.com/photo/2016/02/19/10/56/man-1209494_1280.jpg',
      id:3,
      designation:'BA',
      doj:new Date('12/8/2017'),
      education:'B.tech',
      bfd:new Date("14/11/1993"),
      company:'tcs',
      salary:120000,
      location:'chennai'
  },
  {
    name:'kavya lekhana',
      photo:'https://cdn.pixabay.com/photo/2015/04/20/17/39/woman-731894_1280.jpg',
      id:4,
      designation:'support developer',
      doj:new Date('28/6/2018'),
      education:'M.tech',
      bfd:new Date('17/9/1997'),
      company:'capgemini',
      salary:40000,
      location:'noida'
  }
  ]
   

  constructor() { }

  ngOnInit() {
  }

}
