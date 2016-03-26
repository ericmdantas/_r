import {
  Component
} from 'angular2/core';

@Component({
  selector: 'ffooter',
  templateUrl: 'client/dev/footer/templates/footer.html',
  styleUrls: ['client/dev/footer/styles/footer.css']
})
export class FooterCmp {
  year: number = new Date().getFullYear();
}
