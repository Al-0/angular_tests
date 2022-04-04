import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  list: List[] = [];

  constructor() {
    this.list = this.loadStorage();
  }

  createList( title: string){
    const newList = new List(title);
    this.list.push(newList);
    this.saveStorage();

    return newList.id;
  }

  getList( id: string | number ){
    id = Number(id);

    return this.list.find(listData => listData.id === id);
  }

  eraseList( listToDelete: List){
    this.list = this.list.filter(l => l.id !== listToDelete.id);
    this.saveStorage();
  }

  saveStorage(){
    localStorage.setItem('data', JSON.stringify(this.list));
  }

  loadStorage(){
    return JSON.parse(localStorage.getItem('data')) || [];
  }
}
