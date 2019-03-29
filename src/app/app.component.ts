import { Component } from '@angular/core';
import { Information } from './information';
import { FirstList } from './information-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Weather Channel Clone"
  linkPressed(name: string) {
    console.log(name);
  }
  adClicked(name: string) {
    console.log(name);
  }





}
