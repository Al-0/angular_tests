import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {
  size: number = 30;

  constructor() { }

  ngOnInit(): void {
  }

}
