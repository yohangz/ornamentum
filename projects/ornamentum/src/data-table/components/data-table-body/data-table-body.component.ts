import { Component, Input, TemplateRef } from '@angular/core';

import get from 'lodash-es/get';

import { DataTableRow } from '../../models/data-table-row.model';
import { DataTableSelectMode } from '../../models/data-table-select-mode.model';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';

/**
 * Data table body component.
 * @class DataTableBodyComponent
 */
@Component({
  exportAs: 'ngDataTableBody',
  // tslint:disable-next-line
  selector: '[ngDataTableBody]',
  templateUrl: './data-table-body.component.html'
})
export class DataTableBodyComponent {
  @Input()
  public columns: DataTableColumnComponent[];

  @Input()
  public rowExpandTemplate: TemplateRef<any>;

  @Input()
  public rowExpandLoadingSpinnerTemplate: TemplateRef<any>;

  constructor(public config: DataTableConfigService,
              public dataStateService: DataTableDataStateService,
              private eventStateService: DataTableEventStateService) {
  }

  /**
   * Get current page index.
   * @return {number} Page index.
   */
  public getDisplayIndex(dataRow: DataTableRow<any>): number {
    if (this.config.pageable) {
      return this.config.offset + dataRow.index + 1;
    } else {
      return dataRow.index + 1;
    }
  }

  /**
   * Is odd row.
   * @param {DataTableRow} row Data row object.
   * @return {boolean} True if odd row.
   */
  public isOddRow(row: DataTableRow<any>): boolean {
    return row.index % 2 === 0;
  }

  /**
   * Is even row
   * @param {DataTableRow} row Data row object.
   * @return {boolean} True if even row.
   */
  public isEvenRow(row: DataTableRow<any>): boolean {
    return row.index % 2 === 1;
  }

  /**
   * Is odd substitute row
   * @param {number} index Row index.
   * @return {boolean} True if odd row.
   */
  public isOddSubstituteRow(index: number): boolean {
    return (index + this.dataStateService.substituteRows.length) % 2 === 0;
  }

  /**
   * Is even substitute row
   * @param {number} index Row index.
   * @return {boolean} True if even row.
   */
  public isEvenSubstituteRow(index: number): boolean {
    return (index + this.dataStateService.substituteRows.length) % 2 === 1;
  }

  /**
   * On row expand event handler.
   * @param {Event} $event Click event arguments.
   * @param {DataTableRow} dataRow Data row object.
   */
  public onRowExpand($event: Event, dataRow: DataTableRow<any>): void {
    dataRow.expanded = !dataRow.expanded;

    if (!this.config.showRowExpandLoadingSpinner) {
      dataRow.dataLoaded = true;
    }
  }

  /**
   * On row initialize event handler.
   * @param dataRow Data table row.
   */
  public onRowInit(dataRow): void {
    setTimeout(() => {
      this.eventStateService.rowBindStream.emit(dataRow);
    });
  }

  /**
   * On cell initialize event handler.
   * @param {DataTableColumnComponent} column Data table column component.
   * @param {DataTableRow} row Data table row.
   */
  public onCellInit(column: DataTableColumnComponent, row: DataTableRow<any>): void {
    setTimeout(() => {
      this.eventStateService.cellBindStream.emit({
        column: column,
        row: row
      });
    });
  }

  /**
   * Cell clicked event handler.
   * @param {DataTableColumnComponent} column Column data table component object.
   * @param {DataTableRow} row Data row object.
   * @param {MouseEvent} event event event Mouse click event argument object.
   */
  public cellClicked(column: DataTableColumnComponent, row: DataTableRow<any>, event: MouseEvent): void {
    this.eventStateService.cellClickStream.emit({row, column, event});
  }

  /**
   * Get row span collection
   * @param {DataTableRow} row Data row.
   * @return {any[]} Row span dummy array.
   */
  public getRowSpanCollection(row: DataTableRow<any>): any[] {
    return Array.from({length: this.dataStateService.onDynamicRowSpanExtract(row)});
  }

  /**
   * Get total column count.
   * Used for substitute row generation.
   * @return {number} Number of columns.
   */
  public get totalColumnCount(): number {
    let count = 0;
    count += this.config.showIndexColumn ? 1 : 0;
    count += this.config.showRowSelectCheckboxColumn ? 1 : 0;
    count += this.config.expandableRows ? 1 : 0;
    this.columns.forEach(column => {
      count += column.visible ? 1 : 0;
    });

    return count;
  }

