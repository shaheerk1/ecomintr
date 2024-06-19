import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartItemsDataService {

  private cartItems: any[] = [];

  constructor() { }

  getItems(): any[] {
    return this.cartItems;
  }

  addItem(product: any): void {
    
    if(product.quantity === undefined){
      product.quantity = 1
    }

    let isExist = false;

    for(let item of this.cartItems){
      if(item.id === product.id){
        isExist = true;
      }
    }



    if(!isExist){

      this.cartItems.push(product)
    }else{
      this.cartItems.forEach((item) => {
        if(item.id === product.id){
          item.quantity++
        }
      })
    
    }
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
