import {
  Component,
  Output,
  EventEmitter,
  Inject,
  provide,
  OnInit
} from 'angular2/core';

import {IProduct, Product} from '../models/product';
import {IProductService, ProductService} from '../services/product_service';

@Component({
  selector: 'product-list',
  templateUrl: 'client/dev/product/templates/product_list.html',
  styleUrls: ['client/dev/product/styles/product.css'],
  providers: [provide(Product, {useFactory: () => new Product('', '')}), ProductService]
})
export class ProductListCmp implements OnInit {
  productList: IProduct[] = [];

  @Output('productSelected')
  productSelected: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(ProductService) private productService: IProductService) {

  }

  ngOnInit() {
    this.productService
        .getAll()
        .subscribe((products) => {
          this.productList = products;
        });
  }

  productClickedHandler(p: IProduct) {
    this.productSelected.emit(p);
  }
}
