// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  register(email: string, password: string) {
    throw new Error('Method not implemented.');
  }

  apiUrl = 'http://localhost:8000/api/login'; // Remplacez avec votre URL d'API de connexion

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post(this.apiUrl, credentials);
  }
}
