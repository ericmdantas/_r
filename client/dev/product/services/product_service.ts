import {Observable} from 'rxjs/Observable';
import {Inject} from 'angular2/core';
import {IProduct, Product} from '../models/product';

export interface IProductService {
  getAll():Observable<IProduct[]>;
}

export class ProductService implements IProductService {
  constructor(@Inject(Product) private _product: IProduct) {

  }

  getAll():Observable<IProduct[]> {
    return new Observable((o) => {
      o.next([
        new Product('Bolsa', 'assets/b0.jpg'),
        new Product('Bolsa', 'assets/b1.jpg'),
        new Product('Bolsa', 'assets/b2.jpg'),
        new Product('Bolsa', 'assets/b3.jpg'),
        new Product('Bolsa', 'assets/b4.jpg'),
        new Product('Bolsa', 'assets/b5.jpg')
      ]);
    });
  }
}
