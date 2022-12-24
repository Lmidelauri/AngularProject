import {IUser} from "./user";

export interface IRegister{
  firstName: string;
  lastName:string;
  email: string;
  password:string
}
export interface ILogin{
  email: string;
  password:string
}


export interface ILoginResponse {
  user: IUser;
  accessToken: string;
}

