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
        new Product('Necessaire box', 'assets/b0.jpg'),
        new Product('Necessaire box', 'assets/b1.jpg'),
        new Product('Infinity scarf', 'assets/b2.jpg'),
        new Product('Necessaire box', 'assets/b3.jpg'),
        new Product('Necessaire box', 'assets/b4.jpg'),
        new Product('Necessaire box com forro em plástico', 'assets/b5.jpg'),
        new Product('Necessaire box', 'assets/b6.jpg'),
        new Product('Porta treco', 'assets/b7.jpg')
      ]);
    });
  }
}
