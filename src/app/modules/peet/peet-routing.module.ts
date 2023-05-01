import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePeetComponent } from './pages/home-peet/home-peet.component';

const routes: Routes = [
  {
    path: '',
    component: HomePeetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeetRoutingModule {}
