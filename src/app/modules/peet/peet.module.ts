import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeetRoutingModule } from './peet-routing.module';
import { HomePeetComponent } from './pages/home-peet/home-peet.component';

@NgModule({
  declarations: [HomePeetComponent],
  imports: [CommonModule, PeetRoutingModule],
})
export class PeetModule {}
