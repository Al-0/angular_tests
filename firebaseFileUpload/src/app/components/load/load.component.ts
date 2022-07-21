import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/models/file-item.model';
import { ImageLoadService } from 'src/app/services/image-load.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css'],
})
export class LoadComponent implements OnInit {
  isOverDropDown = false;
  files: FileItem[] = [];

  constructor(private imageLoadService: ImageLoadService) {}

  ngOnInit(): void {}

  loadImages() {
    this.imageLoadService.loadImagesFirebase(this.files);
  }

  cleanFiles(){
    this.files = [];
  }
}
