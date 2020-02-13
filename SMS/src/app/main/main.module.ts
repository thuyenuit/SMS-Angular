import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { mainRoutes } from './main.routes';
import { RouterModule } from '@angular/router';
import { CategoriesModule } from './categories/categories.module';
import { ProductModule } from './product/product.module';
import { ProductCategoriesModule } from './product-categories/product-categories.module';
import { HomeModule } from './home/home.module';
import { NotfoundModule } from './notfound/notfound.module';
import { HeaderComponent } from '../layout/header/header.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { FooterComponent } from '../layout/footer/footer.component';
//import { ProductCategoriesComponent } from './product-categories/product-categories.component';

@NgModule({
  declarations: [MainComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CategoriesModule,
    ProductModule,
    ProductCategoriesModule,
    HomeModule,
    NotfoundModule,
    RouterModule.forChild(mainRoutes),
  ]
})
export class MainModule { }
