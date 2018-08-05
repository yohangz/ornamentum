import { Component, EventEmitter, Input } from '@angular/core';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

@Component({
  selector: 'ng-data-table-column-selector',
  templateUrl: './data-table-column-selector.component.html'
})
export class DataTableColumnSelectorComponent {
  @Input()
  public columns: DataTableColumnComponent;

  @Input()
  public close: EventEmitter<void>;

  public closeColumnSelector(event: Event): void {
    const target = event.target as HTMLElement;
    if (target && target.className.indexOf('ng-data-table-column-selector-button') > -1) {
      return;
    }

    this.close.next();
  }
}
