import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound.component';
import { Routes, RouterModule } from '@angular/router';
import {Title} from "@angular/platform-browser";

export const routes: Routes = [
  { path: '', component: NotfoundComponent },
]

@NgModule({
  declarations: [NotfoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NotfoundModule {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Not Found");
  }
 }
