import{Component} from '@angular/core';
import {LoginService} from './login.service';

export class UserInfo{
        userName:string;
        password:string;
}

@Component({

    selector:'login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']

}


)
export class loginComponent{
    data;
    link;

    user:UserInfo={
        userName:'',
        password:''
    }

    constructor(private loginService:LoginService){}

//routerLink="/register"
login(){//call logincheck function in service

    this.loginService.checkLogin(this.user)
    .subscribe(data =>{

    });
    
}



  // Here we are implementing the submitForm function. All we are doing for right now is spitting out the details of the form to our console.
  submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);
  }
}








