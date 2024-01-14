import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'http://localhost:3000'

  constructor() { 
  }

  async authenticate(email: string, password: string): Promise<User[]>{
    const data = await fetch(`${this.baseUrl}/users`);
    return await data.json() ?? [] ;
  }

  // creatUser(user: any):Observable {
  //   let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: cpHeaders });
  //   return this.http.post(this.articleUrl, article, options)
  //          .map(success => success.status)
  //          .catch(this.handleError);
  // }
}
