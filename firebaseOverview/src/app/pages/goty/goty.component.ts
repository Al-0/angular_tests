import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/game.model';
import { GameService } from 'src/app/services/game.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getNominated().subscribe(res =>{
      this.games = res;
    })
  }

  vote(id: string){
    this.gameService.castVote(id).subscribe(res => {
      if (res.ok) {
        Swal.fire("Thanks", res.message, 'success');
      } else {
        console.log(res)
        Swal.fire("Error", res.message, 'error');
      }
    })
  }

}
