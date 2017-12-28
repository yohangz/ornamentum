import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public items = [];
  public count = 0;
  public selected = [];
  public overrideTranslations: any;
  public itemSelected: any;
  public showFilter: boolean;

  constructor() {
    this.showFilter = false;

    this.overrideTranslations = {
      title: 'Select Items',
      searchPlaceholder: 'Search Data',
      searchEmptyResult: 'No Data Available',
      selectAll: 'Select All Options'
    };

    this.items = [
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
    ];

    this.selected = [
      {
        key: 5,
        value: 'test34',
        disabled: false
      },
      {
        key: 14,
        value: 'test3',
        disabled: false
      }
    ];

    this.itemSelected = {
      key: 5,
      value: 'test34',
      disabled: false
    };

    this.count = this.items.length;
  }

  public onSelectChange(event: any): void {
    console.log(event);
  }
}
