import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PaypalComponent } from './paypal/paypal.component';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    NgxPayPalModule 
  ],
  declarations: [ AppComponent, PaypalComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
