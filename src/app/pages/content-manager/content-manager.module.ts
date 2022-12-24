import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentManagerRoutingModule } from './content-manager-routing.module';
import { ProductAddEditComponent } from './pages/products/product-add-edit/product-add-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ContentManagerComponent } from './content-manager.component';
import {RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [

    ContentManagerComponent
  ],
  imports: [
    CommonModule,
    ContentManagerRoutingModule,
    ReactiveFormsModule,
    RouterOutlet
  ]
})
export class ContentManagerModule { }
