
import { Injectable } from '@angular/core';
import{Http,Headers} from '@angular/http';
import'rxjs/add/operator/map';

@Injectable()
export class Regformservice{


  constructor(private http:Http) { }

  getdata(newEmp){

    var headers=new Headers();
    return this.http.get('http://localhost:3000/api/insetEmp2')
    .map(res=>res.json())
  }
  putdata(newEmp){

     var headers = new Headers();
      headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/insertEmp',JSON.stringify(newEmp),{headers:headers})
    .map(res=>res.json());
    
  }

}