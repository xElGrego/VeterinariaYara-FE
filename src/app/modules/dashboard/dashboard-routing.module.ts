import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
