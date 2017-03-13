import {Component} from '@angular/core';

@Component ({

    selector:'EPF',
    templateUrl:'./EPF.component.html',
    styleUrls:['./EPF.component.css']

})

export class EPFcomponent{
view=false;
status=1;
viewetf(){
   if(this.status==0){
      this.view=false;
        this.status=1;
       
   }else{
       this.view=true;
       this.status=0;
       
   }
}

show=false;
stats=1;
viewepf(){
    if(this.stats==0){
        this.show=false;
        this.stats=1;
    }
    else{
        this.show=true;
        this.stats=0;
    }
}

}