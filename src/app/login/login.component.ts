import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {AuthService}from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  ngOnInit(): void {
  }
  loginData:any = { }
  constructor(public authservice:AuthService) {} 
  post(){
    
    this.authservice.loginuserData(this.loginData)
  }
 
}
