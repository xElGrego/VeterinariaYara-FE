import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { AuthGuard } from './core/guards/auth/auth-guard.guard';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { HomeComponent } from './modules/home/home.component';
import { ClientModule } from './modules/client/client.module';
import { PeetModule } from './modules/peet/peet.module';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'clientes',
        loadChildren: () =>
          import('../app/modules/client/client.module').then(
            (m) => m.ClientModule
          ),
      },
      {
        path: 'mascotas',
        loadChildren: () =>
          import('../app/modules/peet/peet.module').then((m) => m.PeetModule),
      },
    ],
  },
  /* {
    path: 'styles',
    loadChildren: () =>
      import('../app/styles-material/stlyes.module').then(
        (m) => m.StlyesModule
      ),
  }, */

  { path: 'login', component: LoginComponent },
  /*  { path: '**', redirectTo: 'login', pathMatch: 'full' }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
