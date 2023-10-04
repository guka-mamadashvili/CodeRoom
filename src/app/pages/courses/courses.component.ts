import { Component } from '@angular/core';
import { Courses } from 'src/data/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  public courses: any = Courses;
  
}
