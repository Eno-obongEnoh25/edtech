import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseReviewComponent } from './course-review/course-review.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseReviewComponent,
    WelcomeComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'course', component: CourseComponent },
      { path: 'course/:id', component: CourseDetailComponent },
      { path: 'course-review', component: CourseReviewComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'Welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'Welcome', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
