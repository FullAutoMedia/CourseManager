import { Injectable } from '@angular/core';
import { Course } from '../../models/Course';

@Injectable()
export class Courses {
  private _courses: Course[] = [];
  
  constructor() {      
    this._courses.push(new Course("Taryn Laramie - Senior Software Developer", "Great reasons why we should work together.", "assets/img/speakers/lion.jpg", 
      "<ul><li>Smart</li>"
      + "<li>Gets things DONE</li>"
      + "<li>Agile</li>"
      + "<li>Works well with others (aka 'not a jerk' - Joel Spolsky)</li>"
      + "<li>Attention to software quality and maintainability</li>"
      + "<li>Experienced in all areas of application lifecycle</li>"
      + "</ul>"));
    this._courses.push(new Course("Angular v4.0", "A quick look at Angular basics.", "assets/img/speakers/bear.jpg", 
      "<ul><li><b>Develop Across All Platforms</b>  Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.</li>"
      + "<li><b>Speed & Performance</b>  Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering.</li>"
      + "<li><b>Incredible Tooling</b>  Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work.</li>"
      + "<li><b>Loved by Millions</b>  From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's largest applications.</li>"
      + "</ul>"));
    this._courses.push(new Course("Agile Development", "Evolving solutions", "assets/img/speakers/cheetah.jpg", 
    "<ul>"
    + "<li><b>Individuals and Interactions</b>  over processes and tools</li>"
    + "<li><b>Working Software</b>  over comprehensive documentation</li>"
    + "<li><b>Customer Collaboration</b>  over contract negotiation</li>"
    + "<li><b>Responding to Change</b>  over following a plan</li>"
    + "</ul>"));        
    this._courses.push(new Course("Design Patterns", "Don't Repeat Yourself", "assets/img/speakers/elephant.jpg", 
    "<ul>"
    + "<li><b>Decorator</b>  Attach additional responsibilities to an object dynamically keeping the same interface. Decorators provide a flexible alternative to subclassing for extending functionality.</li>"
    + "<li><b>Singleton</b>  Ensure a class has only one instance, and provide a global point of access to it</li>"
    + "<li><b>Factory</b> Provide an interface for creating families of related or dependent objects without specifying their concrete classes.</li>"
    + "</ul>"));
    
    this._courses.push(new Course("Production Support", "How to keep clients happy", "assets/img/speakers/duck.jpg", 
    "<ul>"
    + "<li>Inform client you are addressing the issue and the estimated timeframe of resolution</li>"
    + "<li>Depending on severity and/or other factors, notify appropriate internal stakeholders</li>"
    + "<li>Try to reproduce while limiting affects on production (i.e. use dev/test environments)</li>"
    + "<li>Once issue is reproduced, correct it</li>"
    + "<li>Notify client that fix is available and when it will be live</li>"
    + "<li>Deploy fix</li>"
    + "<li>Notify client fix is live</li>"
    + "</ul>"));
    this._courses.push(new Course("SPA Performance", "Need for Speed", "assets/img/speakers/iguana.jpg", 
    "<ul>"
    + "<li>Caching</li>"
    + "<li>Minification</li>"
    + "<li>AOT</li>"
    + "<li>Dead code elimination</li>"
    + "</ul>"));
    this._courses.push(new Course("Object Oriented Programming 101", "Polymorphism - not just for sheep", "assets/img/speakers/kitten.jpg", 
    "<p class='word-wrap'>In object-oriented programming, polymorphism refers to a programming language's ability to process objects differently depending on their data type or class."
    + "More specifically, it is the ability to redefine methods for derived classes. </p>"));

    this._courses.push(new Course("Advanced Javascript", "Scope, closures and you", "assets/img/speakers/mouse.jpg", 
    "<ul>"
    + "<li>Global Scope</li>"
    + "<li>Local Scope</li>"
    + "<li>Nested Functions</li>"
    + "<li>Self Invoking Functions</li>"
    + "</ul>"));

    this._courses.push(new Course("Debugging Techniques", "Find and squash bugs more quickly, even without log files", "assets/img/speakers/giraffe.jpg", 
    "<ul>"
    + "<li>Console</li>"
    + "<li>Debugger</li>"
    + "</ul>"));
  }

  public get(): Course[] {
    return this._courses;
  }

  // public add(course: Course): void {
  //   this._courses.push(course);
  // }

  // public delete(course: Course): void {
  //   let i: number = this._courses.indexOf(course);

  //   if (i >= 0) {
  //     this._courses.splice(i, 1);
  //   }
  // }

  // public update(course: Course): void {
  //   let i: number = this._courses.indexOf(course);

  //   if (i >= 0) {
  //     this._courses[i] = course;
  //   }
  // }

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