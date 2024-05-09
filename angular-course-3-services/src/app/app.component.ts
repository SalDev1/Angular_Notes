import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  // courses = COURSES;
  // Fetching the data from the server , using the HTTP Client which 
  // is the Angular HTTP Service.  

  // This is dependency injection.
  constructor(private http : HttpClient , private courseService:CoursesService) {

  }
  // courses;
  // To avoid the mutation of the data , we are going to define a course observable variable.
  courses$ : Observable<Course[]>;

  /*
    NgOnit is the best place where you can handle some asynchornous 
    functions.

    In order to instantiate the application component class , Angular
    is going to invoke the constructor and pass in multiple dependencies. 

    In this example , we understand the get + get parameters as well.
  */
  ngOnInit() {
    // console.log(this.courseService)
    // // You can pass in your own custom params to the url.
    // const params = new HttpParams().set("page","1").set("pageSize","10")

    // // this.http.get('/api/courses',{params}).subscribe(
    // //   courses => this.courses$ = courses
    // // )

    // // Fetching an observable of courses.
    // //  this.courses$ = this.http.get<Course[]>('/api/courses',{params})
    // this.courses$ = this.courseService.loadCourses();
  }

  save(course:Course){
    this.courseService.saveCourse(course).subscribe(
      () => console.log('Course Saved !')
    )
  }

  // Understanding the LifeCycle Hooks. 
  courses : Course[] = COURSES;
  onEditCourse() {
    // this.courses = [undefined];

    // Dealing with "OnChanges"
    const course = this.courses[0]
    const newCourse = {
      ...course, 
      description : 'ngOnChanges'
    };
    this.courses[0] = newCourse
  }
}
