import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingItem } from './app/booking-list/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'https://localhost:7165/api/booking';

  constructor(private http: HttpClient) { }

  getAllBookings(): Observable<BookingItem[]> {
    return this.http.get<BookingItem[]>(this.apiUrl);
  }

  getBookingById(id: number): Observable<BookingItem> {
    return this.http.get<BookingItem>(`${this.apiUrl}/${id}`);
  }

  addBooking(booking: BookingItem): Observable<BookingItem> {
    return this.http.post<BookingItem>(this.apiUrl, booking);
  }

  updateBooking(id: number, booking: BookingItem): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, booking);
  }

  deleteBooking(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
