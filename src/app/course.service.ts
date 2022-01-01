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
  private courseUrl = "BASE64_ENCODED(VPFNudNEIerZh6kZrqnAlzCokqDHqotZQ5MJV9IM:v3RR7tsNo83d0Jt2iGSrwrwpmJea5lb8d9z2PgtvuMT6WFDLGpsdlte8MvrMPVOYJWh0dSCFVh3lVL37EbFHic2f1Y0n9VgjajBFtNCn4b4OsL42RNhbHq4ooYP3kKhU) https://www.udemy.com/api-2.0/courses/";

  constructor(private http: HttpClient) { }

  getCategory(): Observable<ICourse[]> {

    // let headers = new HttpHeaders().set('Authorization', BASE64_ENCODED('VPFNudNEIerZh6kZrqnAlzCokqDHqotZQ5MJV9IM:v3RR7tsNo83d0Jt2iGSrwrwpmJea5lb8d9z2PgtvuMT6WFDLGpsdlte8MvrMPVOYJWh0dSCFVh3lVL37EbFHic2f1Y0n9VgjajBFtNCn4b4OsL42RNhbHq4ooYP3kKhU'));

    // return this.http.get<ICourse[]>(this.courseUrl, { headers }).pipe(
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
// function BASE64_ENCODED(arg0: string): string | string[] {
//   throw new Error('Function not implemented.');
// }

