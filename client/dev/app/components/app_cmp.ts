import {
  Component
} from 'angular2/core';

import {HeaderCmp} from '../../header/components/header_cmp';
import {FooterCmp} from '../../footer/components/footer_cmp';

@Component({
  selector: 'app',
  templateUrl: 'client/dev/app/templates/app.html',
  styleUrls: ['client/dev/app/styles/app.css'],
  directives: [HeaderCmp, FooterCmp]
})
export class AppCmp {

}