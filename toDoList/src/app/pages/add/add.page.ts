import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { ListItem } from 'src/app/models/list-item.model';
import { List } from 'src/app/models/list.model';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  @ViewChild('tasks') itemList: IonList;
  list: List;
  itemName = '';

  constructor(private toDoService: ToDoService,
              private activatedRoute: ActivatedRoute,
              private alertController: AlertController) {
    const listId = this.activatedRoute.snapshot.paramMap.get('listId');
    this.list = this.toDoService.getList(listId);
  }

  ngOnInit() {
  }

  addItem(){
    if (this.itemName.trim().length === 0){
      return;
    }

    const newListItem = new ListItem(this.itemName);
    this.list.items.push(newListItem);

    this.itemName = '';
    this.toDoService.saveStorage();
    this.list.finished = false;
    this.list.finishedOn = null;
  }

  changeItem(){
    const pending = this.list.items.filter(itemData => itemData.completed === false).length;

    if (pending === 0){
      this.list.finished = true;
      this.list.finishedOn = new Date();
    }
    else{
      this.list.finished = false;
      this.list.finishedOn = null;
    }

    this.toDoService.saveStorage();
  }

  erase(index: number){
    this.list.items.splice(index, 1);
    this.toDoService.saveStorage();
  }

  async edit(item: ListItem) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit List',
      inputs:[
        {
          name: 'title',
          type: 'text',
          placeholder: 'Item description',
          value: item.description
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.itemList.closeSlidingItems();
          }
        },
        {
          text: 'Edit',
          handler: (data) => {
            this.itemList.closeSlidingItems();
            if (data.title.length === 0){
              return;
            }

            item.description = data.title;
            this.toDoService.saveStorage();
          },
        }
      ]
    });

    alert.present();
  }

}
