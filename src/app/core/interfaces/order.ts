import {IUser} from "./user";

export interface IOrder {
  id: number;
  items: any;
  user: IUser;
  subTotal: number;
  pending: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

