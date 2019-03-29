import { Component, OnInit } from '@angular/core';
import { SecondList } from '../information-mock';
import { ThirdList } from '../information-mock';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent{

  secondList = SecondList;
  thirdList = ThirdList;

  constructor() { }
  displayInfo() {
    console.log(ThirdList);
  }

}
let footer = new FooterComponent();
footer.displayInfo();
