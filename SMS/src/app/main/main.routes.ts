import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
//import { NotfoundComponent } from './notfound/notfound.component';

export const mainRoutes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: 'home', component: MainComponent, loadChildren: './home/home.module#HomeModule' },
  //{ path: 'products', component: MainComponent, loadChildren: './product/product.module#ProductModule' },  
  //{ path: '**',loadChildren: './notfound/notfound.module#NotfoundModule'},

  {
    path: '', component: MainComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './home/home.module#HomeModule' },
      { path: 'categories', loadChildren: './categories/categories.module#CategoriesModule' },  
      { path: 'products', loadChildren: './product/product.module#ProductModule' }, 
      { path: 'product-categories', loadChildren: './product-categories/product-categories.module#ProductCategoriesModule' },  
      { path: '**',loadChildren: './notfound/notfound.module#NotfoundModule'}
    ]
  }

 /* {
    //localhost:4200/main
    path: '', component: MainComponent, children: [
       //localhost:4200/main
      { path: '', redirectTo: 'home', pathMatch: 'full' },
     
      //localhost:4200/main/product
      { path: 'product', loadChildren: './product/product.module#ProductModule' },
  //localhost:4200/main/home
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path: '**', redirectTo: '/404' },
      { path: '404',loadChildren: './notfound/notfound.module#NotfoundModule'},
    ]
  }*/
]