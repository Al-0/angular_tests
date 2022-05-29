import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: HeroeModel[] = [];
  loading = true;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((res) => {
      this.heroes = res;
      this.loading = false;
    });
  }

  deleteHeroe(heroe: HeroeModel, index: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Are you sure you want to erase ${heroe.name}`,
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true,
    }).then((res) => {
      if (res.value && heroe.id) {
        this.heroesService.deleteHeroe(heroe.id).subscribe();
        this.heroes.splice(index, 1);
      }
    });
  }
}
