import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  message = '';
  element: HTMLElement | null = null;

  constructor(public _cs: ChatService) {
    this._cs.loadMessages().subscribe(() => {
      setTimeout(() => {
        if (this.element) {
          this.element.scrollTop = this.element.scrollHeight;
        }
      }, 20);
    });
  }

  ngOnInit(): void {
    this.element = document.getElementById('messages-app');
  }

  sendMessage() {
    if (this.message.length === 0) return;

    this._cs
      .addMessage(this.message)
      .then(() => {
        this.message = '';
      })
      .catch((err) => {
        console.log('Message not saved', err);
      });
  }
}
