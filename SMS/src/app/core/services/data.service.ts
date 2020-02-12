import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { SystemConstants } from '../common/system.constants';
import { AuthenService } from '../../core/services/authen.service';
import { NotificationService } from '../../core/services/notification.service';
import { UtilityService } from '../../core/services/utility.service';
import { MessageConstants } from '../../core/common/message.constants';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private _http: HttpClient,
    private _router: Router,
    private _authenService: AuthenService,
    private _notificationService: NotificationService,
    private _utilityService: UtilityService) { }

  get(uri: string) {
    return this._http.get<any>(SystemConstants.BASE_API + uri,
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this._authenService.getLoginUser().access_token
        })
      }).pipe(map((response: Response) => {
        return response;
      }, (error) => {
        return this.handleError(error);
      }));
  }

  post(uri: string, data?: any) {
    return this._http.post<any>(SystemConstants.BASE_API + uri, data, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this._authenService.getLoginUser().access_token
      })
    })
      .pipe(map((response: Response) => {
        return response;
      }, (error) => {
        return this.handleError(error);
      }));
  }

  put(uri: string, data?: any) {
    return this._http.put<any>(SystemConstants.BASE_API + uri, data, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this._authenService.getLoginUser().access_token
      })
    }).pipe(map((response: Response) => {
      return response;
    }, (error) => {
      return this.handleError(error);
    }));
  }

  delete(uri: string, key: string, id: string) {

    return this._http.delete(SystemConstants.BASE_API + uri + "/?" + key + "=" + id, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this._authenService.getLoginUser().access_token
      })
    }).pipe(map((response: Response) => {
      return response;
    }, (error) => {
      return this.handleError(error);
    }));
  }

  postFile(uri: string, data?: any) {
    //let newHeader = new Headers();
    //newHeader.append("Authenrization", "Bearer " + this._authenService.getLogginInUser().access_token);
    return this._http.post(SystemConstants.BASE_API + uri, data, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' +  this._authenService.getLoginUser().access_token
      })
    }).pipe(map((response: Response) => {
      return response;
    }, (error) => {
      return this.handleError(error);
    }));
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  public handleError(error: any) {
    if (error.status == 401) {
      localStorage.removeItem(SystemConstants.CURRENT_USER);
      this._notificationService.errorMessage(MessageConstants.LOGIN_AGAIN_MSG);
      this._utilityService.navigateToLogin();
    } else {
      let errMsg = JSON.parse(error._body).Message;
      this._notificationService.errorMessage(errMsg);
      return Error(errMsg);
    }
  }
}