  /**
   * On row click event.
   * @param {DataTableRow} row Data row object.
   * @param {Event} event Row click event.
   */
  public onRowSelectClick(row: DataTableRow<any>, event: Event): void {
    // Prevent single mode checkbox getting unchecked on tapping already selected.
    if (this.config.selectMode === DataTableSelectMode.SINGLE) {
      const id = get(row.item, this.config.selectTrackBy);
      const previousSelection = this.dataStateService.selectedRow;
      this.dataStateService.selectedRow = id;

      if (previousSelection === id) {
        event.preventDefault();
        row.selected = true;
      }
    }
  }

  /**
   * On row selection change event.
   * Maintain selected row state.
   * @param {DataTableRow} row Data row object.
   */
  public onRowSelectChange(row: DataTableRow<any>): void {
    const id = get(row.item, this.config.selectTrackBy);

    switch (this.config.selectMode) {
      case DataTableSelectMode.MULTI: {
        const index = this.dataStateService.selectedRows.indexOf(id);
        if (row.selected && index < 0) {
          this.dataStateService.selectedRows.push(id);
        } else if (!row.selected && index > -1) {
          this.dataStateService.selectedRows.splice(index, 1);
        }

        this.dataStateService.allRowSelected = this.dataStateService.dataRows.every((dataRow: DataTableRow<any>) => {
          return dataRow.selected;
        });

        this.eventStateService.rowSelectChangeStream.emit(this.dataStateService.selectedRows);
        break;
      }
      case DataTableSelectMode.SINGLE_TOGGLE: {
        if (row.selected) {
          this.dataStateService.selectedRow = id;

          // deselect all other row other rows
          this.dataStateService.dataRows.forEach((dataRow: DataTableRow<any>) => {
            if (dataRow !== row) {
              dataRow.selected = false;
            }
          });
        } else {
          this.dataStateService.selectedRow = undefined;
        }

        this.eventStateService.rowSelectChangeStream.emit(this.dataStateService.selectedRow);
        break;
      }
      case DataTableSelectMode.SINGLE: {
        const previousSelection = this.dataStateService.selectedRow;
        this.dataStateService.selectedRow = id;
        row.selected = true;

        // deselect all other row other rows
        this.dataStateService.dataRows.forEach((dataRow: DataTableRow<any>) => {
          if (dataRow !== row) {
            dataRow.selected = false;
          }
        });

        if (previousSelection !== id) {
          this.eventStateService.rowSelectChangeStream.emit(this.dataStateService.selectedRow);
        }
        break;
      }
    }
  }

  /**
   * Row clicked event handler.
   * @param {DataTableRow} row Data row object.
   * @param event Mouse click event argument object.
   */
  public rowClicked(row: DataTableRow<any>, event: MouseEvent): void {
    if (this.config.selectOnRowClick || (this.config.expandableRows && this.config.expandOnRowClick)) {
      const element: any = event.target || event.srcElement;
      if (element.classList.contains('ng-ignore-propagation')) {
        return;
      }

      if (this.config.rowSelectable && this.config.selectOnRowClick) {
        row.selected = !row.selected;
        this.onRowSelectChange(row);
      }


      if (this.config.expandOnRowClick) {
        row.expanded = !row.expanded;
      }
    }

    this.eventStateService.rowClickStream.emit({row, event});
  }

  /**
   * Row double clicked event handler.
   * @param {DataTableRow} row Data row object.
   * @param {MouseEvent} event event Mouse click event argument object.
   */
  public rowDoubleClicked(row: DataTableRow<any>, event: MouseEvent): void {
    this.eventStateService.rowDoubleClickStream.emit({row, event});
  }

  public get hasSubstituteRows(): boolean {
    return this.config.showSubstituteRows && this.dataStateService.dataRows.length && !this.dataStateService.showNoDataOverlay;
  }

  public getFieldValue(row: DataTableRow<any>, column: DataTableColumnComponent) {
    return get(row.item, column.field);
  }

  public get showRowSelectCheckbox(): boolean {
    return this.config.rowSelectable && this.config.showRowSelectCheckbox;
  }

  public isRowExpanderLoading(row: DataTableRow<any>): boolean {
    return row.expanded && !row.dataLoaded;
  }
}
