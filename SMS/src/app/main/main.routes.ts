import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const mainRoutes: Routes = [
  {
    path: '', component: MainComponent, children: [
      // { path: '', loadChildren: 'home', pathMatch: 'full' },
      { path: 'product', loadChildren: './product/product.module#ProductModule' }
    ]
  },

]