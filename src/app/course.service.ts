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
  private courseUrl = "uSiUI3kd9MLHngB76b5ER04XfUUZKVem3dIdRUAl:bRPsjdtPzq4hnnYnBR6Y3noDjNJvdrM8l6aDNxtc5uJGXceJcWVVpVw8fCs2L5v94IB5k46RNL1BVG1OThZDoE0iBf8qrf4eAep9EALwPwru53QfWj5Y7uy24S5PkGY5 http://localhost:4200/api/courses/";

  constructor(private http: HttpClient) { }

  getCategory(): Observable<ICourse[]> {


      // let headers = new HttpHeaders({
      //   Accept: "application/json, text/plain, */*",
      //   Authorization:
      //   "Basic {VlBGTnVkTkVJZXJaaDZrWnJxbkFsekNva3FESHFvdFpRNU1KVjlJTTp2M1JSN3RzTm84M2QwSnQyaUdTcndyd3BtSmVhNWxiOGQ5ejJQZ3R2dU1UNldGRExHcHNkbHRlOE12ck1QVk9ZSldoMGRTQ0ZWaDNsVkwzN0ViRkhpYzJmMVkwbjlWZ2phakJGdE5DbjRiNE9zTDQyUk5oYkhxNG9vWVAza0toVQ==(VPFNudNEIerZh6kZrqnAlzCokqDHqotZQ5MJV9IM:v3RR7tsNo83d0Jt2iGSrwrwpmJea5lb8d9z2PgtvuMT6WFDLGpsdlte8MvrMPVOYJWh0dSCFVh3lVL37EbFHic2f1Y0n9VgjajBFtNCn4b4OsL42RNhbHq4ooYP3kKhU)}",
      //   "Content-Type": "application/json;charset=utf-8",
      //   client_id: "VPFNudNEIerZh6kZrqnAlzCokqDHqotZQ5MJV9IM",
      //   client_secret:"v3RR7tsNo83d0Jt2iGSrwrwpmJea5lb8d9z2PgtvuMT6WFDLGpsdlte8MvrMPVOYJWh0dSCFVh3lVL37EbFHic2f1Y0n9VgjajBFtNCn4b4OsL42RNhbHq4ooYP3kKhU",
      // }).set( 'Access-Control-Allow-Origin', "Authorization: Basic {VlBGTnVkTkVJZXJaaDZrWnJxbkFsekNva3FESHFvdFpRNU1KVjlJTTp2M1JSN3RzTm84M2QwSnQyaUdTcndyd3BtSmVhNWxiOGQ5ejJQZ3R2dU1UNldGRExHcHNkbHRlOE12ck1QVk9ZSldoMGRTQ0ZWaDNsVkwzN0ViRkhpYzJmMVkwbjlWZ2phakJGdE5DbjRiNE9zTDQyUk5oYkhxNG9vWVAza0toVQ==(VPFNudNEIerZh6kZrqnAlzCokqDHqotZQ5MJV9IM:v3RR7tsNo83d0Jt2iGSrwrwpmJea5lb8d9z2PgtvuMT6WFDLGpsdlte8MvrMPVOYJWh0dSCFVh3lVL37EbFHic2f1Y0n9VgjajBFtNCn4b4OsL42RNhbHq4ooYP3kKhU)}");



    // let httpHeaders = new HttpHeaders({"Content-Type": "application/json", "Authorization": "Basic dVNpVUkza2Q5TUxIbmdCNzZiNUVSMDRYZlVVWktWZW0zZElkUlVBbDpiUlBzamR0UHpxNGhublluQlI2WTNub0RqTkp2ZHJNOGw2YUROeHRjNXVKR1hjZUpjV1ZWcFZ3OGZDczJMNXY5NElCNWs0NlJOTDFCVkcxT1RoWkRvRTBpQmY4cXJmNGVBZXA5RUFMd1B3cnU1M1FmV2o1WTd1eTI0UzVQa0dZNQ=="});
  // 'dVNpVUkza2Q5TUxIbmdCNzZiNUVSMDRYZlVVWktWZW0zZElkUlVBbDpiUlBzamR0UHpxNGhublluQlI2WTNub0RqTkp2ZHJNOGw2YUROeHRjNXVKR1hjZUpjV1ZWcFZ3OGZDczJMNXY5NElCNWs0NlJOTDFCVkcxT1RoWkRvRTBpQmY4cXJmNGVBZXA5RUFMd1B3cnU1M1FmV2o1WTd1eTI0UzVQa0dZNQ=='});
  // 'uSiUI3kd9MLHngB76b5ER04XfUUZKVem3dIdRUAl:bRPsjdtPzq4hnnYnBR6Y3noDjNJvdrM8l6aDNxtc5uJGXceJcWVVpVw8fCs2L5v94IB5k46RNL1BVG1OThZDoE0iBf8qrf4eAep9EALwPwru53QfWj5Y7uy24S5PkGY5'});

    // return this.http.get<ICourse[]>(this.courseUrl, { headers: httpHeaders })
    // .pipe(
    return this.http.get<ICourse[]>(this.courseUrl, { responseType:'text' as 'json' }).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError))};



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




