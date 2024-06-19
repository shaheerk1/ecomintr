import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { CheckoutComponent } from './screens/checkout/checkout.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CheckoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  constructor(private router: Router ){}
  title = 'ecom';

  cartItems: any[] = [];

  sampleProducts: any[] = [
    {
      id: 1,
      name: 'p 1',
      price: 1000,
      description: 'lorem ipsum'
    },
    {
      id: 2,
      name: 'p 2',
      price: 500,
      description: 'lorem ipsum'
    },
  ]

  addToCart(product: any) {
    console.log(product)

    if(!this.cartItems.includes(product)){
      this.cartItems.push(product)
    }

    console.log(this.cartItems)

    // this.router.navigate(['/checkout', ])



  }

  navigateToCheckout(){
    this.router.navigate(['/checkout', this.cartItems ])
  }

}
