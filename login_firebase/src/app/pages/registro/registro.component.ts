import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";

import { SignUp } from "src/app/models/signUp.model";
import { UserModel } from "src/app/models/user.model";
import { AuthService } from "src/app/services/auth.service";

import Swal from "sweetalert2";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"],
})
export class RegistroComponent implements OnInit, OnDestroy {
  user: UserModel;
  rememberMe: boolean = false;
  signUpResponse$ : Observable<SignUp> = new Observable();
  signUpDisposable : Subscription = new Subscription();

  constructor(private auth: AuthService,
              private router: Router
    ) {}

  ngOnInit() {
    this.user = new UserModel(); 
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Please wait...'
    });
    Swal.showLoading();
    
    this.signUpResponse$ = this.auth.newUser( this.user );

    this.signUpDisposable = this.signUpResponse$.subscribe( res =>{
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
    this.signUpDisposable.unsubscribe();
  }
}
