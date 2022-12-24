import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductCardModule} from "../../../../features/product-card/product-card.module";
import {ProductAddEditComponent} from "./product-add-edit/product-add-edit.component";


@NgModule({
  declarations: [
    ProductsComponent,
    ProductAddEditComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
