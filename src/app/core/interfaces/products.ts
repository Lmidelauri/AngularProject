import {ICategory} from "./category";


export interface IProduct{
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  categoryId?:number;
  category: ICategory;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}



