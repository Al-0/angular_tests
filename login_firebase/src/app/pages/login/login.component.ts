import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { SignIn } from 'src/app/models/signIn.model';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  user: UserModel = new UserModel();
  rememberMe : boolean = false;
  userLogin: Observable<SignIn> = new Observable();
  signInResponse$ : Observable<SignIn> = new Observable();
  signInDisposable : Subscription = new Subscription();

  constructor(private auth: AuthService,
              private router: Router
    ) { }

  ngOnInit() {
    if (localStorage.getItem('email')){
      this.user.email = localStorage.getItem('email');
      this.rememberMe = true;
    }
  }
  
  login(form: NgForm){
    if (form.invalid) return;

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Please wait...'
    });
    Swal.showLoading();

    this.signInResponse$ = this.auth.login( this.user );

    this.signInDisposable = this.signInResponse$.subscribe( res =>{
        console.log(res);
        Swal.close();

        if (this.rememberMe){
          localStorage.setItem('email', this.user.email);
        }

        this.router.navigateByUrl('/home');
      }, (error) =>{
        console.log(error.error.error.message);
        Swal.fire({
          icon: 'error',
          text: `An error ocurrred: ${error.error.error.message}`,
          title: 'Authenthication error'
        });
      })

  }

  ngOnDestroy(): void {
    
  }

}
