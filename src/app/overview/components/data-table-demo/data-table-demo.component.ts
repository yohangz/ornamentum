import { Component, ElementRef, Input } from '@angular/core';

import { data } from './data-table-demo.data';

@Component({
  selector: 'app-data-table-demo',
  templateUrl: './data-table-demo.component.html'
})
export class DataTableDemoComponent {
  public items: any;

  @Input()
  public parentElement: ElementRef;

  constructor() {
    this.items = data;
  }
}
