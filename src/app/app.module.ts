import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { from } from 'rxjs';
import { SimpleComponent } from './simple/simple.component';
import { CustomDirective } from './custom.directive';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentsComponent } from './students/students.component';
import { FormBuildComponent } from './form-build/form-build.component';
import { RouterModule,Routes} from '@angular/router';
import { PlayerComponent } from './player/player.component'
import { HttpClient, HttpClientModule } from '@angular/common/http';

const Router:Routes=[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'Findplayer',component:PlayerComponent},
  {path:'**',component:PagenotfoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    CustomDirective,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    HomeComponent,
    UsersComponent,
    SimpleComponent,
    ContactComponent,
    StudentsComponent,
    FormBuildComponent,
    PlayerComponent
  ],

 
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule ,RouterModule.forRoot(Router),HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
