import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Component({
  selector: 'main-body-page',
  templateUrl: './main-body-page.component.html',
  styleUrls: ['./main-body-page.component.scss']
})
export class MainBodyPageComponent implements OnInit{
  ngOnInit() {
    var storage = firebase.storage();
    var storageRef = storage.ref();
    var url = "gs://angular-project-acaab.appspot.com/";
    var imagesRef = storageRef.child('images');
    var fileName = 'statewide-flood.png';
    var spaceRef = imagesRef.child(fileName);
    var path = spaceRef.fullPath;
    var name = spaceRef.name;
    var imagesRef = spaceRef.parent;
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      var blob = xhr.response;
      console.log(blob);
    };
    xhr.open('GET', url);
    xhr.send();
  }
}
