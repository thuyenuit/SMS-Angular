import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SystemConstants } from '../../core/common/system.constants';
import { LoginUser } from '../domain/login.user';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class AuthenService {

  constructor(private _http: HttpClient) { }

  login(username: string, password: string) {
    let body = "username=" + encodeURIComponent(username) +
      "&password=" + encodeURIComponent(password) +
      "&grant_type=password";
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/x-www-form-urlencoded");  
    const httpOptions = { headers: headers}; 

    return this._http.post<any>(SystemConstants.BASE_API + SystemConstants.TOKEN_API, 
                                  body, 
                                  httpOptions)
                                  .pipe(map((response:Response) => {    
                                    localStorage.removeItem(SystemConstants.CURRENT_USER)
                                    localStorage.setItem(SystemConstants.CURRENT_USER, JSON.stringify(response));
                                    return response;                                                       
                                  }, (error) => {
                                    return error;                                 
                                  }));                       
  }

  // login(username: string, password: string) {
  //   let body = "username=" + encodeURIComponent(username) +
  //     "&password=" + encodeURIComponent(password) +
  //     "&grant_type=password";
  //   let headers = new HttpHeaders();
  //   headers.append("Content-Type", "application/x-www-form-urlencoded");
  //   let option = new HttpRequest({ headers: headers });
  //   return this._http.post(SystemConstants.BASE_API + '/token', body, option)
  //                     .pipe(map((response:Response) =>{
  //                         let user :LoginUser = response.json();
  //                         if(user && user.access_token)
  //                         {
  //                             localStorage.removeItem(SystemConstants.CURRENT_USER);
  //                             localStorage.setItem(SystemConstants.CURRENT_USER, JSON.stringify(user));
  //                         }
  //                     }));
  // }

  logout() {
    localStorage.removeItem(SystemConstants.CURRENT_USER);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(SystemConstants.CURRENT_USER) != null ? true : false;
  }

  getLoginUser(): LoginUser {
    let user:LoginUser = new LoginUser('null','null', 'null', 'null');
    if(this.isAuthenticated && localStorage.getItem(SystemConstants.CURRENT_USER) != null)
    {
        var userData = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
        user = new LoginUser(userData.access_token, userData.username, userData.fullname, userData.email);   
    } 
    return user;
  }
}
