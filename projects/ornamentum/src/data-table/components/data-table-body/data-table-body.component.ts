import { Component, Input, TemplateRef } from '@angular/core';

import get from 'lodash/get';

import { DataTableRow } from '../../models/data-table-row.model';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';

/**
 * Data table body component; Data table body table definition rendering is handled by this component
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
   * Get row index identifier by data row
   * @param dataRow Data row object
   * @return Dat row index identifier
   */
  public getDisplayIndex(dataRow: DataTableRow<any>): number {
    if (this.config.pageable) {
      return this.config.offset + dataRow.index + 1;
    } else {
      return dataRow.index + 1;
    }
  }

  /**
   * Odd row status; True if row index is a odd number
   * @param row Data row object
   * @return True if odd row
   */
  public isOddRow(row: DataTableRow<any>): boolean {
    return row.index % 2 === 0;
  }

  /**
   * Even row status; True if row index is a even number
   * @param row Data row object
   * @return True if even row
   */
  public isEvenRow(row: DataTableRow<any>): boolean {
    return row.index % 2 === 1;
  }

  /**
   * Odd substitute row status by row index; True if row index is an odd substitute row
   * @param index Row index
   * @return True if odd substitute row
   */
  public isOddSubstituteRow(index: number): boolean {
    return (index + this.dataStateService.substituteRows.length) % 2 === 0;
  }

  /**
   * Even substitute row status by row index; True if row index is an even substitute row
   * @param index Row index
   * @return True if even substitute row
   */
  public isEvenSubstituteRow(index: number): boolean {
    return (index + this.dataStateService.substituteRows.length) % 2 === 1;
  }

  /**
   * On row expand event handler
   * @param $event Click event argument reference
   * @param dataRow Data row object
   */
  public onRowExpand($event: Event, dataRow: DataTableRow<any>): void {
    dataRow.expanded = !dataRow.expanded;

    if (!this.config.showRowExpandLoadingSpinner) {
      dataRow.dataLoaded = true;
    }
  }

  /**
   * On row initialize event handler
   * @param dataRow Data table row
   */
  public onRowInit(dataRow): void {
    setTimeout(() => {
      this.eventStateService.rowBindStream.emit(dataRow);
    });
  }

  /**
   * On cell initialize event handler
   * @param column Data table column component reference
   * @param row Data table row object
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
   * Cell clicked event handler
   * @param column Column data table component reference
   * @param row Data table row reference
   * @param event Mouse click event argument reference
   */
  public cellClicked(column: DataTableColumnComponent, row: DataTableRow<any>, event: MouseEvent): void {
    this.eventStateService.cellClickStream.emit({row, column, event});
  }

  /**
   * Get row span collection by data row
   * @param row Data row reference
   * @return Dummy row span collection
   */
  public getRowSpanCollection(row: DataTableRow<any>): any[] {
    return Array.from({length: this.dataStateService.onDynamicRowSpanExtract(row)});
  }

  /**
   * Get total column count used for substitute row generation
   * @return Number of columns
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
   * On row select click event handler
   * @param row Data row reference
   * @param event Row click event
   */
  public onRowSelectClick(row: DataTableRow<any>, event: Event): void {
    // Prevent single mode checkbox getting unchecked on tapping already selected.
    if (this.config.selectMode === 'single') {
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
   * On row selection change event handler
   * @param row Data row reference
   */
  public onRowSelectChange(row: DataTableRow<any>): void {
    const id = get(row.item, this.config.selectTrackBy);

    switch (this.config.selectMode) {
      case 'multi': {
        const index = this.dataStateService.selectedRows.indexOf(id);
        if (row.selected && index < 0) {
          this.dataStateService.selectedRows.push(id);
        } else if (!row.selected && index > -1) {
          this.dataStateService.selectedRows.splice(index, 1);
        }

        const previousAllRowSelectedState = this.dataStateService.allRowSelected;
        this.dataStateService.allRowSelected = this.dataStateService.dataRows.every((dataRow: DataTableRow<any>) => {
          return dataRow.selected;
        });

        this.eventStateService.rowSelectChangeStream.emit(this.dataStateService.selectedRows);

        if (previousAllRowSelectedState !== this.dataStateService.allRowSelected) {
          this.eventStateService.allRowSelectChangeStream.emit(this.dataStateService.allRowSelected);
        }
        break;
      }
      case'single_toggle': {
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
      case 'single': {
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
   * Row clicked event handler
   * @param row Data row object
   * @param event Mouse click event argument object
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
   * Row double clicked event handler
   * @param row Data row object
   * @param event Event Mouse click event argument object
   */
  public rowDoubleClicked(row: DataTableRow<any>, event: MouseEvent): void {
    this.eventStateService.rowDoubleClickStream.emit({row, event});
  }

  /**
   * Get substitute row availability status
   * @return True if substitute rows are available
   */
  public get hasSubstituteRows(): boolean {
    return this.config.showSubstituteRows && this.dataStateService.dataRows.length && !this.dataStateService.showNoDataOverlay;
  }

  /**
   * Get cell value by data field
   * @param row Data row reference
   * @param column Data table column component reference
   */
  public getFieldValue(row: DataTableRow<any>, column: DataTableColumnComponent) {
    return get(row.item, column.field);
  }

  /**
   * Get row select checkbox display status
   * @return True if row selector checkbox should be displayed
   */
  public get showRowSelectCheckbox(): boolean {
    return this.config.rowSelectable && this.config.showRowSelectCheckbox;
  }

  /**
   * Get row expend view loading status; Used to display loading spinner on expand column while data fetching
   * @param row Data row object reference
   */
  public isRowExpanderLoading(row: DataTableRow<any>): boolean {
    return row.expanded && !row.dataLoaded;
  }
}
