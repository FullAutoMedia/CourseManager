import { Injectable } from '@angular/core';
import { Course } from '../../models/Course';

@Injectable()
export class Courses {
  private _courses: Course[] = [];
  
  constructor() {      
    this._courses.push(new Course("Angular v4.0", "A quick look at Angular basics.", "assets/img/speakers/bear.jpg"));
    this._courses.push(new Course("Agile Development", "Implementing adaptive planning, evolutionary development, early delivery, and continuous improvement", "assets/img/speakers/cheetah.jpg"));
    this._courses.push(new Course("Advanced Javascript", "Scope, closures and you", "assets/img/speakers/duck.jpg"));
    this._courses.push(new Course("Production Support", "Customer service and solving problems", "assets/img/speakers/eagle.jpg"));
    this._courses.push(new Course("Design Patterns", "Decorators, Singletons, Factories, Event Emitters and more", "assets/img/speakers/elephant.jpg"));
    this._courses.push(new Course("Debugging Techniques", "Find and squash bugs more quickly, even without log files", "assets/img/speakers/giraffe.jpg"));
    this._courses.push(new Course("SPA Performance", "Speeding up SPA's with AOT and other techniques", "assets/img/speakers/iguana.jpg"));
    this._courses.push(new Course("Object Oriented Programming 101", "Polymorphism - not just for sheep", "assets/img/speakers/kitten.jpg"));
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

  query(params?: any) {
    if(!params) {
      return this._courses;
    }

    return this._courses.filter((course) => {
      for(let key in params) {
        let field = course[key];
        if(typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return course;
        } else if(field == params[key]) {
          return course;
        }
      }
      return null;
    });
  }
}