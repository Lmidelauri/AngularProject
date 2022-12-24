import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import {ProductCardModule} from "../../features/product-card/product-card.module";
import {FormsModule} from "@angular/forms";
import { ProductCardDetailsComponent } from './components/product-card-details/product-card-details.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ProductCardModule,
    FormsModule

  ]
})
export class ProductsModule { }
