import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileItem } from '../models/file-item.model';
import { finalize } from 'rxjs';

interface ImageInterface {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class ImageLoadService {
  private imageFolder = 'img';

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) {}

  loadImagesFirebase(images: FileItem[]){
    const storageRef = this.storage.storage.ref();

    for (const item of images){
      item.isLoading = true;

      if (item.progress >= 100) continue;

      const filePath = `${this.imageFolder}/${item.fileName}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, item.file);
  
      // observe percentage changes
      task.percentageChanges().subscribe(res =>{
        item.progress = res || 0;
      });


      // get notified when the download URL is available
      task.snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe(res =>{
              const newImage: ImageInterface = {
                name: item.fileName,
                url: res.toString()
              }
              this.saveImage(newImage);
            })
          }
       ))
      .subscribe()
    }
  }

  private saveImage(image: ImageInterface) {
    this.db.collection(`/${this.imageFolder}`).add(image);
  }
}
