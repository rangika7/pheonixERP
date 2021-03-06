import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { routingComponents } from './app-routing.module';

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

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FrameComponent,
    SideMenuComponent,
    PurchaseOrderComponent,
    AddProductComponent,
    ProductComponent,
    EditComponent,
    registerComponent,
    ViewProductComponent,
    RegFormComponent,
    EPFcomponent,
    loginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
