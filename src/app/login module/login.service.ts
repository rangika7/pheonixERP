
import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService{


  constructor(private http:Http) { }

  checkLogin(userInfo){
     var header= new Headers;
     header.append('content-Type','application.json');
     return this.http.post('http://localhost:3000/api/login',JSON.stringify(userInfo),{headers:header})
     .map(res=>res.json())
  }
  
}