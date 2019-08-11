import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from './product.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products=[];
  searchText;
  selectedItems=[];
  count=0;
  constructor(private _service:ProductService,private _cartService:CartService) { }
  ngOnInit() {
    this.count=this._cartService.cartCount;
    this._service.getProductsFromAPI()
                 .subscribe((data)=>this.products.push(data))
  }
  addToCart=(product)=>{
    //add a condition 
    let index=this._cartService.selectedItems.findIndex((data)=>data.name==product.name);
    if(index!=-1)
    {
      this._cartService.selectedItems[index].quantity++
    }
    else{
      this._cartService.selectedItems.push(product)
      this.count=this._cartService.selectedItems.length;
      this._cartService.cartCount=this.count;
    }
  }
  
  search=()=>
  this.products=this.products.filter
  ( prod=>prod.name.toLocaleLowerCase().split(" ")
  .join("").includes(this.searchText.toLocaleLowerCase()
  .split(" ").join("")))
  
}
