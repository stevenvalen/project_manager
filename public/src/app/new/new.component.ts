import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct;
  errors = [];
  constructor(
    private _httpSerice: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newProduct = {
      title: "",
      price: 0.00,
      url: ""
    }
  }
  createProduct() {
    this.errors = [];
    let observable = this._httpSerice.createProduct(this.newProduct);
    observable.subscribe(data => {
      if (data['message'] === "Error") {
        console.log(data);
        this.errors.push(data['error']['errors']);
      } else {
        console.log(data);
        this._router.navigate(['/products']);
      }
    })
  }
}