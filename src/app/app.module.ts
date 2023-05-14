import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from './store/store.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import {CartDetailComponent } from './store/cartDetail/cartDetail.component';
import { StoreComponent } from './store/store.component';
import { StoreFirstGuard } from './storeFirst.guard';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {path: 'store', component: StoreComponent, canActivate: [StoreFirstGuard]},
      {path: 'cart', component: CartDetailComponent, canActivate: [StoreFirstGuard]},
      {path: 'checkout', component: CheckoutComponent, canActivate: [StoreFirstGuard]},
      {path: '**', redirectTo: '/store'},

    ]),
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
