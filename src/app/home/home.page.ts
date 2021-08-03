import { DOCUMENT } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { dataModel } from '../models/dataModel';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  num = 0;
  constructor() {
  }

  public values: Array<dataModel> = [];

  arr: any;

  onSubmit() {
    let index: number = 0;
    console.log(this.num);
    for (index = 0; index < this.num; index++) {
      let dataNode: dataModel = new dataModel();
      dataNode.id = index;
      this.values.push(dataNode);
    }

    console.log(this.values.length);
    console.log(this.values);
  }

  onclick() {
    console.log(this.values);
  }

}
