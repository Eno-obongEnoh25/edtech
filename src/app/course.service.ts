import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ICourse } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courseUrl = 'assets/course.json';
  constructor(private http: HttpClient) { }

  getCategory(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(this.courseUrl).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';
    if(Error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
        errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
