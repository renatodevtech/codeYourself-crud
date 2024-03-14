import { Component, Inject } from '@angular/core';
import { PeriodicElement } from '../../views/home/home.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrl: './element-dialog.component.scss'
})
export class ElementDialogComponent {
  element!: PeriodicElement;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: PeriodicElement,
    public dialogRef: MatDialogRef<ElementDialogComponent>,
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
