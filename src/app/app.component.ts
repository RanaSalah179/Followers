import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 task = {
   title: 'Review Applications',
   assigne: {
     name: 'Jhon Smith'}
   };


  canSave = true;
courses;

onAdd() {
this.courses.push({id: 4 , name: 'course4'});
 }

 onRemove(course) {
   const index = this.courses.indexOf(course);
   this.courses.splice(index, 1);
 }
 loadCourses() {
   this.courses = [
    {id: 1 , name: 'course1'},
    {id: 2 , name: 'course2'},
    {id: 3 , name: 'course3'}
  ];
 }

 trackCourses(_index , course) {
   return course ? course.id : undefined;
 }
}
