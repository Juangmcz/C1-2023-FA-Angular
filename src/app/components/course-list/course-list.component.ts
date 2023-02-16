import { Component } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent {
  total: number = 0;
  typeSearch: string = '';
  searchingBy: string = '';
  courses: Course[] = [];
  typeSearchList: string[] = ['Name', 'Coach', 'Level'];

  constructor(private service: CourseService) {}

  onSearch(): void {
    switch (this.typeSearch) {
      case 'Name': {
        this.getByName();
        break;
      }

      case 'Coach': {
        this.getByCoach();
        break;
      }

      case 'Level': {
        this.getByLevel();
        break;
      }
    }
  }

  getByName(): void {
    if (this.searchingBy) {
      this.service.getByName(this.searchingBy).subscribe({
        next: (course) => {
          this.courses = [course];
          this.total = this.courses.length;
        },
        error: console.log,
        complete: console.log,
      });
    } else {
      this.courses = [];
      this.total = this.courses.length;
      alert('Please, enter a name');
    }
  }

  getByCoach(): void {
    if (this.searchingBy) {
      this.service.getByCoach(this.searchingBy).subscribe({
        next: (course) => {
          this.courses = course;
          this.total = this.courses.length;
        },
        error: console.log,
        complete: console.log,
      });
    } else {
      this.courses = [];
      this.total = this.courses.length;
      alert('Please, enter a coach');
    }
  }

  getByLevel(): void {
    if (this.searchingBy) {
      this.service.getByLevel(this.searchingBy).subscribe({
        next: (course) => {
          this.courses = course;
          this.total = this.courses.length;
        },
        error: console.log,
        complete: console.log,
      });
    } else {
      this.courses = [];
      this.total = this.courses.length;
      alert('Please, enter a level');
    }
  }
}
