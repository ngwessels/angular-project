import { Component, OnInit } from '@angular/core';
import { SecondList } from '../information-mock';
import { ThirdList } from '../information-mock';
import { FirebaseListObservable } from 'angularfire2/database';
import { ListService } from '../lists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [ListService]
})
export class FooterComponent implements OnInit{
  // secondList = SecondList;
  // thirdList = ThirdList;
  secondList: FirebaseListObservable<any[]>;
  thirdList: FirebaseListObservable<any[]>;

  constructor(private router: Router, private listservice: ListService) {}
  displayInfo() {
    console.log(ThirdList);
  }

  ngOnInit() {
    this.secondList = this.listservice.getSecondLists();
    this.thirdList = this.listservice.getThirdLists();
  }

}
