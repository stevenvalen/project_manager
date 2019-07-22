import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getProducts() {
    return this._http.get('/allProducts');
  }
  getOneProduct(id) {
    return this._http.get(`/product/${id}`);
  }
  createProduct(newProduct) {
    return this._http.post('/create', newProduct);
  }
  updateProduct(updateProduct) {
    return this._http.put(`/update/product/${updateProduct._id}`, updateProduct);
  }
  destroyProduct(id) {
    return this._http.delete(`/destroy/product/${id}`);
  }
}