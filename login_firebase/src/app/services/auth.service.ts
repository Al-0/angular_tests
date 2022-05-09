import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Create new user
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]


  // Login user
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  private url = "https://identitytoolkit.googleapis.com/v1/accounts:sign";
  private API_KEY = environment.API_KEY;
  
  constructor(private http: HttpClient) { }

  logout(){

  }

  login(user: UserModel){

  }

  newUser(user: UserModel){
    
  }
}
