import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    let observable = this._httpService.getProducts();
    observable.subscribe(data => {
      this.allProducts = data['data'];
    })
  }
  destroyProduct(id) {
    let observable = this._httpService.destroyProduct(id);
    observable.subscribe(data => {
      console.log(data);
    })
    this.getProducts();
  }
}