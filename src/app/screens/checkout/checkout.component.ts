import { Component } from '@angular/core';
import { CartItemsDataService } from '../../cart-items-data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [NgFor],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartItemsDataService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  removeItem(index: number): void {
    this.cartService.removeItem(index);
    this.cartItems = this.cartService.getItems();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  
  addToCart(item: any): void {
    this.cartService.addItem(item);
    this.cartItems = this.cartService.getItems();
  }
}
