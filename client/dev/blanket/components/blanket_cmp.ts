import {
  Component,
  Output,
  EventEmitter
} from 'angular2/core';

@Component({
  selector: 'blanket',
  templateUrl: 'client/dev/blanket/templates/blanket.html',
  styleUrls: ['client/dev/blanket/styles/blanket.css']
})
export class BlanketCmp {
  hide: boolean = true;

  hideHandler() {
    this.hide = true;
  }

  showHandler() {
    this.hide = false;
  }
}
