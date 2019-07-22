import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editProduct;
  editId;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.editId = params['id'];
    })
    this.getProduct(this.editId);
  }
  getProduct(id) {
    let observable = this._httpService.getOneProduct(id);
    observable.subscribe(data => {
      this.editProduct = data['data'];
    })
  }
  updateProduct() {
    let observable = this._httpService.updateProduct(this.editProduct);
    observable.subscribe(data => {
      if (data['message'] === "Success") {
        this._router.navigate(['/products']);
        // need to display errors
      }
    })
  }
}