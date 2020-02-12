import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {Routes, RouterModule} from "@angular/router";
import {Title} from "@angular/platform-browser";

export const routes: Routes = [
  { path: '', component: HomeComponent },
]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { 
  constructor(private titleService:Title) {
    this.titleService.setTitle("Home");
  }
}