import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ICourse } from './course';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  // private courseUrl = 'assets/course.json';
  // private courseUrl = "http://localhost:3000/api/courses";
  private courseUrl = "https://ud-edtech.herokuapp.com/api/courses";

  constructor(private http: HttpClient) { }

  getCategory() {
    return this.http.get(this.courseUrl)

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

function Base64ENCOCED(arg0: string): string | string[] {
  throw new Error('Function not implemented.');
}
// function BASE64_ENCODED(arg0: string): string | string[] {
//   throw new Error('Function not implemented.');
// }

