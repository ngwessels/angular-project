import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Information } from '../information';
import { FirstList } from '../information-mock';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent{
  @Input() allLinks: Information[];
  @Output()  buttonPressed = new EventEmitter();
  firstLists  = FirstList;

  constructor() { }
  onClick(name: string) {
    this.buttonPressed.emit(name);
  }



}
