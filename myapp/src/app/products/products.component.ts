import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allowNewProduct = false;
  productCreationStatus = 'No product Added'
  productName = 'default product'

  constructor() { }

  ngOnInit(): void {
  }

  onCreateProduct() {
    this.productCreationStatus = 'product Added';
  }

}
