import {
  Component,
  Output,
  EventEmitter,
  OnInit
} from 'angular2/core';

import {IProduct, Product} from '../models/product';

@Component({
  selector: 'product-list',
  templateUrl: 'client/dev/product/templates/product_list.html',
  styleUrls: ['client/dev/product/styles/product.css']
})
export class ProductListCmp implements OnInit {
  productList: IProduct[] = [];

  @Output('productSelected')
  productSelected: EventEmitter<IProduct> = new EventEmitter();

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.productList.push(new Product('assets/purse.jpg'));
    }
  }

  productClickedHandler(p: IProduct) {
    this.productSelected.emit(p);
  }
}
