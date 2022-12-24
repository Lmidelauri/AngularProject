import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {ILogin, ILoginResponse, IRegister} from "../interfaces/auth";
import {Observable, tap} from "rxjs";
import {IUser} from "../interfaces/user";


@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  get token(): string | null {
    return localStorage.getItem('token');
  }

  get user(): IUser | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  login(payload: ILogin): Observable<ILoginResponse> {
    return this.post<ILoginResponse>('auth/login', payload)
      .pipe(
        tap((response: ILoginResponse) => {
            this.setToken(response.accessToken);
            this.setUser(response.user);
          }
        )
      )
  }

  register(payload: IRegister): Observable<IUser> {
    return this.post<IUser>('auth/signup', payload);
  }


  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  setUser(user: IUser): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  signOut() {
    localStorage.clear();
  }
}
