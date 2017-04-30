import { Routes } from '@angular/router';
import * as containers from './containers';

export const routes: Routes = [
  {
    path: '',
    component: containers.DashboardComponent
  },
  {
    path: 'dashboard',
    component: containers.DashboardComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'enter-credentials',
    component: containers.EnterCredentialsComponent,
    data: {
      title: 'enter-credentials'
    }
  },
  {
    path: 'release/:id',
    component: containers.ReleaseComponent
  }
];

