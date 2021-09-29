import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from 'src/app/Card';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class CardService {
  private apiUrl = 'http://localhost:5000/cards';

  constructor(private http: HttpClient) {}

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl);
  }

  updateCard(card: Card): Observable<Card> {
    const url = `${this.apiUrl}/${card.id}`;
    return this.http.put<Card>(url, card, httpOptions);
  }
}
