import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'app-course-card',  // Defines what is the HTML tag that this component belongs to.
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})

export class CourseCardComponent implements AfterViewInit , AfterContentInit{

  @Input()
  // This is a way where we define the type object in angular.
  course:Course = <Course>{}

  @Input()
  index: number = 0;

  @Input()
  noImageTpl: TemplateRef<any> = <TemplateRef<any>>{}

  @Input()
  cardIndex:number=0;

  // To handle our own custom events , we need a custom event emitter. 
  // <> --> optional type parameter that is going to define what types of values 
  // are getting emitted.

  /*
    In the below example , we want to emit an instance of course and using 
    the course emitter to emit a custom value and pass in the selected course
    as a payload and will be call at the level of the parent component.

    Using the event handler , we can now retrieve the value that was emitted
    by the event emitter using the special dollar event variable.

    And finally mark the event with @Output Decorator , which will mark this event emitter 
    as an output of this component.
  */

  @Output()
  courseSelected = new EventEmitter<Course>()

  @ViewChild('courseImage')
  image : QueryList<ElementRef> = <QueryList<ElementRef>>{};

  // A Reference to the course image native DOM element.
  @ContentChild('courseImage')
  image1 : ElementRef = <ElementRef>{};

  // @ContentChild('container')
  // image2 : ElementRef = <ElementRef>{};

  @ContentChild(CourseImageComponent)
  image2: CourseImageComponent = <CourseImageComponent>{}

  @ContentChildren(CourseImageComponent)
  images : QueryList<CourseImageComponent> = <QueryList<CourseImageComponent>>{}

  ngAfterViewInit(): void {
    // console.log(this.image2)
  }

  ngAfterContentInit(): void {
    console.log(this.images)
  }
  
  constructor() {

  }
  onCourseViewed() {
    console.log("card component - button clicked ....");
    this.courseSelected.emit(this.course)
  }

  // This function checks if the course + course.id is defined or not.
  isImageVisible() {
    return this.course && this.course.iconUrl
  }

  cardClasses() {
    // If the course category is BEGINNER , then return beginner.
    if(this.course.category == 'BEGINNER') {
      return 'beginner';
    }
    else return '';
    // return {
    //   'beginner': this.course.category === 'BEGINNER', 
    //   // 'course-card': true
    // }
  }

  cardStyles() {
    return {
      'background-image' : 'url(' +  this.course.iconUrl + ')',
    }
  }
}
