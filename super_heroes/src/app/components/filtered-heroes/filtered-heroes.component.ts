import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtered-heroes',
  templateUrl: './filtered-heroes.component.html',
  styleUrls: ['./filtered-heroes.component.css']
})
export class FilteredHeroesComponent implements OnInit {

  searchTerm: string = "";
  filteredHeroes: Heroe[] = [];

  constructor(private activatedRouted: ActivatedRoute,
              private _heroesService: HeroesService,
              private router: Router
  ) { 
  }

  ngOnInit(): void {
    this.activatedRouted.params.subscribe(params =>{
      this.searchTerm = params['searchTerm'];
      this.filteredHeroes = this._heroesService.searchHeroe(this.searchTerm);
    })
  }

  seeHeroe(nombre: string){
    let completeHeroesList = this._heroesService.getHeroes();
    let index = 0;
    for (let i = 0; i < completeHeroesList.length; i++)
    {
      if (completeHeroesList[i].nombre === nombre)
      {
        index = i;
      }
    }
    this.router.navigate( ['/heroe', index] )
  }

}
