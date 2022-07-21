import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { FileItem } from '../models/file-item.model';

@Directive({
  selector: '[appNgDropFile]',
})
export class NgDropFileDirective {
  @Input() files: FileItem[] = [];
  @Output() mouseOver: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  @HostListener('dragover', ['$event'])
  public onDragEnter(event: Event) {
    this.mouseOver.emit(true);
    this._avoidOpen(event);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave() {
    this.mouseOver.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: DragEvent) {
    
    const transfer = this._getTransfer( event );
    
    if (!transfer) return;
    
    this._extractFiles( transfer.files );
    this._avoidOpen(event);

    this.mouseOver.emit(false);
  }
  
  private _getTransfer(event: DragEvent){
    return event.dataTransfer;
  }

  private _extractFiles( filesList: FileList ){
    for (const property in Object.getOwnPropertyNames(filesList)){
      const temporalFile = filesList[property];

      if (this._fileCanBeLoaded(temporalFile)){
        const newFile = new FileItem( temporalFile );
        this.files.push(newFile);
      }
    }

  }

  // Validations
  private _fileCanBeLoaded(file: File): boolean{
    if (!this._fileAlreadyDropped(file.name) && this._isImage(file.type)){
      return true;
    }
    return false;
  }

  private _avoidOpen(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  private _fileAlreadyDropped(fileName: string): boolean {
    for (const file of this.files) {
      if (fileName === file.fileName) {
        console.log(`File ${fileName} has already been loaded`)
        return true;
      }
    }

    return false;
  }

  private _isImage(fileType: string): boolean {
    return (fileType === '' || fileType === undefined) ? false : fileType.startsWith('image');
  }
}
