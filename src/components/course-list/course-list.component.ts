import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Courses } from '../../providers/providers';
import { Course } from '../../models/models';
import { CourseDetailPage } from '../../pages/course-detail/course-detail';


@Component({
  selector: 'ae-course-list',
  templateUrl: 'course-list.component.html',
})
export class CourseListComponent {
  currentCourses: Course[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private courses: Courses) {
    this.currentCourses = this.courses.get();
    // console.log('ctor CourseList courseCount:' + this.currentCourses.length);
    // console.log('ctor CourseList course[0]:' + JSON.stringify(this.currentCourses[0]));
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
