import { Component, Input } from '@angular/core';

import get from 'lodash-es/get';

import { DataTableSelectMode } from '../../models/data-table-select-mode.model';
import { DataFetchMode } from '../../models/data-fetch-mode.enum';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

import { DragAndDropService } from '../../../utility/utility.module';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';

@Component({
  exportAs: 'ngDataTableColumnTitleHeader',
  // tslint:disable-next-line
  selector: '[ngDataTableColumnTitleHeader]',
  templateUrl: './data-table-column-title-header.component.html'
})
export class DataTableColumnTitleHeaderComponent {
  private resizeInProgress = false;

  @Input()
  public columns: DataTableColumnComponent[];

  constructor(private dragAndDropService: DragAndDropService,
              private eventStateService: DataTableEventStateService,
              private dataStateService: DataTableDataStateService,
              public config: DataTableConfigService) {
  }

  public onHeaderClick(column: DataTableColumnComponent, event: MouseEvent): void {
    if (!this.resizeInProgress) {
      this.sortData(column);
      this.eventStateService.headerClickStream.emit({column, event});
    } else {
      this.resizeInProgress = false; // this is because I can't prevent click from mousup of the drag end
    }
  }

  private sortData(column: DataTableColumnComponent): void {
    if (column.sortable) {
      if (column.sortOrder) {
        column.sortOrder = column.getNewSortOrder();
      } else {
        if (!this.config.multiColumnSortable) {
          const sortColumns = this.columns.filter(item => item.sortable);
          sortColumns.forEach((sortColumn: DataTableColumnComponent) => {
            if (sortColumn !== column) {
              sortColumn.sortOrder = '';
            }
          });
        }

        column.sortOrder = 'asc';
      }

      this.eventStateService.dataFetchStream.next(DataFetchMode.SOFT_LOAD);
    }
  }

  public setColumnWidth(width: number, column: DataTableColumnComponent) {
    column.actualWidth = width;
  }

  public onColumnResize(event: MouseEvent, column: DataTableColumnComponent, columnElement: HTMLTableHeaderCellElement) {
    this.resizeInProgress = true;

    this.dragAndDropService.drag(event, {
      move: (moveEvent: MouseEvent, dx: number) => {
        const newWidth = columnElement.offsetWidth + dx;
        if (column.resizeMinLimit !== undefined && newWidth < column.resizeMinLimit) {
          return;
        }

        column.actualWidth = newWidth;
        let totalWidth = 0;

        this.columns.forEach((col) => {
          col.width = col.actualWidth;
          totalWidth += col.width;
        });

        this.dataStateService.tableWidth = totalWidth;
      }
    });
  }

  public set allRowSelected(value: boolean) {
    this.dataStateService.allRowSelected = value;
    this.allRowSelectedChanged(this.dataStateService.allRowSelected);
    this.eventStateService.allRowSelectChangeStream.emit(this.dataStateService.allRowSelected);
  }

  public get allRowSelected(): boolean {
    return this.dataStateService.allRowSelected;
  }

  private allRowSelectedChanged(selectedState: boolean): void {
    this.dataStateService.dataRows.forEach(row => {
      const id = get(row.item, this.config.selectTrackBy);
      const index = this.dataStateService.selectedRows.indexOf(id);
      if (selectedState && index < 0) {
        this.dataStateService.selectedRows.push(id);
      } else if (!selectedState && index > -1) {
        this.dataStateService.selectedRows.splice(index, 1);
      }

      row.selected = selectedState;
    });

    this.eventStateService.rowSelectChangeStream.emit(this.dataStateService.selectedRows);
  }

  public get showAllRowSelectCheckbox(): boolean {
    return this.config.selectMode === 'multi' && this.config.showRowSelectAllCheckbox;
  }
}
