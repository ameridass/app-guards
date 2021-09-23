import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuth = false;

  isLogged(user: string, password: string): boolean{
    
    if(user === 'ameridass' && password === '1234'){
      this.isAuth = true;
      return this.isAuth;
    }
    return this.isAuth;
  }
}
