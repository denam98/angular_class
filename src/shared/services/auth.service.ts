import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'http://localhost:3000'

  _loggedin: BehaviorSubject<boolean>;

  constructor() {
    this._loggedin = new BehaviorSubject<boolean>(false);
  }

  async authenticate(email: string, password: string): Promise<User[]>{
    const data = await fetch(`${this.baseUrl}/users`);
    return await data.json() ?? [] ;
  }

  get isLoggedin(): BehaviorSubject<boolean>{
    return this._loggedin;
  }

  setIsLoggedinTrue(){
    this._loggedin.next(true);
  }

  logOut(){
    this._loggedin.next(false);
  }

  // creatUser(user: any):Observable {
  //   let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: cpHeaders });
  //   return this.http.post(this.articleUrl, article, options)
  //          .map(success => success.status)
  //          .catch(this.handleError);
  // }
}
