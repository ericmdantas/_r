import {
  Component,
  OnInit
} from 'angular2/core';

@Component({
  selector: 'hheader',
  templateUrl: 'client/dev/header/templates/header.html',
  styleUrls: ['client/dev/header/styles/header.css']
})
export class HeaderCmp implements OnInit {
  static DELAY_CHANGE_COLOR = 3000;
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
    '#FF6773'    
  ]
  color: string;

  ngOnInit() {
      setInterval(() => {
        this.color = this.colors[~~(Math.random() * this.colors.length)];
      }, HeaderCmp.DELAY_CHANGE_COLOR);
  }
}
