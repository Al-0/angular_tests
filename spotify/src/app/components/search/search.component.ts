import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  search(query: string){
    console.log(query);
  }

}
