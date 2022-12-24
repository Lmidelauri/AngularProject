import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddEditComponent } from './pages/products/product-add-edit/product-add-edit.component';

import {CommonModule} from "@angular/common";
import {ContentManagerComponent} from "./content-manager.component";

const routes: Routes = [
  {
    path: '',
    redirectTo:'/content-manager/products',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentManagerComponent,
    children: [

      {
        path: 'products',
        loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('./pages/categories/categories.module').then(m => m.CategoriesModule)
      }]
  }
  ]



@NgModule({
  declarations:[

  ],
  imports: [CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentManagerRoutingModule { }
