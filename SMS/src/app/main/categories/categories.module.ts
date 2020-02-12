import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { Routes, RouterModule } from '@angular/router';
import { Title } from "@angular/platform-browser";
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'create', component: CreateComponent },
]

@NgModule({
  declarations: [CategoriesComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    PaginationModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[]
})
export class CategoriesModule {
  constructor(private titleService: Title) {
    this.titleService.setTitle("Categories");
  }
}
