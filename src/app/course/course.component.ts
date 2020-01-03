import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class courseComponent implements OnInit{
constructor(private http:HttpClient){
this.http.get("http://api.github.com/users").subscribe(user =>{
    console.log(user);
});
}
ngOnInit(){

}
// users=[
//     {
//         photo:"https://cdn.pixabay.com/photo/2018/09/07/13/28/rabbit-3660673_1280.jpg",
//         name:'manu',
//         age:20,
//         company:'tcs',
//         salary:2000,
//         designation:'java developer',
//         gender:"female",
//         location:'bangalore'

//     },
//     {
//         photo:"https://cdn.pixabay.com/photo/2018/09/07/13/28/rabbit-3660673_1280.jpg",
//         name:'manu',
//         age:20,
//         company:'tcs',
//         salary:2000,
//         designation:'java developer',
//         gender:"female",
//         location:'bangalore'

//     },
//     {
//         photo:"https://cdn.pixabay.com/photo/2018/09/07/13/28/rabbit-3660673_1280.jpg",
//         name:'manu',
//         age:20,
//         company:'tcs',
//         salary:2000,
//         designation:'java developer',
//         gender:"female",
//         location:'bangalore'

//     },
//     {
//         photo:"https://cdn.pixabay.com/photo/2018/09/07/13/28/rabbit-3660673_1280.jpg",
//         name:'manu',
//         age:20,
//         company:'tcs',
//         salary:2000,
//         designation:'java developer',
//         gender:"female",
//         location:'bangalore'

//     }
// ];
// addnewuser(){
//     this.users.push({
//         photo:"https://cdn.pixabay.com/photo/2018/09/07/13/28/rabbit-3660673_1280.jpg",
//         name:'manu',
//         age:20,
//         company:'tcs',
//         salary:2000,
//         designation:'java developer',
//         gender:"female",
//         location:'bangalore'

//     })
// }
// removeuser(user){
// let index=this.users.indexOf(user);
// this.users.splice(index,1)
// }
}
