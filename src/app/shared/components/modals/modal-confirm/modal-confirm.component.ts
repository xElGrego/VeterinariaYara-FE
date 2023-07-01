import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss'],
})
export class ModalConfirmComponent {
  constructor(private dialogRef: MatDialogRef<ModalConfirmComponent>) {}

  @Output() confirmed = new EventEmitter();
  @Output() canceled = new EventEmitter();

  confirm() {
    this.dialogRef.close();
    this.confirmed.emit(true);
  }

  cancel() {
    this.dialogRef.close();
    this.canceled.emit(false);
  }
}
