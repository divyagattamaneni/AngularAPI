import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'practice';

  constructor(){

  }

  ngOnInit(){
    var firebaseConfig = {
      apiKey: "AIzaSyA6WqE-13b8Cj5xO2z5XBPtTvWQXz7MShs",
      authDomain: "fullstacl-angular.firebaseapp.com",
      databaseURL: "https://fullstacl-angular.firebaseio.com",
      projectId: "fullstacl-angular",
      storageBucket: "fullstacl-angular.appspot.com",
      messagingSenderId: "43275856823",
      appId: "1:43275856823:web:a0355e88d0d48059db5632"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
