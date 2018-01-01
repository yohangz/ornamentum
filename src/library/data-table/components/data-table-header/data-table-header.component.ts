import { Component, forwardRef, Inject } from '@angular/core';

import { DataTableComponent } from '../data-table/data-table.component';

/**
 * Data table header component.
 * @class DataTableHeaderComponent
 */
@Component({
  selector: 'app-data-table-header',
  styleUrls: [ './data-table-header.component.scss' ],
  templateUrl: './data-table-header.component.html',
})
export class DataTableHeaderComponent {

  public columnSelectorOpenState = false;

  constructor(@Inject(forwardRef(() => DataTableComponent)) public dataTable: DataTableComponent) {
  }

  /**
   * Toggle column selector.
   */
  public toggleColumnSelector(): void {
    this.columnSelectorOpenState = !this.columnSelectorOpenState;
  }

  /**
   * Close column selector.
   */
  private closeColumnSelector(): void {
    this.columnSelectorOpenState = false;
  }
}
