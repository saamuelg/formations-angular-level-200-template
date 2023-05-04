import { Routes } from '@angular/router';
import {AppComponent} from "../app.component";

export const mainRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'planets',
    loadChildren: () => import('../features/planets/routes').then(m => m.planetRoutes)
  }
]
