import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    ContentChildren,
    DoCheck,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    QueryList,
    SimpleChanges,
    ViewEncapsulation
} from '@angular/core';
import {Course} from '../../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';
import { CoursesService } from '../../services/courses.service';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit , OnDestroy, OnChanges , 
AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit, DoCheck{

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();

    constructor(private courseService: CoursesService) {
        console.log("constructor")
    }
    ngOnInit() {
        console.log("ngOnInit")
    }
    ngOnDestroy() {
        console.log("")
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log("ngOnChanges",changes)
    }

    ngAfterContentChecked(): void {
        console.log("ngAfterContentChecked")
        this.course.description = 'ngAfterContentChecked'
        this.course.category = 'ADVANCED';
        this.course.iconUrl = '';
    }

    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked');
        this.course.description = 'ngAfterViewChecked'
    }

    ngDoCheck() {
        console.log("ngDoCheck");
    }

    ngAfterContentInit() {
        console.log("ngAfterContentInit");
    }

    ngAfterViewInit() {
        console.log("ngAfterViewInit");
    }

    onSaveClicked(description:string) {
        this.courseEmitter.emit({...this.course, description});
    }
}
