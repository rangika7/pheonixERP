import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class  EPF{

    constructor(private http:Http){}
    
    checkEPF(calEPF){

        var headers=new Headers;
        headers.append('content-Type','application.json');
        return this.http.post('http//:localhost:3000/api/EPF',JSON.stringify(calEPF),{headers:headers})
        .map(res=>res.json())
    }

        getEPF(){
           return this.http.get('http//:localhost:3000/api/EPF')
           .map(res=>res.json())
        }
} 

