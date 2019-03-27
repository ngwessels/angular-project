import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Keg } from '../keg';
import { TapRoom } from '../mock-kegs';
@Component({
  selector: 'inventory',
  templateUrl: './tap-room-inventory.component.html',
  styleUrls: ['./tap-room-inventory.component.css']
})
export class TapRoomInventoryComponent implements OnInit {
  ngOnInit() {
  }
  kegs = TapRoom;
  selectedKeg: Keg;
  onSelect(keg: Keg): void {
    this.selectedKeg = keg;
  }
  decrease(keg) {
    keg.pints--;
  }
  checkPrice(keg) {
    if(keg.price < 5) {
      return "green";
    }
    if(keg.price === 5) {
      return "orange";
    }
    if(keg.price > 5) {
      return "red";
    }
  }
  checkPints(keg) {
    if(keg.pints <= 10) {
      return "red";
    }
    if(keg.pints > 50) {
      return "green";
    }
    if(keg.pints < 50 && keg.pints > 10) {
      return "orange";
    }
  }
  checkABV(keg) {
    if(keg.alcoholContent > 5) {
      return "bold";
    }
  }

}
