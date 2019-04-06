import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getSettings(): Observable<any> {
    return this.http.get(`${environment.apis.backend}/admin/hello`, { responseType: 'text' });
  }
}
