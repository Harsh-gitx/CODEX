import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }
  captcha;
  captchaVal;
  generateCaptcha=()=>{
    let alphabets=["a","b","c","d"
  ,"e","f","g","h","i","j","k","l","m","n",
  "o","p","q","r","s","t","u","v","w","x","y","z"
  ]
 let a=Math.floor(Math.random()*10)
 let b=Math.floor(Math.random()*10)
 let c=Math.floor(Math.random()*10)
 let d=Math.floor(Math.random()*10)
 let e=Math.floor(Math.random()*10)
    this.captcha=a+""+alphabets[b]+""+alphabets[c]+""+d+""+e

 
    
  }

  refresh=()=>{
    this.generateCaptcha()
  }
  ngOnInit() {
    this.generateCaptcha();
  }

  pay=()=>{}
}
