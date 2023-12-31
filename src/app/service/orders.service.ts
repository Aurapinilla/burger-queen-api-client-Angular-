import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ordersResponse } from '../interfaces/orders.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  private urlApi = 'https://burger-queen-api-mock-wm26.onrender.com/orders';

  httpOptions = {
    headers: new HttpHeaders({
      // Authorization es una propiedad, con el valor del token que reicibimos al iniciar sesión en el login
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    }),
  };

  postOrder(order: ordersResponse): Observable<ordersResponse[]> {
    return this.http.post<ordersResponse[]>(this.urlApi, order, this.httpOptions);
  }

  getOrders(): Observable<ordersResponse[]> {
    return this.http.get<ordersResponse[]>(this.urlApi, this.httpOptions);
  }

  updateOrderStatus(orderId: number, newStatus: string): Observable<ordersResponse> {
    return this.http.patch<ordersResponse>(`${this.urlApi}/${orderId}`, { status: newStatus }, this.httpOptions);
  }

  updateOrderTime(orderId: number, orderTime: number): Observable<ordersResponse> {

    const updatedTimer = { timer: orderTime };

    return this.http.patch<ordersResponse>(`${this.urlApi}/${orderId}`, updatedTimer, this.httpOptions);
  }
}
