import {
  Component,
  OnInit
} from 'angular2/core';

@Component({
  selector: 'ffooter',
  templateUrl: 'client/dev/footer/templates/footer.html',
  styleUrls: ['client/dev/footer/styles/footer.css']
})
export class FooterCmp implements OnInit {
  data: string;

  ngOnInit() {
    let _data = new Date();
    
    this.data = `${_data.getDate()}/${_data.getMonth()}/${_data.getFullYear()}`;
  }
}
