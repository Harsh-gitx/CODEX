import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    selectedItems=[];
    cartCount=0;
  constructor() { }
}
 