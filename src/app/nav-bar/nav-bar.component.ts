import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Information } from '../information';
import { FirstList } from '../information-mock';
import { FirebaseListObservable } from 'angularfire2/database';
import { ListService } from '../lists.service';
import { Router } from '@angular/router';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers: [ListService]
})
export class NavBarComponent implements OnInit {
  @Input() allLinks: Information[];
  @Output()  buttonPressed = new EventEmitter();
  lists: FirebaseListObservable<any[]>;
  // firstLists  = FirstList;
  constructor(private router: Router, private listservice: ListService) {}
  ngOnInit() {
    this.lists = this.listservice.getLists();
    console.log("Firebase:", this.lists);
  }

  onClick(name: string) {
    this.buttonPressed.emit(name);
  }


}
