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
      routePath: 'client-side-data-binding',
      title: 'Client Side Data Binding',
    },
    {
      routePath: 'server-side-data-binding',
      title: 'Server Side Data Binding',
    },
    {
      routePath: 'real-time-data-binding',
      title: 'Real Time Data Binding',
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
      routePath: 'column/filtering',
      title: 'Filtering',
    },
    {
      routePath: 'column/sorting',
      title: 'Sorting',
    },
    {
      routePath: 'column/resizable',
      title: 'Resizable',
    }
  ];

  public templates = [
    {
      routePath: 'templates/cell-template',
      title: 'Cell Template',
    },
    {
      routePath: 'templates/expand-template',
      title: 'Expand Template',
    }
  ];
}
