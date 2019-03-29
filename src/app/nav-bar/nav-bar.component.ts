import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent{
  @Output()  buttonPressed = new EventEmitter();

  constructor() { }
  onClick(name: string) {
    this.buttonPressed.emit(name);
  }


}
