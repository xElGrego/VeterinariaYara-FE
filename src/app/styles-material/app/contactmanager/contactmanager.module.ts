import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactmanagerRoutingModule } from './contactmanager-routing.module';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { MaterialModule } from 'src/app/material.module';
import { UserService } from './services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';

@NgModule({
  declarations: [
    SidenavComponent,
    MainContentComponent,
    ToolbarComponent,
    ContactmanagerAppComponent,
    NotesComponent,
  ],
  imports: [
    CommonModule,
    ContactmanagerRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserService],
})
export class ContactmanagerModule {}
