import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(email: string, password: string): Observable<any> {
    // Your implementation here
    return this.http.post<any>('your-api-url/register', { email, password });
  }
}
