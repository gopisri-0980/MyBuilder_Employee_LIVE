import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { promise } from 'protractor';
import { CommonComponent } from '../common/common.component';
import 'rxjs/add/operator/map'
import { Http, RequestOptions, Headers } from '@angular/http';
import { DeclareFunctionStmt } from '@angular/compiler';
declare const $: any;
declare const swal: any;


@Injectable({
  providedIn: 'root'
})
export class TicketfeedbackreportService {


  constructor(private _httpClient: HttpClient, private cmn: CommonComponent) { 
    
  }


  getFeedbackReport(fromDate, toDate): Promise<any> {
    return new Promise((resolve, reject) => {
      const body = {
        "sessionKey": "" + sessionStorage.getItem("login_sessionkey"),
        "startDate": fromDate,
        "endDate": toDate
      }

      console.log(body);
      let url = this.cmn.commonUrl + "ticketreport/getAllFeedbackWiseTickets.spring";

      console.log(url);
      let headers = new Headers({
        'Content-Type': 'application/json'
      });
      let options = new RequestOptions({ headers: headers });
      this._httpClient.post(url, body).subscribe(r => resolve(r), reject);
    }).catch(() => {
      swal('Session expired,<br/> Please login and try again.', 'Alert!', { enableHtml: true });
    });
  }

}
