import { Component } from '@angular/core';

@Component({
  selector: 'app-data-table-base-component',
  templateUrl: './data-table-base.component.html',
  styleUrls: ['./data-table-base.component.scss']
})
export class DataTableBaseComponent {

  public usages = [
    {
      routePath: 'overview',
      title: 'Overview',
    },
    {
      routePath: 'data-binding',
      title: 'Data Binding',
    },
    {
      routePath: 'filtering',
      title: 'Filtering',
    },
    {
      routePath: 'paging',
      title: 'Paging',
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
      routePath: 'grouping',
      title: 'Grouping',
    },
  ];
}
