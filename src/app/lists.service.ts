import { Injectable } from '@angular/core';
import { Information } from './information';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ListService {
  firstList: FirebaseListObservable<any[]>;
  secondList: FirebaseListObservable<any[]>;
  thirdList: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.firstList = database.list('FirstList');
    this.secondList = database.list('SecondList');
    this.thirdList = database.list('ThirdList');
  }
  getFirstLists(){
    console.log(this.firstList);
    return this.firstList;
  }
  getSecondLists(){
    return this.secondList;
  }
  getThirdLists(){
    return this.thirdList;
}

}
