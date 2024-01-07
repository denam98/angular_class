import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = 'http://localhost:3000';

  // _isLoggedIn: BehaviorSubject<boolean>;
  // user: Subject<User>;

  // constructor(private httpClient: HttpClient) {
  //   this._isLoggedIn = new BehaviorSubject(false);
  //   this.user = new Subject();
  // }

  // async authenticate(username: string, password: string): Promise<any> {
  //   const users: Observable<any> = await this.httpClient.get(`${this.baseUrl}/users`);
  //   users.subscribe((result: User[]) => {
  //     const user = result.find((element) => element.username == username);
  //     if (user) {
  //       if (user.password === password) {
  //         alert('Loggin successfull');
  //         console.log(user);
  //         this.user.next(user);
  //         this._isLoggedIn.next(true);
  //         localStorage.setItem('user', JSON.stringify(user));
  //       } else {
  //         alert('Invalid password');
  //         this._isLoggedIn.next(false);
  //       }
  //     } else {
  //       alert('No such user');
  //     }
  //   });
  // }

  async auth(): Promise<User[]>{
    const data = await fetch(`${this.baseUrl}/users`);
    return await data.json() ?? []
  }

  // getUser () {
  //   return this.user;
  // }
}

export interface User {
  id: number;
  username: string;
  password: string;
  role: string;
}
