import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  heroe = new HeroeModel();

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id !== 'new' && id) {
      this.heroesService.getHeroe(id).subscribe((res: object) => {
        if (res !== null){
          this.heroe = res as HeroeModel;
          this.heroe.id = id;
        }
      });
    }
  }

  save(form: NgForm) {
    if (form.invalid) {
      console.log('Invalid form');
      return;
    }

    Swal.fire({
      title: 'Wait',
      text: 'Saving information',
      icon: 'info',
      allowOutsideClick: false,
    });
    Swal.showLoading();

    let petition: Observable<any>;

    if (this.heroe.id) {
      const heroeTemp = { ...this.heroe };
      delete heroeTemp.id;
      petition = this.heroesService.updateHeroe(heroeTemp, this.heroe.id);
    } else {
      petition = this.heroesService.createHeroe(this.heroe);
    }

    petition.subscribe((res) => {
      Swal.fire({
        title: this.heroe.name,
        text: 'Saved successfully',
        icon: 'success',
      });
    });
  }
}
