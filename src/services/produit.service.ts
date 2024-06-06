import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'http://localhost:8000/api/products'; // Remplacez avec votre URL API

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post(this.apiUrl, product);
  }

  // Méthodes pour mettre à jour, lire et supprimer des produits...
}
