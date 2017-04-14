import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Courses } from '../../providers/providers';
import { Course } from '../../models/models';

/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  currentCourses: Course[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private courses: Courses) {
    this.currentCourses = this.courses.get();
    console.log('ctor Dashboard courseCount:' + this.currentCourses.length);
    console.log('ctor Dashboard course[0]:' + JSON.stringify(this.currentCourses[0]));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dashboard');    
  }

  /**
   * Navigate to the detail page for this item.
   */
  // openItem(item: Item) {
  //   this.navCtrl.push(ItemDetailPage, {
  //     item: item
  //   });
  // }
}
