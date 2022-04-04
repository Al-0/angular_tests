import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { List } from 'src/app/models/list.model';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {
  @ViewChild(IonList) list: IonList;
  @Input() finished = true;

  constructor(public toDoService: ToDoService,
              private router: Router,
              private alertController: AlertController) {}

  ngOnInit() {}

  selectList(item: List) {
    if (this.finished) {
      this.router.navigateByUrl(`tabs/tab2/add/${item.id}`);
    } else {
      this.router.navigateByUrl(`tabs/tab1/add/${item.id}`);
    }
  }

  erase(list: List) {
    this.toDoService.eraseList(list);
  }

  async edit(list: List) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit List',
      inputs:[
        {
          name: 'title',
          type: 'text',
          placeholder: 'List Name',
          value: list.title
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () =>{
            this.list.closeSlidingItems();
          }
        },
        {
          text: 'Edit',
          handler: (data) => {
            this.list.closeSlidingItems();
            if (data.title.length === 0){
              return;
            }

            list.title = data.title;
            this.toDoService.saveStorage();
          },
        }
      ]
    });

    alert.present();
  }
}
