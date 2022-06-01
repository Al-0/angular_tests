import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private _cs: ChatService) { }

  ngOnInit(): void {
  }

  login(provider: string){
    if (provider === 'google'){
      this._cs.loginWithGoogle();
    }else{
      this._cs.loginWithTwitter();
    }
  }

}
