import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  todoForm: FormGroup;


  constructor(
    public console: CommonService,
    private fb: FormBuilder
    ) {
    this.todoForm = this.fb.group({
      todos: this.fb.array([])
    })

    this.addTodo();
  }

  ngOnInit(): void {
  }

  get todos() {
    return this.todoForm.controls['todos'] as FormArray;
  }

  addTodo() {
    const todo = new FormGroup({
      title: new FormControl(''),
      descr: new FormControl('')
    })

    this.todos.push(todo);
  }

  removeTodo(index: number) {
    this.todos.removeAt(index);
  }

  submit() {
    this.console.store(this.todoForm.value['todos']);
    this.todos.clear();
    this.addTodo();
  }
}
