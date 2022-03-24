import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  list: List[] = [];

  constructor() {
    const list1 = new List('Be positive');
    const list2 = new List('Laugh');
    this.list.push(list1,list2);
  }
}
