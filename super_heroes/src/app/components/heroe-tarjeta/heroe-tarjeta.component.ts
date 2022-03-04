import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number = 0;

  @Output() selectedHeroe: EventEmitter<number> = new EventEmitter();

  constructor(private router: Router  
  ) { }

  ngOnInit(): void {
  }

  seeHeroe(){
    this.selectedHeroe.emit( this.index );
  }

}
