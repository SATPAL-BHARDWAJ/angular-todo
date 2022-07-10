import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'base-component',
  template: '<p>template works</p>',
  styles: ['']
})
export class BaseComponent implements OnInit {
 
  constructor(public commonService: CommonService) {
    
  }

  ngOnInit(): void {
  }

}
