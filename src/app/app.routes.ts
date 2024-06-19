import { Routes } from '@angular/router';
import { CheckoutComponent } from './screens/checkout/checkout.component';
import { AppComponent } from './app.component';
import { AllProductsComponent } from './screens/all-products/all-products.component';

export const routes: Routes = [
    {path: '', component: AllProductsComponent},
    {path: 'checkout', component: CheckoutComponent}
];
