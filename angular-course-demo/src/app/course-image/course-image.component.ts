import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-image.component.html',
  styleUrl: './course-image.component.css'
})
export class CourseImageComponent {

  constructor() {}

  @Input('src')
  imageUrl:string=""

}
