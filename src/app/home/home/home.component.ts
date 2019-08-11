import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName:string;
  constructor(private _router:Router,private _cartService:CartService) { }
  logout=()=>{
    sessionStorage.removeItem("key")
    this._router.navigate(["/login"])
  }
  navigateToCart=()=>{
    this._router.navigate(["home/cart"])
  }

  ngOnInit() {
    this.userName=sessionStorage.getItem("key");
    this._router.navigate(["home/product"])
  }


}
