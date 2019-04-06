import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(private http: HttpClient) { }

  getTracks(): Observable<any> {
    return this.http.get(`${environment.apis.backend}/track/hello`, { responseType: 'text' });
  }
}
