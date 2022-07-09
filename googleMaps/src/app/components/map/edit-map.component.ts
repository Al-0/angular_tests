import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Marker } from 'src/app/classes/marker.class';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-map',
  templateUrl: './edit-map.component.html',
  styleUrls: ['./edit-map.component.css'],
})
export class EditMapComponent implements OnInit {
  form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditMapComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Marker
  ) {
    this.form = this.formBuilder.group({
      title: this.data.title,
      description: this.data.description,
    });
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveChanges() {
    this.dialogRef.close(this.form.value);
  }
}
