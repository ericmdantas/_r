import {
  Component,
  OnInit
} from 'angular2/core';

import {Product} from '../models/product';

@Component({
  selector: 'product-list',
  templateUrl: 'client/dev/product/templates/product_list.html',
  styleUrls: ['client/dev/product/styles/product.css']
})
export class ProductListCmp implements OnInit {
  productList: Product[] = [];

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.productList.push(new Product('assets/purse.jpg'));
    }
  }
}
