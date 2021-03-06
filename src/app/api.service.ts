import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  fixerApiKey = '48c196f6a66f33d606d995d7ddb09ea5';
  fixerUrl = 'http://data.fixer.io/api';

  constructor(private http: HttpClient) { }

  get(url: string, params?: any): Observable<any>{
    let uri;
    if (params) {
      uri = `${this.fixerUrl}/${url}?access_key=${this.fixerApiKey}&${params}`;
    } else {
      uri = `${this.fixerUrl}/${url}?access_key=${this.fixerApiKey}`;
    }
    return this.http.get(uri);
  }
}
