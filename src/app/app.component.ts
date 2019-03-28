import { Component } from '@angular/core';
import { Keg } from './keg';
import { TapRoom } from './mock-kegs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tap-room';

  newKeg(input) {
    TapRoom.push(input);
  }





}
