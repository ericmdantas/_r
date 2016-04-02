import {
  Component,
  EventEmitter,
  Output
} from 'angular2/core';

import {IProduct, Product} from '../../product/models/product';

@Component({
  selector: 'modal',
  templateUrl: 'client/dev/modal/templates/modal.html',
  styleUrls: ['client/dev/modal/styles/modal.css'],
  host: {
    '(window:keyup)': 'keyUpHandler($event)'
  }
})
export class ModalCmp {
  product: IProduct = <Product>{};
  hide: boolean = true;

  @Output('hideModal')
  hideModal: EventEmitter<boolean> = new EventEmitter();

  @Output('showModal')
  showModal: EventEmitter<boolean> = new EventEmitter();

  setProduct(p: IProduct) {
    this.product = p;
    this.hide = false;
    this.showModal.emit(true);
  }

  hideHandler() {
    this.hide = true;
    this.hideModal.emit(true);
  }

  keyUpHandler(ev: KeyboardEvent) {
    if (ev.which === 27) {
      this.hideHandler();
    }
  }
}
