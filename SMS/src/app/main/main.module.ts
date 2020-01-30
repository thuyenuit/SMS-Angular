import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {mainRoutes} from './main.routes';
import { Routes, RouterModule } from '@angular/router';
import {ProductModule} from './product/product.module';
@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes),
  ]
})
export class MainModule { }
