import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoriesComponent } from './product-categories.component';
import { Routes, RouterModule } from '@angular/router';
import { Title } from "@angular/platform-browser";
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 

export const routes: Routes = [
  { path: '', component: ProductCategoriesComponent },
  //{ path: 'create', component: CreateComponent },
]

@NgModule({
  declarations: [ProductCategoriesComponent],
  imports: [
    CommonModule,
    PaginationModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[]
})
export class ProductCategoriesModule {
  constructor(private titleService: Title) {
    this.titleService.setTitle("Product categories");
  }
}
