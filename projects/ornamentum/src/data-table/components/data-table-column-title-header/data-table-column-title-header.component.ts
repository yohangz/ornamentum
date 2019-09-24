import { Component, Input } from '@angular/core';

import { get } from '../../../utility/services/object-utility.service';

import { DataFetchMode } from '../../models/data-fetch-mode.enum';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

import { DragAndDropService } from '../../../utility/utility.module';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';

/**
 * Column title header component; Render data table column headers
 */
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

  constructor(
    private dragAndDropService: DragAndDropService,
    private eventStateService: DataTableEventStateService,
    public dataStateService: DataTableDataStateService,
    public config: DataTableConfigService
  ) {}

  /**
   * Header click event handler
   * @param column Data table column component reference
   * @param event Mouse event arguments object
   */
  public onHeaderClick(column: DataTableColumnComponent, event: MouseEvent): void {
    if (!this.resizeInProgress) {
      this.sortData(column);
      this.eventStateService.headerClickStream.emit({ column, event });
    } else {
      this.resizeInProgress = false; // this is because I can't prevent click from mousup of the drag end
    }
  }

  /**
   * Sort data event handler
   * @param column Data table column component reference
   */
  private sortData(column: DataTableColumnComponent): void {
    if (column.sortable) {
      const prevSortOrder = column.sortOrder;
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

      if (this.config.multiColumnSortable) {
        if (column.sortOrder === '') {
          const sortColumns = this.columns.filter(item => item.sortable);
          sortColumns.forEach((sortColumn: DataTableColumnComponent) => {
            if (sortColumn !== column && sortColumn.sortPriority > column.sortPriority) {
              --sortColumn.sortPriority;
            }
          });

          column.sortPriority = undefined;
          --this.dataStateService.currentSortPriority;
        } else {
          if (!prevSortOrder) {
            column.sortPriority = ++this.dataStateService.currentSortPriority;
          }
        }
      }

      this.eventStateService.dataFetchStream.next(DataFetchMode.SOFT_LOAD);
    }
  }

  /**
   * Set column width
   * @param width Width value in pixels
   * @param column Data table column component reference
   */
  public setColumnWidth(width: number, column: DataTableColumnComponent): void {
    column.actualWidth = width;
  }

  /**
   * Column resize event handler
   * @param event Resize mouse event
   * @param column Data table column component
   * @param columnElement Table header cell element DOM reference
   */
  public onColumnResize(event: MouseEvent, column: DataTableColumnComponent, columnElement: HTMLTableHeaderCellElement): void {
    this.resizeInProgress = true;

    this.dragAndDropService.drag(event, {
      move: (moveEvent: MouseEvent, dx: number) => {
        const newWidth = columnElement.offsetWidth + dx;
        if (column.resizeMinLimit !== undefined && newWidth < column.resizeMinLimit) {
          return;
        }

        column.actualWidth = newWidth;
        let totalWidth = 0;

        this.columns.forEach(col => {
          col.width = col.actualWidth;
          totalWidth += col.width;
        });

        this.dataStateService.tableWidth = totalWidth;
      }
    });
  }

  /**
   * Set all row selected state
   * @param value All row selected status
   */
  public set allRowSelected(value: boolean) {
    this.dataStateService.allRowSelected = value;
    this.allRowSelectedChanged(this.dataStateService.allRowSelected);
    this.eventStateService.allRowSelectChangeStream.emit(this.dataStateService.allRowSelected);
  }

  /**
   * Get all row selected state.
   */
  public get allRowSelected(): boolean {
    return this.dataStateService.allRowSelected;
  }

  /**
   * All row select change event handler
   * @param selectedState Row selected status
   */
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

  /**
   * Get all row select checkbox display status.
   * @return True if all row select checkbox should be displayed
   */
  public get showAllRowSelectCheckbox(): boolean {
    return this.config.selectMode === 'multi' && this.config.showRowSelectAllCheckbox;
  }

  public showSortPriorityLabel(column: DataTableColumnComponent): boolean {
    return !!(this.config.multiColumnSortable && this.dataStateService.currentSortPriority > 1 && column.sortPriority);
  }
}
