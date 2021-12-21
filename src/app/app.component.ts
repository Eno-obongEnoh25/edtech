import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-expand navbar-light bg-light">
    <a class="navbar-brand">{{pageTitle}}</a>
    <ul class="nav nav-pills">
    <li><a class="nav-link" routerLink="/welcome">Welcome</a></li>
    <li><a class="nav-link" routerLink="/course">Course List</a></li>
    <li><a class="nav-link" routerLink="/course-detail">Course Detail</a></li>
    <li><a class="nav-link" routerLink="/course-review">Course Review</a></li>
    </ul>
  </nav>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Welcome To Udemy Assisted Edtech';
}
