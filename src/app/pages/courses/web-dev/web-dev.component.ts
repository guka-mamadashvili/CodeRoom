import { Component } from '@angular/core';
import { Courses } from 'src/data/courses';

// Define the type of your course objects
interface Course {
  // Define the properties of a course here
  courseCategory: string; // Assuming this property exists
  // Other properties...
}
@Component({
  selector: 'app-web-dev',
  templateUrl: './web-dev.component.html',
  styleUrls: ['./web-dev.component.css']
})
export class WebDevComponent {
  public courses: Course[] = Courses; // Specify the type as Course[]
  public filteredCourses: Course[]; // Specify the type as Course[]

  constructor() {
    // Filter the courses based on the courseCategory property
    this.filteredCourses = this.courses.filter((course: Course) => course.courseCategory === 'Web-Development');
  }
} 
