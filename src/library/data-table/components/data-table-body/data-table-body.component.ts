import { Component, Input, TemplateRef } from '@angular/core';

import get from 'lodash.get';

import { DataRow } from '../../models/data-row.model';

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
  selector: '[ngDataTableBody]',
  styleUrls: ['./data-table-body.component.scss'],
  templateUrl: './data-table-body.component.html'
})
export class DataTableBodyComponent {
  @Input()
  public columns: DataTableColumnComponent[];

  @Input()
  public rowExpandTemplate: TemplateRef<any>;

  constructor(public config: DataTableConfigService,
              public dataStateService: DataTableDataStateService,
              private eventStateService: DataTableEventStateService) {
  }

  /**
   * Get current page index.
   * @return {number} Page index.
   */
  public getDisplayIndex(dataRow: DataRow): number {
    if (this.config.pageable) {
      return this.config.offset + dataRow.index + 1;
    } else {
      return dataRow.index + 1;
    }
  }

  /**
   * Is odd row.
   * @param {DataRow} row Data row object.
   * @return {boolean} True if odd row.
   */
  public isOddRow(row: DataRow): boolean {
    return row.index % 2 === 0;
  }

  /**
   * Is even row
   * @param {DataRow} row Data row object.
   * @return {boolean} True if even row.
   */
  public isEvenRow(row: DataRow): boolean {
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
   * @param {DataRow} dataRow Data row object.
   */
  public onRowExpand($event: Event, dataRow: DataRow): void {
    dataRow.expanded = !dataRow.expanded;
    dataRow.dataLoaded = true;
  }

  /**
   * On row initialize event handler.
   * @param dataRow Data table row.
   */
  public onRowInit(dataRow): void {
    this.eventStateService.rowBindStream.emit(dataRow);
  }

  /**
   * On cell initialize event handler.
   * @param {DataTableColumnComponent} column Data table column component.
   * @param {DataRow} row Data table row.
   */
  public onCellInit(column: DataTableColumnComponent, row: DataRow): void {
    this.eventStateService.cellBindStream.emit({
      column: column,
      row: row
    });
  }

  /**
   * Cell clicked event handler.
   * @param {DataTableColumnComponent} column Column data table component object.
   * @param {DataRow} row Data row object.
   * @param {MouseEvent} event event event Mouse click event argument object.
   */
  public cellClicked(column: DataTableColumnComponent, row: DataRow, event: MouseEvent): void {
    this.eventStateService.cellClickStream.emit({row, column, event});
  }

  /**
   * Get row span collection
   * @param {DataRow} row Data row.
   * @return {any[]} Row span dummy array.
   */
  public getRowSpanCollection(row: DataRow): any[] {
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
    count += this.config.rowSelectable ? 1 : 0;
    count += this.config.expandableRows ? 1 : 0;
    this.columns.forEach(column => {
      count += column.visible ? 1 : 0;
    });

    return count;
  }

  /**
   * On row selection change event.
   * Maintain selected row state.
   * @param {DataRow} row Data row object.
   */
  public onRowSelectChange(row: DataRow): void {
    const id = row.item[this.config.selectTrackBy];

    if (this.config.multiRowSelectable) {
      const index = this.dataStateService.selectedRows.indexOf(id);
      if (row.selected && index < 0) {
        this.dataStateService.selectedRows.push(id);
      } else if (!row.selected && index > -1) {
        this.dataStateService.selectedRows.splice(index, 1);
      }

      this.dataStateService.allRowSelected = this.dataStateService.dataRows.every((dataRow: DataRow) => {
        return dataRow.selected;
      });

      this.eventStateService.rowSelectChangeStream.emit(this.dataStateService.selectedRows);
    } else {
      if (row.selected) {
        this.dataStateService.selectedRow = id;
      } else {
        this.dataStateService.selectedRow = undefined;
      }

      this.eventStateService.rowSelectChangeStream.emit(this.dataStateService.selectedRow);
    }

    // deselect all other rows if not multi select.
    if (row.selected && !this.config.multiRowSelectable) {
      this.dataStateService.dataRows.forEach((dataRow: DataRow) => {
        if (dataRow !== row) {
          dataRow.selected = false;
        }
      });
    }
  }

  /**
   * Row clicked event handler.
   * @param {DataRow} row Data row object.
   * @param event Mouse click event argument object.
   */
  public rowClicked(row: DataRow, event: MouseEvent): void {
    if (this.config.selectOnRowClick || (this.config.expandableRows && this.config.expandOnRowClick)) {
      if (event.srcElement.classList.contains('ng-ignore-propagation')) {
        return;
      }

      if (this.config.selectOnRowClick) {
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
   * @param {DataRow} row Data row object.
   * @param {MouseEvent} event event Mouse click event argument object.
   */
  public rowDoubleClicked(row: DataRow, event: MouseEvent): void {
    this.eventStateService.rowDoubleClickStream.emit({row, event});
  }

  public get hasSubstituteRows(): boolean {
    return this.config.showSubstituteRows && this.dataStateService.dataRows.length && !this.dataStateService.showNoDataOverlay;
  }

  public getFieldValue(row: DataRow, column: DataTableColumnComponent) {
    return get(row.item, column.field);
  }
}
