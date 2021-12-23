import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ICourse } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  // private courseUrl = 'assets/course.json';
  private courseUrl = "{BASE64_ENCODED(uSiUI3kd9MLHngB76b5ER04XfUUZKVem3dIdRUAl:bRPsjdtPzq4hnnYnBR6Y3noDjNJvdrM8l6aDNxtc5uJGXceJcWVVpVw8fCs2L5v94IB5k46RNL1BVG1OThZDoE0iBf8qrf4eAep9EALwPwru53QfWj5Y7uy24S5PkGY5)} https://www.udemy.com/api-2.0/courses/";
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
