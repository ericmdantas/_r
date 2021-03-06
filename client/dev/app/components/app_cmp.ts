import {
  Component
} from 'angular2/core';

import {HeaderCmp} from '../../header/components/header_cmp';
import {FooterCmp} from '../../footer/components/footer_cmp';
import {ProductListCmp} from '../../product/components/product_list_cmp';
import {ModalCmp} from '../../modal/components/modal_cmp';
import {BlanketCmp} from '../../blanket/components/blanket_cmp';

@Component({
  selector: 'app',
  templateUrl: 'client/dev/app/templates/app.html',
  styleUrls: ['client/dev/app/styles/app.css'],
  directives: [HeaderCmp, FooterCmp, ProductListCmp, ModalCmp, BlanketCmp]
})
export class AppCmp {

}
