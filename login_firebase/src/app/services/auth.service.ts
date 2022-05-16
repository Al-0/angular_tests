import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SignUp } from '../models/signUp.model';
import { UserModel } from '../models/user.model';
import { map } from 'rxjs/operators';
import { SignIn } from '../models/signIn.model';
import { Router } from '@angular/router';

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
  private userToken : string = null;

  constructor(private http: HttpClient,
              private router: Router
    ) {
    this.readToken();
  }

  logout(){
    localStorage.removeItem('token');
  }

  login(user: UserModel){
    const authData = {
      ...user,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }InWithPassword?key=${ this.API_KEY}`, 
      authData
    ).pipe(map(x => x as SignIn)).pipe(map(res =>{
      this.saveToken(res.idToken);
      return res;
    }));;
  }

  newUser(user: UserModel){
    const authData = {
      ...user,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }Up?key=${ this.API_KEY}`, 
      authData
    ).pipe(map(x => x as SignUp)).pipe(map(res =>{
      this.saveToken(res.idToken);
      return res;
    }));
  }

  private saveToken (idToken: string){
    this.userToken = idToken;
    localStorage.setItem('token', this.userToken);

    let today = new Date();
    today.setSeconds(3600);
    localStorage.setItem('expires', today.getTime().toString() );
  }

  readToken(){
    if (localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = '';
    }

    return this.userToken;
  }

  isAuthenthicated(): boolean {
    if (this.userToken.length < 2){
      this.router.navigateByUrl('/login');
      return false;
    }
    else{
      const expire = Number(localStorage.getItem('expires'));
      const expireDate = new Date();
      expireDate.setTime(expire);

      if (expireDate > new Date()){
        return true;
      }

      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
