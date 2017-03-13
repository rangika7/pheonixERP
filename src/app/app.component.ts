import { Component } from '@angular/core';
import { PurchaseOrderService } from './services/purchase-order/purchase-order.service';
import { ProductService } from './services/product/product.service';
import { RegisterService } from './register module/register.service';
import { Regformservice } from './RegForm module/RegForm.service';
import { LoginService } from './login module/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PurchaseOrderService,ProductService,RegisterService,Regformservice,LoginService]
})
export class AppComponent {
  title = 'app works!';
}
