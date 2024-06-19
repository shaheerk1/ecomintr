import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { CheckoutComponent } from './screens/checkout/checkout.component';
import { CartItemsDataService } from './cart-items-data.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CheckoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
