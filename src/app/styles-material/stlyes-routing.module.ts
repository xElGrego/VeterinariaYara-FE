import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'contactmanager',
        loadChildren: () =>
          import(
            '../styles-material/app/contactmanager/contactmanager.module'
          ).then((m) => m.ContactmanagerModule),
      },
      {
        path: 'demo',
        loadChildren: () =>
          import('../styles-material/app/demo/demo.module').then(
            (m) => m.DemoModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StlyesRoutingModule {}
