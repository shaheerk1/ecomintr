import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartItemsDataService } from '../../cart-items-data.service';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {


  constructor(private router: Router, private cartService: CartItemsDataService ){}
  title = 'ecom';

  cartItems: any[] = [];

  addToCart(item: any): void {
    this.cartService.addItem(item);
    this.cartItems = this.cartService.getItems();
  }

  getCartItems(): any[] {
    return this.cartService.getItems();
  }

  sampleProducts: any[] = [
    {
      id: 1,
      name: 'p 1',
      price: 1000,
      description: 'lorem ipsum',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'p 2',
      price: 500,
      description: 'lorem ipsum',
      image: 'https://via.placeholder.com/150'

    },
  ]



  navigateToCheckout(){
    this.router.navigate(['/checkout' ])
  }

}
