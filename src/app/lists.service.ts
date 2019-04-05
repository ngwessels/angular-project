import { Injectable } from '@angular/core';
import { Information } from './information';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ListService {
  lists: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.lists = database.list('FirstList')
  }
  getLists(){
    console.log(this.lists);
    return this.lists;
}

}
