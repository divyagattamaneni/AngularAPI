import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
   private playerUrl = "https://cricapi.com/api/playerFinder?apikey=OLy59KJhUBQoh4A7byG2MYpPNbv2&name="

  constructor(private http:HttpClient) { }
  playerInfo;
  searchPlayer(pid){
    this.http.get<any>(`${this.playerUrl}${pid}`)
    .subscribe(user => {
      console.log(user);
       this.playerInfo=user;
    })
  }

  ngOnInit() {
  }

}
