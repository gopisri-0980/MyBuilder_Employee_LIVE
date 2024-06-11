import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { promise } from 'protractor';
import { CommonComponent } from '../common/common.component';
import 'rxjs/add/operator/map'
import { Http, RequestOptions, Headers } from '@angular/http';
declare const $: any;
declare const swal: any;

@Injectable({
  providedIn: 'root'
})
export class ViewChartAllService {
  chatcountUpdate = new BehaviorSubject({});
  NumberOfunreadmessages = new BehaviorSubject({});
  ledgerData:Array<any> =[];
  NamePlatesUpdate = new BehaviorSubject({});
  constructor(public cmn: CommonComponent, private _httpClient: HttpClient,) {
    

  }

  GetCustomernamefun(sessionKey, customername): Promise<any> {
    return new Promise((resolve, reject) => {
      const body = {
        
          "sessionKey": ""+sessionStorage.getItem("login_sessionkey"),
      
      }
      
      console.log(JSON.stringify(body))
      let url = this.cmn.commonUrl + "messenger/getEmployeeDropDown.spring";
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      this._httpClient.post(url, body).subscribe(r => resolve(r), reject);
    
    }).catch(() => {
      swal('Session expired,<br/> Please login and try again.', 'Alert!', { enableHtml: true });
    });
  }

  ChartTotalCountListservice(): Promise<any> {
    return new Promise((resolve, reject) => {
      const body = {
        "sessionKey": "" + sessionStorage.getItem("login_sessionkey")
      };
      const url = this.cmn.commonUrl + "messenger/getUnviewChatCount.spring";

      console.log(JSON.stringify(body));

      console.log(JSON.stringify(url));

      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      
      this._httpClient.post(url, body).subscribe(r => {
        this._httpClient.post(url, body).subscribe(r => resolve(r), reject);
      }, reject);
    }).catch(() => {
      swal('Session expired,<br/> Please login and try again.', 'Alert!', { enableHtml: true });
    });
  }



  getunreadmessageslist(messageID): Promise<any> {
    return new Promise((resolve, reject) => {
      const body = {
        "sessionKey": "" + sessionStorage.getItem("login_sessionkey"),
        "requestUrl": "getUnviewChatCount",
        "messengerIds": messageID,
      };
      const url = this.cmn.commonUrl + "/messenger/getMessagesList.spring";
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      this._httpClient.post(url, body).subscribe(r => {
        this._httpClient.post(url, body).subscribe(r => resolve(r), reject);
      }, reject);
    }).catch(() => {
      swal('Session expired,<br/> Please login and try again.', 'Alert!', { enableHtml: true });
    });
  }


  getmessageslist(messageID): Promise<any> {
    return new Promise((resolve, reject) => {
      var body = {
        "sessionKey": "" + sessionStorage.getItem("login_sessionkey"),
        "messengerId": messageID,
      }
      let url = this.cmn.commonUrl + "messenger/getChatDetails.spring";
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      
      this._httpClient.post(url, body).subscribe(r => {
        this._httpClient.post(url, body).subscribe(r => resolve(r), reject);
      }, reject);
    }).catch(() => {
      swal('Session expired,<br/> Please login and try again.', 'Alert!', { enableHtml: true });
    });
  }



  
  getmessagerviewlistdata(): Promise<any> {
    return new Promise((resolve, reject) => {
      const body = {
        "sessionKey": "" + sessionStorage.getItem("login_sessionkey"),
        "requestUrl": "getUnviewChatCount",
        "messengerIds": JSON.parse(sessionStorage.getItem("messengerIds")),
      };

      console.log(body);
      const url = this.cmn.commonUrl + "/messenger/getMessagesList.spring";

      this._httpClient.post(url, body).subscribe(r => {
        this._httpClient.post(url, body).subscribe(r => resolve(r), reject);
      }, reject);
    }).catch(() => {
      swal('Session expired,<br/> Please login and try again.', 'Alert!', { enableHtml: true });
    });
  }
  
}


