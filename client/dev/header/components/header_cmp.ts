import {
  Component,
  OnInit
} from 'angular2/core';

import {ScrollWatcherDirective} from '../../watcher/directives/scroll_watcher_directive';

@Component({
  selector: 'hheader',
  templateUrl: 'client/dev/header/templates/header.html',
  styleUrls: ['client/dev/header/styles/header.css'],
  directives: [ScrollWatcherDirective]
})
export class HeaderCmp implements OnInit {
  static DELAY_CHANGE_COLOR = 3000;
  top: boolean = true;
  name: string = 'R';
  colors: string[] = [
    'pink',
    'fuchsia',
    'gold',
    'goldenrod',
    'black',
    'salmon',
    'tomato',
    'steelblue',
    'brown',
    'orange',
    '#FFA030',
    '#FF6773',
    '#87B29E',
    '#6ABBB5',
    '#F55A56',
    '#E5737D',
    '#369493',
    '#FFD292',
    '#F8A69A',
    '#D9CAAD',
    '#FFCA94',
    '#CFEFEC',
    '#81B2AC'
  ]
  color: string;

  ngOnInit() {
      setInterval(() => {
        this.color = this.colors[~~(Math.random() * this.colors.length)];
      }, HeaderCmp.DELAY_CHANGE_COLOR);
  }

  topEvHandler(ev: boolean) {
    this.top = ev;
  }
}
