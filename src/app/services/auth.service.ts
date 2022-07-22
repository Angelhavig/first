import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated(): boolean {
    throw new Error('Method not implemented.');
  }
  isLogged: boolean= true;
  constructor() { }
  authenticate(): boolean{
    return this.isLogged;
  }
}
