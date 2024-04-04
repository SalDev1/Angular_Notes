import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseImageComponent } from './course-image/course-image.component';

/*
  @Component is a decorator which defines that the 
  give component is an Angular Component.
*/
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CourseCardComponent,CourseImageComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit {
  // We save the title in a particular object.
  constructor() {

  }

  data = {
    title : "This is me , salman",
    price : 5,
    rate : 0.67,
    course : COURSES[0]
  };
  // courseTitle = 'This is me , Salman';

  /*
    Any function we called in the ts file is going to be resolved 
    using the component.
  */
  onAlert = () => {
    alert("This is me , salman")
  }

  // Using the this keyword , we can now overwrite the heading 
  // with the text fill in the input field.
  onKeyUp(newTitle : string) {
    this.data.title = newTitle
  }

  courses = [...COURSES]
  // coreCourse = COURSES[0];
  // rxjsCourse = COURSES[1];
  // ngrxCourse = COURSES[2];

  // It follows this pattern --> (year,months,days). )
  startDate = new Date(2000,0,1);

  onCourseSelected(course: Course) {
    // console.log("App component - click event bubbled....." , course);
    console.log("card1 : ",this.card1)
    console.log("card2 : ",this.card2)
  }

  trackCourse(index:number,course:Course) {
    return course.id;
  }

  // @ViewChild(CourseCardComponent)
  // card : CourseCardComponent = <CourseCardComponent>{}

  
  @ViewChild('cardRef1' , {read: ElementRef})
  // card1 : CourseCardComponent = <CourseCardComponent>{}

  // Getting reference to the HTML element and not the component.
  card1 : ElementRef = <ElementRef>{}

  @ViewChild('cardRef2')
  card2 : CourseCardComponent = <CourseCardComponent>{}

  @ViewChild('container')
  container: ElementRef = <ElementRef>{}

  @ViewChild('courseImage')
  courseImage: ElementRef = <ElementRef>{}

  // {read : ElementRef} --> this will help you access the DOM element of each component.
  @ViewChildren(CourseCardComponent , {read: ElementRef})
  cards: QueryList<CourseCardComponent>= <QueryList<CourseCardComponent>>{}

  // LifeCycle Hook.
  ngAfterViewInit(): void {
    console.log("containerDiv" , this.card1)

    // This is the first Observable.
    // console.log(this.cards)
    // This is beaause changes is only going to emit new values if there is some modification to the state.
    // this.cards.changes.subscribe(
    //   cards => console.log(cards)
    // )
    // this.courses[0].description = "test";
    //console.log(this.cards)  // Gives us the instance of element refs.
  }

  onCoursesEdited() {
    this.courses.push(
      {
          id: 1,
          description: "Angular Core Deep Dive",
          iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
          longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
          category: 'INTERMEDIATE',
          lessonsCount: 10
      }
    )
  }
}
