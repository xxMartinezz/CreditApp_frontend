import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreditPage, Credit } from '../classes/credit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  private restApiUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getCredits(): Observable<CreditPage>
  {
    return this.httpClient.get<CreditPage>(`${this.restApiUrl}/credits`);
  }

  addCredit(credit: Credit): Observable<Credit>
  {
    return this.httpClient.post<Credit>(`${this.restApiUrl}/credits/new`, credit);
  }
}
