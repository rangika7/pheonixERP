
import { Injectable } from '@angular/core';
import{Http,Headers} from '@angular/http';
import'rxjs/add/operator/map';

@Injectable()
export class RegisterService{


  constructor(private http:Http) { }

  getemp(){
    return this.http.get('http://localhost:3000/employee')
    .map(res=>res.json());
  }

  
}   