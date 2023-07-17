import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReserveModel } from '../model/reserve.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  GetSalonsList(): Observable<string[]> {
    // return this.httpClient.get<string[]>(`${environment.baseUrl}map`);
    const data = ['m213', 'm654', 'm63', 'm6888'];
    return of(data);
  }

  GetSeats(salonId: string): Observable<number[][]> {
    // return this.httpClient.get<number[][]>(`${environment.baseUrl}map/${salonId}`);
    let data = [];
    for (let i = 0; i <= 12; i++) {
      const arr = [];
      for (let ii = 0; ii <= 36; ii++) {
        const random = Math.floor(Math.random() * 2);
        arr.push(random);
      }
      data.push(arr);
    }
    return of(data);
  }

  ReserveSeat(salonId: string, item: ReserveModel): Observable<any> {
    // return this.httpClient.post<any>(`${environment.baseUrl}map/${salonId}/ticket`, item);
    return new Observable(observer => {
      setTimeout(() => {
        observer.next('The seat has been successfully reserved');
        observer.complete();
      }, 1000);
    });
  }
}
