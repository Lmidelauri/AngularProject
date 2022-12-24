import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {map, Observable} from "rxjs";
import {IProduct} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService{

  getProducts(params: {
    categoryId?: number | null,
    limit?: number,
    search?: string,
    similar?: string
  }): Observable<IProduct[]>{
 return this.get<IProduct[]>('product',params)

}

  create(product: IProduct): Observable<IProduct> {
    return this.post<IProduct>('product', product);
  }

  update(id: string, product: IProduct): Observable<IProduct> {
    return this.put<IProduct>(`product/${id}`, product);

  }

  getOne(id: string): Observable<IProduct> {
    return this.delete<IProduct>(`product/${id}`);
  }



  deleteItem(id: string): Observable<IProduct> {
    return this.delete<IProduct>(`product/${id}`);
  }
}
