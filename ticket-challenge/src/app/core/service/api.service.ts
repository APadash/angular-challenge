import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReserveModel } from '../model/reserve.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  GetSalonsList() : Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.baseUrl}map`);
  }

  GetSeats(salonId: string) : Observable<number[][]> {
    return this.httpClient.get<number[][]>(`${environment.baseUrl}map/${salonId}`);
  }

  ReserveSeat(salonId: string, item: ReserveModel) : Observable<any> {
    return this.httpClient.post<any>(`${environment.baseUrl}map/${salonId}/ticket`, item);
  }
}
