import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {  

  cartItems=[]
  amount=0;
  increaseQuantity=(product)=>{

    product.quantity++;

    this.calculateTotal();
  }
  decreaseQuantity=(product)=>{
    if(product.quantity<=1){
      this.remove(product);
    }
    else{    product.quantity--;
    this.calculateTotal();
    }
  }

  constructor(private _router:Router,private _cartService:CartService) { }

  payment=()=>{
    this._router.navigate(["home/payment"]) 
  }

  remove=(product)=>{
  
    let index=this.cartItems.indexOf(product)
    this.cartItems.splice(index,1)
    this._cartService.cartCount--;
    this.calculateTotal();
  }
  // TO calculate the total amount
  calculateTotal=()=>{
    this.amount=0;
    this._cartService.selectedItems.forEach(( item )=>  
         this.amount+=item.quantity*item.price
      )
  }
  ngOnInit() {
  this.calculateTotal();
  this.cartItems=this._cartService.selectedItems
  }

}
