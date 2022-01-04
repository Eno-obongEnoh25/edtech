import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICourse } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Course List';
  errorMessage: string = '';
  sub!: Subscription;

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredcourse = this.performFilter(value);
  }

  filteredcourse: ICourse[] = [];
  course: ICourse[] = [];

  performFilter(filterBy: string): ICourse[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.course.filter((course: ICourse) =>
    course.title.toLocaleLowerCase().includes(filterBy));
  }

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.sub = this.courseService.getCategory().subscribe({
      next: course => {
        this.course = course;
        this.filteredcourse = this.course;
      },
        error: err => this.errorMessage = err
    });
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }

}
