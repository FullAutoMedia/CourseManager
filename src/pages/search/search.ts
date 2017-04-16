import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CourseDetailPage } from '../course-detail/course-detail';
import { Courses } from '../../providers/providers';
import { Course } from '../../models/models';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  currentCourses: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public courses: Courses) {}

  /**
   * Perform a service for the proper items.
   */
  getCourses(ev) {
    let val = ev.target.value;
    if(!val || !val.trim()) {
      this.currentCourses = [];
      return;
    }
    this.currentCourses = this.courses.query({
      name: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openCourse(course: Course) {
    this.navCtrl.push(CourseDetailPage, {
      course: course
    });
  }

}
