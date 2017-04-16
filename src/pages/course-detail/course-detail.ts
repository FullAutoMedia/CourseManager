import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Course } from '../../models/models';

/**
 * Generated class for the CourseDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-course-detail',
  templateUrl: 'course-detail.html',
})
export class CourseDetailPage {
  course: Course;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.course = navParams.get('course');
  }

}
