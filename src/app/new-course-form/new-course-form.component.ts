import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})

export class NewCourseFormComponent implements OnInit {
  form;
  /* the previous declaration of form groups,controls and array
  = new FormGroup({
    name : new FormControl('', Validators.required),
    contact : new FormGroup({
      email : new FormControl(),
      phone : new FormControl()
    }),
    //using FormArray class
    topics : new FormArray([])

  }*/
  addTopic(topic: HTMLInputElement) {
     this.topics.push(new FormControl(topic.value));
     topic.value = '';
    }

    get topics() {
      return this.form.get('topics') as FormArray;
    }

    removeTopic(topic: FormControl) {
      const index = this.topics.controls.indexOf(topic);
      this.topics.removeAt(index);
    }

// on angular we we use the class FormBuilder that we use to build forms
// we will write the same code of the previous methods using FormBuilder
  constructor(fb: FormBuilder) {
   this.form = fb.group ({
      name : ['', Validators.required],
      contact : fb.group({
        email: [],
        phone: []
      }),
      topics : fb.array([])
    });
   }

  ngOnInit() {
  }

}
