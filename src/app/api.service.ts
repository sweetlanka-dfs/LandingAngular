import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  REST_API_SERVER = 'http://157.230.29.51/api/plans';

  constructor(private http: HttpClient) { }

  public sendPostRequest() {
    return this.http.get(this.REST_API_SERVER);
  }

}
