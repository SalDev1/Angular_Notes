import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { CoursesService } from '../services/courses.service';
import { FilterByCategoryPipe } from './filter-by-category.pipe';

@NgModule({
  declarations: [
    CourseCardComponent,
    CourseImageComponent,
    FilterByCategoryPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CourseCardComponent,
    CourseImageComponent,
    FilterByCategoryPipe
  ],
  providers:[CoursesService]
})
export class CoursesModule { }
