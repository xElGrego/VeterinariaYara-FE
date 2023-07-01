import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalConfirmComponent } from '../components/modals/modal-confirm/modal-confirm.component';

export interface HasUnsaveChanges {
  hasUnsaveChanges(): boolean;
}

@Injectable({
  providedIn: 'root',
})
export class FormWithSaveGuard implements CanDeactivate<HasUnsaveChanges> {
  constructor(private dialog: MatDialog) {}

  canDeactivate(
    component: HasUnsaveChanges
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (component.hasUnsaveChanges()) {
      const dialogRef = this.dialog.open(ModalConfirmComponent);

      return new Observable<boolean>((observer) => {
        dialogRef.componentInstance.confirmed.subscribe(() => {
          observer.next(true);
          observer.complete();
        });

        dialogRef.componentInstance.canceled.subscribe(() => {
          observer.next(false);
          observer.complete();
        });
      });
    }
    return true;
  }
}
