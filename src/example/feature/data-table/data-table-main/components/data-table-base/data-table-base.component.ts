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
      title: 'Data binding',
    },
    {
      routePath: 'editing',
      title: 'Editing',
    },
    {
      routePath: 'filtering',
      title: 'Filtering',
    },
    {
      routePath: 'grouping',
      title: 'Grouping',
    },
    {
      routePath: 'paging',
      title: 'Paging',
    },
    {
      routePath: 'sorting',
      title: 'Sorting',
    }
  ];
}
