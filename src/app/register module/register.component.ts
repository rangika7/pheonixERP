import{ Component } from '@angular/core';
import { RegisterService } from './register.service';

export class list{
    name:string;
    image:string;
    age:string;
}
@Component({

selector:'register',
templateUrl:'./register.component.html',
styleUrls:['./register.component.css']

})

export class registerComponent{



obj;
    constructor(private regservice:RegisterService){

        regservice.getemp()
        .subscribe(data=>{
        this.obj=data;
        });

    }


}
