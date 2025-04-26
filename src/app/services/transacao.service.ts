import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  private apiUrl = 'http://localhost:8080/transaction';

  constructor(private http: HttpClient) { }

  Create(transacao: any): Observable<any> {
    return this.http.post(this.apiUrl, transacao);
  }

  ListAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
