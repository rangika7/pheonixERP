import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { FrameComponent } from './frame/frame.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product/product.component';
import { EditComponent } from './edit/edit.component';
import { ViewProductComponent } from './view-product/view-product.component';

import { registerComponent } from './register module/register.component';
import { RegFormComponent } from './RegForm module/RegForm.component';
import { EPFcomponent } from './EPF module/EPF.component';
import { loginComponent } from './login module/login.component';

const routes:Routes=[
      { path: 'addproduct', component: AddProductComponent},
      { path: 'product', component:ProductComponent}, 
      { path: 'purchaseorder', component:PurchaseOrderComponent},
      { path: 'product/:id', component:ViewProductComponent},
      { path: 'view-product', component:ViewProductComponent},
      { path: 'edit-product', component:EditComponent},
      { path: 'login', component:loginComponent},
      { path: 'Epf', component:EPFcomponent},
      { path: 'Regform', component:RegFormComponent},
      { path: 'register', component:registerComponent},
      { path: '', redirectTo:'/login' ,pathMatch:'full'}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}
export const routingComponents=[
    AddProductComponent,
    ProductComponent,
    PurchaseOrderComponent,
    ViewProductComponent,
    EditComponent
    
     ]
