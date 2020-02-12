import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import {Title} from "@angular/platform-browser";
import {FormsModule} from '@angular/forms';
import { NotificationService } from '../core/services/notification.service';
import { AuthenService } from '../core/services/authen.service';

const routes: Routes = [
  { path: '', component: LoginComponent }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[AuthenService, NotificationService],
  declarations: [LoginComponent],
})

export class LoginModule {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Login SMS");
  }
 }


