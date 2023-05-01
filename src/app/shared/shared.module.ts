import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../material.module';
import { ShowRolesDirective } from './directives/show-roles.directive';

@NgModule({
  declarations: [SpinnerComponent, ToolbarComponent, ShowRolesDirective],
  imports: [CommonModule, NgxSpinnerModule, MaterialModule],
  exports: [SpinnerComponent, ToolbarComponent, ShowRolesDirective],
})
export class SharedModule {}
