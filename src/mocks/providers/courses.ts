import { Injectable } from '@angular/core';
import { Course } from '../../models/Course';

@Injectable()
export class Courses {
  private _courses: Course[] = [];
  
  constructor() {      
    this._courses.push(new Course("testcourse1"));
  }

  public get(): Course[] {
    return this._courses;
  }

  public add(course: Course): void {
    this._courses.push(course);
  }

  public delete(course: Course): void {
    let i: number = this._courses.indexOf(course);

    if (i >= 0) {
      this._courses.splice(i, 1);
    }
  }

  public update(course: Course): void {
    let i: number = this._courses.indexOf(course);

    if (i >= 0) {
      this._courses[i] = course;
    }
  }
}