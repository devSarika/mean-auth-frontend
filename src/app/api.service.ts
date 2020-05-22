import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
messages =[];
users =[]
path=environment.path
  constructor(private http:HttpClient) { }
  getMessage(userId)
  {
    this.http.get<any>(this.path+'/posts/'+userId).subscribe(res=>{
    this.messages = res;
      
    })
  }
  postMessage(message)
  {
    this.http.post(this.path+'/post',message).subscribe(res=>{
  
      
    })
  }
  getUsers()
  {
    this.http.get<any>(this.path+'/users').subscribe(res=>{
    this.users = res;
      
    })
  }
  getProfile(id)
  {
   return this.http.get(this.path+'/profile/'+id)
  }


  
  // sendRegistrationData(registerData)
  // {
  //   let headers =new HttpHeaders();
  //   headers.append('Content-type','application-json');
  //   this.http.post('http://localhost:8000/register',registerData,{headers:headers}).pipe(
  //     map(res => res)
   
  //  )
  // }
}
