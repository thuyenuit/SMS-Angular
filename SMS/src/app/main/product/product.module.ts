import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { Routes, RouterModule } from '@angular/router';
import {Title} from "@angular/platform-browser";

export const routes: Routes = [
  { path: '', component: ProductComponent },
]

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Products");
  }
 }
