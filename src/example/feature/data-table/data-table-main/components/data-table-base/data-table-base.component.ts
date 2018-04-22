import { Component } from '@angular/core';

@Component({
  selector: 'app-data-table-base-component',
  templateUrl: './data-table-base.component.html',
  styleUrls: ['./data-table-base.component.scss']
})
export class DataTableBaseComponent {

  public tableConf = [
    {
      routePath: 'overview',
      title: 'Overview',
    },
    {
      routePath: 'data-binding',
      title: 'Data Binding',
    },
    {
      routePath: 'paging',
      title: 'Paging',
    },
    {
      routePath: 'translations',
      title: 'Translations',
    },
    {
      routePath: 'header-details',
      title: 'Header Details',
    },
    {
      routePath: 'data-persistence',
      title: 'Data Persistence',
    },
    {
      routePath: 'limit',
      title: 'Data Limit',
    },
    {
      routePath: 'substitute-rows',
      title: 'Substitute Rows',
    },
    {
      routePath: 'responsive-configuration',
      title: 'Responsive Configuration',
    },
    {
      routePath: 'loading-spinner',
      title: 'Data Loading Spinner',
    },
    {
      routePath: 'grouping',
      title: 'Grouping',
    },
    {
      routePath: 'events',
      title: 'Events',
    }
  ];

  public columnConf = [
    {
      routePath: 'filtering',
      title: 'Filtering',
    },
    {
      routePath: 'sorting',
      title: 'Sorting',
    },
    {
      routePath: 'resizable',
      title: 'Resizable',
    },
    {
      routePath: 'responsive-configuration',
      title: 'Responsive Configuration',
    },
    {
      routePath: 'grouping',
      title: 'Grouping',
    },
  ];
}
