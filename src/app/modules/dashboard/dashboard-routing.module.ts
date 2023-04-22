import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'cliente',
    loadChildren: () =>
      import('../client/client.module').then((m) => m.ClientModule),
  },
  {
    path: 'mascotas',
    loadChildren: () => import('../peet/peet.module').then((m) => m.PeetModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
