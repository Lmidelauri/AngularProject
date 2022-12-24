import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {ICategory} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService{
 getAll(): Observable<ICategory[]>{
   return this.get<ICategory[]>('category')
 }
 getOne(id: number): Observable<ICategory>{
   return this.post<ICategory>(`category/${id}`);
 }
 create(category: ICategory): Observable<ICategory>{
   return this.post<ICategory>(`category`, category)
 }
  update(id: number, category: ICategory): Observable<ICategory>{
    return this.put<ICategory>(`category/${id}`, category)
  }

   deleteItem(id: number): Observable<ICategory> {
    return super.delete<ICategory>( `category/${id}`);
  }

}
