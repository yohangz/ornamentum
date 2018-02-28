import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { DropdownItem, DropdownQueryResult, DropdownRequestParams } from '../../../library';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-dropdown-example-component',
  templateUrl: './dropdown-example.component.html',
  styleUrls: ['./dropdown-example.component.scss']
})
export class DropdownExampleComponent {
  public items: Observable<any>;

  public selected = [];

  constructor() {
    // this.selected = [
    //   {
    //     key: 2,
    //     group: 'A',
    //     value: 'test1',
    //     disabled: false
    //   },
    //   {
    //     key: 3,
    //     group: 'A',
    //     value: 'test2',
    //     disabled: true
    //   }
    // ];

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

    setTimeout(() => {
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
    }, 5000);
  }

  public onSelectChange(event: DropdownItem[]): void {
    console.log(event);
  }

  public onDataBind(params: DropdownRequestParams): Observable<DropdownQueryResult<any>> {
    const dataStream = new Subject<DropdownQueryResult<any>>();
    const data: DropdownQueryResult<any> = {
      items: [
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
      ],
      count: 100
    };

    setInterval(() => {
      dataStream.next(data);
    }, 2000);

    return dataStream;
  }
}
