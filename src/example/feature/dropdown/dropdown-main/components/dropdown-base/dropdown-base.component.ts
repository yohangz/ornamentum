import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-base-component',
  templateUrl: './dropdown-base.component.html',
  styleUrls: ['./dropdown-base.component.scss']
})
export class DropdownBaseComponent {

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
