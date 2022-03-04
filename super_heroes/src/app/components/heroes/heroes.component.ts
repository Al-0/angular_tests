import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _heroesService: HeroesService,
              private router: Router
    ) { }

  ngOnInit(): void {
    
    this.heroes = this._heroesService.getHeroes();

  }

  seeHeroe(i: number)
  {
    this.router.navigate( ['/heroe', i] )
  }

}
