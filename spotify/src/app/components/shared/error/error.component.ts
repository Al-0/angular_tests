import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styles: [
  ]
})
export class ErrorComponent implements OnInit {

  @Input() errorMessage: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
