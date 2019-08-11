import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
import { RegisterComponent } from '../register/register/register.component';
import { HomeComponent } from '../home/home/home.component';
import { SecurityGuard } from '../security.guard';
import { ProductComponent } from '../home/product/product.component';
import { CartComponent } from '../home/cart/cart.component';
import { PaymentComponent } from '../home/payment/payment.component';

const routes:Routes=[
  {
    path:'login',component:LoginComponent
  } ,
  {
    path:'register',component:RegisterComponent
  } ,
  {
    path:'home',component:HomeComponent,
    canActivate:[SecurityGuard],
    loadChildren:'path:product'
// children:[{path:'product',component:ProductComponent},
// {path:'payment',component:PaymentComponent},
// {path:'cart',component:CartComponent}

// ]

  },
  {
    path:'**' ,redirectTo:'login'
  }

] 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class DigiRoutingModule { }
