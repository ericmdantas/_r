import {
  Component
} from 'angular2/core';

import {HeaderCmp} from '../header/header_cmp';
import {FooterCmp} from '../footer/footer_cmp';

@Component({
  selector: 'app',
  templateUrl: 'client/app/app.html',
  styleUrls: ['client/app/app.css'],
  directives: [HeaderCmp, FooterCmp]
})
export class AppCmp {

}
