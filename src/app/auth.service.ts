import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  messages=[]
  path=environment.path
  TOKEN_KEY='token'
  constructor(private http:HttpClient) { }
  get token()
  {
    return localStorage.getItem(this.TOKEN_KEY)
  }

  get isAuthenticated(){
    return !!localStorage.getItem(this.TOKEN_KEY)
  }

  logout()
  {
    localStorage.removeItem(this.TOKEN_KEY)
  }
  sendRegistrationData(registerData)
  {
    
    this.http.post<any>(this.path+'/register',(registerData)).subscribe(res=> {  
    
    console.log(res)
    localStorage.setItem('token',res.token)
  })
  }

  loginuserData(loginData)
  {
    
    this.http.post<any>(this.path+'/login',loginData).subscribe((res:{token:string})=>
    
    {  
      console.log(res)
      localStorage.setItem('token',res.token)
    })
  }
}

