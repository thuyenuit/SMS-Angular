import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../core/services/notification.service';
import { AuthenService } from '../core/services/authen.service';
import { MessageConstants } from '../core/common/message.constants';
import { UriConstants } from '../core/common/uri.constants';
import { Router } from '@angular/router';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  model: any = [];
  returnUrl: string;

  constructor(private _authenService: AuthenService,
    private _notificationService: NotificationService,
    private _router: Router) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this._authenService.login(this.model.username, this.model.password).subscribe((value: any) => {
      this._router.navigate([UriConstants.DASHBOARD]);
    }, (error: any) => {
      if (error.status == 400) {
        this._notificationService.errorMessage(error.error.error_description);
      }
      else {
        this._notificationService.errorMessage(MessageConstants.SYSTEM_ERROR_MSG);      
      }
      this.loading = false;
    });
  }

}
