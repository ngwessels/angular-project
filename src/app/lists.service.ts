import { Injectable } from '@angular/core';
import { Information } from './information';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ListService {
  firstList: FirebaseListObservable<any[]>;
  secondList: FirebaseListObservable<any[]>;
  thirdList: FirebaseListObservable<any[]>;
  body: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.firstList = database.list('FirstList');
    this.secondList = database.list('SecondList');
    this.thirdList = database.list('ThirdList');
    this.body = database.list('body');
  }
  getFirstLists(){
    console.log(this.firstList);
    return this.firstList;
  }
  getSecondLists(){
    console.log("This is secondList:", this.secondList);
    return this.secondList;
  }
  getThirdLists(){
    return this.thirdList;
  }
  getBody() {
    return this.body;
  }
}
