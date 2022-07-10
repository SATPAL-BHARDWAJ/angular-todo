import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    public service: CommonService
  ) { }

  ngOnInit(): void {
    this.service.log('todolist: ', this.service.todolist)
  }

}
