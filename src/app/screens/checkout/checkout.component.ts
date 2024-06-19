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
    this.calculateTotal();

  }

  removeItem(index: number): void {
    this.cartService.removeItem(index);
    this.cartItems = this.cartService.getItems();
    this.calculateTotal();

  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
    this.calculateTotal();

  }

  
  addToCart(item: any): void {
    this.cartService.addItem(item);
    this.cartItems = this.cartService.getItems();
    this.calculateTotal();

  }

  reduceQty(index: number): void {
    this.cartService.reduceQty(index);
    this.cartItems = this.cartService.getItems();
    this.calculateTotal();

  }

  removeFromCart(index: number): void {
    this.cartService.removeItem(index);
    this.cartItems = this.cartService.getItems();
    this.calculateTotal();
  }

  total: number = 0;
  calculateTotal(): void {
    this.total = 0;
    for(let item of this.cartItems){
      this.total += item.price * item.quantity;
    }
  }
}
