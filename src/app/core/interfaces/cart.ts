import {IUser} from "./user";
import {IProduct} from "./products";

export interface ICart{
  id: number;
  total: number;
  quantity: number;
  item:any;
  user: IUser;
}



