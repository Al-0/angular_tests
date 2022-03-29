import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor(public toDoService: ToDoService,
              private router: Router,
              private alertController: AlertController
    ) {
  }

  async addList(){
    //this.router.navigateByUrl('tabs/tab1/add');
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'New List',
      inputs:[
        {
          name: 'title',
          type: 'text',
          placeholder: 'List Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        }
      ]
    });

    alert.present();
  }

}