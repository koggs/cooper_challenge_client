import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any = {};

  constructor(public navCtrl: NavController) {} 
  calculate() {
    console.log(this.user);
  }
}
