import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { PaymentComponent } from './payment/payment.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {HttpClientModule}from '@angular/common/http';
@NgModule({
  declarations: [HomeComponent, CartComponent, ProductComponent, PaymentComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatRadioModule,
    HttpClientModule
  ]
})
export class HomeModule { }
