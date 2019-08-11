import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map,filter, flatMap} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }

  getProductsFromAPI=()=>{
    return this._http.get('assets/products.json')
                     .pipe( 
                       map( (data)=> data['products'] ),
                       flatMap((data2)=>
                         data2
                       ),
                       filter(data3=>data3['rating']>4)
                        )
    //return [product, product2,product3]
    //make an API call to the server
  }

}
