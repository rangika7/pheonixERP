import { Component } from '@angular/core';
import {Regformservice} from './RegForm.service';

export class NewUserData{
    firstName:string;
    lastName:string;
    nic:number;
    empId:number;
    email:string;
    address:string;
    tp1:number;
    tp2:number;

 
}

@Component ({

    selector:'RegForm',
    templateUrl:'./RegForm.component.html',
    styleUrls:['./RegForm.component.css']
}
)

export class RegFormComponent{
obj:NewUserData;
  

    firstName:'ffffffff';
    lastName:'fffffffff';
    nic:789;
    empId:45;
    email:'ffffffff';

    view=false;
    status=1;
    viewtask(){

        if(this.status==0){
            this.view=false;
            this.status=1;
        }
        else{
            this.view=true;
            this.status=0;
        }
    }
    constructor(private regservice:Regformservice){

       

    }

save(){
    this.obj={
    firstName:this.firstName,
    lastName:this.lastName,
    nic:this.nic,
    empId:this.empId,
    email:this.email,
    address:'fffffff',
    tp1:null,
    tp2:null,

    
}

 console.log(this.obj);
 this.regservice.putdata(this.obj)
        .subscribe(data=>{
          
        });

}

}

