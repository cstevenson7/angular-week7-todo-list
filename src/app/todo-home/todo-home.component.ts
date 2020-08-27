import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.scss']
})
export class TodoHomeComponent implements OnInit {
  todoDescriptionDisplay;
  todoNameDisplay;
  todoCategoryDisplay;

  //Todo Reactive Form
  todoForm = new FormGroup({
    todoName: new FormControl('',[Validators.required, Validators.minLength(4)]),
    todoDescription: new FormControl('',[Validators.required]),
    todoCategory: new FormControl('',[Validators.required,Validators.minLength(5)])    

  })

  get todoName() {return this.todoForm.get('todoName')}

  get todoDescription() {return this.todoForm.get('todoDescription')}

  get todoCategory() {return this.todoForm.get('todoCategory')}


  // Form handler for the Reactive Form
  onSubmit(){
    console.log(`${this.todoForm.value.todoName}`)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
