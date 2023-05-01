import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerModule } from './app/contactmanager/contactmanager.module';
import { DemoModule } from './app/demo/demo.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ContactmanagerModule, DemoModule],
  exports: [],
})
export class StlyesModule {}
