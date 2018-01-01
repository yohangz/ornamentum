import { Component } from '@angular/core';
import { DataTableResource } from '../library/data-table/services/data-table-resource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // public items = [];
  // public count = 0;
  // public selected = [];
  // public overrideTranslations: any;
  // public itemSelected: any;
  // public showFilter: boolean;

  public items: any[] = [];
  public itemCount: number;
  public tableResource: DataTableResource<any>;

  constructor() {
    this.fetchAlgorithmsData();
  }

  // constructor() {
  //   this.showFilter = false;
  //
  //   this.overrideTranslations = {
  //     title: 'Select Items',
  //     searchPlaceholder: 'Search Data',
  //     searchEmptyResult: 'No Data Available',
  //     selectAll: 'Select All Options'
  //   };
  //
  //   this.items = [
  //     {
  //       key: 1,
  //       value: 'test',
  //       group: 'A',
  //       disabled: false
  //     },
  //     {
  //       key: 2,
  //       group: 'A',
  //       value: 'test1',
  //       disabled: false
  //     },
  //     {
  //       key: 3,
  //       group: 'A',
  //       value: 'test2',
  //       disabled: true
  //     },
  //     {
  //       key: 4,
  //       group: 'A',
  //       value: 'test3',
  //       disabled: false
  //     },
  //     {
  //       key: 5,
  //       group: 'B',
  //       value: 'test34',
  //       disabled: false
  //     },
  //     {
  //       key: 6,
  //       group: 'B',
  //       value: 'test3',
  //       disabled: false
  //     },
  //     {
  //       key: 7,
  //       group: 'B',
  //       value: 'test3',
  //       disabled: false
  //     },
  //     {
  //       key: 8,
  //       group: 'C',
  //       value: 'test3',
  //       disabled: false
  //     },
  //     {
  //       key: 9,
  //       group: 'D',
  //       value: 'test3',
  //       disabled: false
  //     },
  //     {
  //       key: 10,
  //       group: 'A',
  //       value: 'test3',
  //       disabled: false
  //     },
  //     {
  //       key: 11,
  //       group: 'L',
  //       value: 'test3',
  //       disabled: false
  //     },
  //     {
  //       key: 12,
  //       group: 'D',
  //       value: 'test3',
  //       disabled: false
  //     },
  //     {
  //       key: 13,
  //       group: 'C',
  //       value: 'test3',
  //       disabled: false
  //     },
  //     {
  //       key: 14,
  //       group: 'A',
  //       value: 'test3',
  //       disabled: false
  //     }
  //   ];
  //
  //   this.selected = [
  //     {
  //       key: 5,
  //       value: 'test34',
  //       disabled: false
  //     },
  //     {
  //       key: 14,
  //       value: 'test3',
  //       disabled: false
  //     }
  //   ];
  //
  //   this.itemSelected = {
  //     key: 5,
  //     value: 'test34',
  //     disabled: false
  //   };
  //
  //   this.count = this.items.length;
  // }

  private fetchAlgorithmsData(): void {
    this.tableResource = new DataTableResource();
    this.tableResource.items = [
      {
        "userID": null,
        "algorithmID": 823,
        "algorithmName": "Top Trending Deals Inspired By Your Preferences",
        "customText": "-",
        "defaultText": "Top Trending Deals Inspired By Your Preferences",
        "description": "-",
        "algorithmType": "DEAL"
      },
      {
        "userID": null,
        "algorithmID": 826,
        "algorithmName": "Top Trending Deals Inspired By Your Preferences By Percentage Range",
        "customText": "-",
        "defaultText": "Top Trending Deals Inspired By Your Preferences By Percentage Range",
        "description": "-",
        "algorithmType": "DEAL"
      },
      {
        "userID": null,
        "algorithmID": 825,
        "algorithmName": "Top Trending Deals Inspired By Your Preferences By Price Range",
        "customText": "-",
        "defaultText": "Top Trending Deals Inspired By Your Preferences By Price Range",
        "description": "-",
        "algorithmType": "DEAL"
      },
      {
        "userID": null,
        "algorithmID": 5001,
        "algorithmName": "Top Trending Decay",
        "customText": "-",
        "defaultText": "Top Trending Decay",
        "description": "-",
        "algorithmType": "FLAT"
      },
      {
        "userID": null,
        "algorithmID": 5002,
        "algorithmName": "Top Trending Inspired By Your Preferences5002",
        "customText": "-",
        "defaultText": "Top Trending Inspired By Your Preferences",
        "description": "-",
        "algorithmType": "FLAT"
      },
      {
        "userID": null,
        "algorithmID": 5003,
        "algorithmName": "Top Trending Decay5003",
        "customText": "-",
        "defaultText": "Top Trending Decay",
        "description": "-",
        "algorithmType": "FLAT"
      },    {
        "userID": null,
        "algorithmID": 5004,
        "algorithmName": "Top Trending Decay5004",
        "customText": "-",
        "defaultText": "Top Trending Decay",
        "description": "-",
        "algorithmType": "FLAT"
      },
      {
        "userID": null,
        "algorithmID": 5005,
        "algorithmName": "Top Trending Decay5005",
        "customText": "-",
        "defaultText": "Top Trending Decay",
        "description": "-",
        "algorithmType": "FLAT"
      },
      {
        "userID": null,
        "algorithmID": 5006,
        "algorithmName": "Top Trending Decay5006",
        "customText": "-",
        "defaultText": "Top Trending Decay",
        "description": "-",
        "algorithmType": "FLAT"
      }
    ];

    this.tableResource.count().then((count) => this.itemCount = count);
  }

  /**
   * Data table refresh event handler.
   * @param params  Event payload.
   */
  public onRefresh(params?: any): void {
    this.fetchAlgorithmsData();
    this.tableResource.query(params).then((items) => this.items = items);
  }

  /**
   * Data table data load event handler.
   * @param {DataTableParams} params  grid parameters.
   */
  public onDataLoad(params?: any): void {
    this.tableResource.query(params).then((items) => this.items = items);
  }


  public onSelectChange(event: any): void {
    console.log(event);
  }
}
