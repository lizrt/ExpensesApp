import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl : string ="https://localhost:5001/api/Authentication/";

  constructor(private http:HttpClient) { }

  register(user){
    return this.http.post(this.baseUrl+'Register',user);
  }
  login(user){
    return this.http.post(this.baseUrl+'Login',user);
  }
  logout(){
    localStorage.removeItem('userName');
    localStorage.removeItem('tokenvalue');
  }
  get getusername(){
    console.log(localStorage.getItem('userName'));
    return localStorage.getItem('userName');
  }
  get isAuthenticated(){
    return !!localStorage.getItem('tokenvalue');
  }
}
