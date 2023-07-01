import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../material.module';
import { ShowRolesDirective } from './directives/show-roles.directive';
import { ModalConfirmComponent } from './components/modals/modal-confirm/modal-confirm.component';

@NgModule({
  declarations: [SpinnerComponent, ToolbarComponent, ShowRolesDirective, ModalConfirmComponent],
  imports: [CommonModule, NgxSpinnerModule, MaterialModule],
  exports: [SpinnerComponent, ToolbarComponent, ShowRolesDirective],
})
export class SharedModule {}
