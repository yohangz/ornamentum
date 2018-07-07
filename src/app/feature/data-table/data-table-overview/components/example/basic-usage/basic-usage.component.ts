import { Component, ElementRef, Input } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './basic-usage.data';

@Component({
  selector: 'app-basic-usage',
  templateUrl: './basic-usage.component.html'
})
export class BasicUsageComponent {
  public items: Observable<any>;

  @Input()
  public parentElement: ElementRef;

  constructor() {
    this.items = of(data);
  }
}
