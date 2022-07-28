import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Game } from 'src/app/interfaces/game.model';
import { map } from "rxjs/operators";
import { ChartData } from 'src/app/interfaces/chart-data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  chartData: ChartData[] = [];

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection('goty').valueChanges()
      .pipe(
        map(resp => resp as Game[]),
        map(games => games.map(({name, votes}) => ({name, value: votes}) ) )
      )
      .subscribe(res => {
        this.chartData = res;
      })
  }

}
