import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'top-ad',
  templateUrl: './top-ad.component.html',
  styleUrls: ['./top-ad.component.scss']
})
export class TopAdComponent{
  @Output() firstAdClicked = new EventEmitter();


  constructor() { }

  buttonPressed(name: string) {
    this.firstAdClicked.emit(name);
  }

}
