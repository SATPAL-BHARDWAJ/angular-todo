import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimeAgoPipe } from '../time-ago.pipe';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TodoComponent,
    FormComponent,
    ListComponent,
    TimeAgoPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TodoRoutingModule,
  ]
})
export class TodoModule { }
