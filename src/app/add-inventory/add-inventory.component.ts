import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../keg';
@Component({
  selector: 'add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.scss']
})
export class AddInventoryComponent{
  @Output() submitNew = new EventEmitter();

  newDrink = !null;
  constructor() {
   }
  onSubmit(name: string, brand: string, alcohol: string, flavor: string, price: string) {
    let newKeg: Keg = new Keg(name, brand, parseInt(alcohol), flavor, parseInt(price), 124);
    console.log(newKeg);
    this.submitNew.emit(newKeg);
  }

}
