import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styles: [],
})
export class ClassesComponent implements OnInit {
  alert: string = 'alert-danger';
  properties: Props = {
    danger: true,
  };
  loading: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  execute() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 5000);
  }
}

interface Props {
  danger: boolean;
}
