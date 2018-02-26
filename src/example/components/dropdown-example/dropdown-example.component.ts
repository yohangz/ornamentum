import { Component } from '@angular/core';

import { DropdownItem } from '../../../library';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dropdown-example-component',
  templateUrl: './dropdown-example.component.html',
  styleUrls: ['./dropdown-example.component.scss']
})
export class DropdownExampleComponent {
  public items: Observable<any>;

  public selected = [];

  constructor() {
    this.items = Observable.of([
      {
        key: 1,
        value: 'test',
        group: 'A',
        disabled: false
      },
      {
        key: 2,
        group: 'A',
        value: 'test1',
        disabled: false
      },
      {
        key: 3,
        group: 'A',
        value: 'test2',
        disabled: true
      },
      {
        key: 4,
        group: 'A',
        value: 'test3',
        disabled: false
      },
      {
        key: 5,
        group: 'B',
        value: 'test34',
        disabled: false
      },
      {
        key: 6,
        group: 'B',
        value: 'test3',
        disabled: false
      },
      {
        key: 7,
        group: 'B',
        value: 'test3',
        disabled: false
      },
      {
        key: 8,
        group: 'C',
        value: 'test3',
        disabled: false
      },
      {
        key: 9,
        group: 'D',
        value: 'test3',
        disabled: false
      },
      {
        key: 10,
        group: 'A',
        value: 'test3',
        disabled: false
      },
      {
        key: 11,
        group: 'L',
        value: 'test3',
        disabled: false
      },
      {
        key: 12,
        group: 'D',
        value: 'test3',
        disabled: false
      },
      {
        key: 13,
        group: 'C',
        value: 'test3',
        disabled: false
      },
      {
        key: 14,
        group: 'A',
        value: 'test3',
        disabled: false
      }
    ]);

    this.selected = [
      {
        key: 13,
        group: 'C',
        value: 'test3',
        disabled: false
      },
      {
        key: 14,
        group: 'A',
        value: 'test3',
        disabled: false
      }
    ];
  }

  public onSelectChange(event: DropdownItem[]): void {
    console.log(event);
  }
}
