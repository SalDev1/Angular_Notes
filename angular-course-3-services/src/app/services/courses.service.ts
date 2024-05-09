import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private http: HttpClient) { 
    // Application Singleton.
    // console.log("creating CoursesService");
  }
  // Over here , we define the API Requests / Handlers -->
  loadCourses() : Observable<Course[]> {
    const params = new HttpParams().set("page","1").set("pageSize",10)

    return this.http.get<Course[]>('http://localhost:9000/api/courses' , {params})
  }

  saveCourse(course:Course) {
    // Define a Custom HTTP Header.
    const headers = new HttpHeaders().set("X-Auth","user-id");

    return this.http.put(`http://localhost:9000/api/courses/${course.id}`, course , {headers});
  }
}
