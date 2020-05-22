import { Component, OnInit } from '@angular/core';
import {AuthService}from '../auth.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  

  ngOnInit(): void {
  }
 registerData:any = { }
 constructor(public authservice:AuthService) {} 
 post(){
   console.log(this.registerData)
   this.authservice.sendRegistrationData(this.registerData)
 }

}
