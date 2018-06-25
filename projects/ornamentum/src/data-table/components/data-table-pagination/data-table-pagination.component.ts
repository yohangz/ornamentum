import { Component } from '@angular/core';

import { DataFetchMode } from '../../models/data-fetch-mode.enum';

import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';

/**
 * Data table pagination component.
 * @class DataTablePaginationComponent
 */
@Component({
  selector: 'ng-data-table-pagination',
  templateUrl: './data-table-pagination.component.html'
})
export class DataTablePaginationComponent {
  constructor(public config: DataTableConfigService,
              public dataStateService: DataTableDataStateService,
              private eventStateService: DataTableEventStateService) {
  }

  /**
   * First page click handler.
   */
  public firstPageClick(): void {
    this.config.offset = 0;
    this.eventStateService.dataFetchStream.emit(DataFetchMode.SOFT_LOAD);
  }

  /**
   * Previous page click handler.
   */
  public previousPageClick(): void {
    this.config.offset = this.config.offset - Math.min(this.config.limit, this.config.offset);
    this.eventStateService.dataFetchStream.emit(DataFetchMode.SOFT_LOAD);
  }

  /**
   * Next page click handler.
   */
  public nextPageClick(): void {
    this.config.offset = this.config.offset + this.config.limit;
    this.eventStateService.dataFetchStream.emit(DataFetchMode.SOFT_LOAD);
  }

  /**
   * Last page click handler.
   */
  public lastPageClick(): void {
    this.config.offset = (this.maxPage - 1) * this.config.limit;
    this.eventStateService.dataFetchStream.emit(DataFetchMode.SOFT_LOAD);
  }

  /**
   * Get maximum page count.
   * @return {number} Page count.
   */
  public get maxPage(): number {
    return Math.ceil(this.dataStateService.itemCount / this.config.limit);
  }

  /**
   * Get page number.
   * @return {number}
   */
  public get page(): number {
    return Math.floor(this.config.offset / this.config.limit) + 1;
  }

  /**
   * Check limit invalid status. True if limit is invalid.
   * @param {HTMLInputElement} element - Limit input DOM element.
   * @return {boolean} - Invalid status.
   */
  public isInvalidLimit(element: HTMLInputElement): boolean {
    const limit = Number(element.value);
    return element.value === '' || limit > this.config.maxLimit || limit < 1;
  }

  /**
   * On page size change.
   * @param {HTMLInputElement} element HTML input element.
   */
  public onPageSizeChange(element: HTMLInputElement): void {
    if (this.isInvalidLimit(element)) {
      element.value = String(this.config.limit);
      return;
    }

    const limit = Number(element.value);
    if (this.config.limit !== limit) {
      this.config.offset = 0;
      this.config.limit = limit;
      this.eventStateService.dataFetchStream.emit(DataFetchMode.SOFT_LOAD);
    }
  }

  /**
   * On page size revert.
   * @param {HTMLInputElement} element HTML input element.
   */
  public onPageSizeRevert(element: HTMLInputElement): void {
    element.value = String(this.config.limit);
  }

  /**
   * Is invalid page index. True if page index is invalid.
   * @param {HTMLInputElement} element - Page index DOM element.
   * @return {boolean} - Invalid status.
   */
  public isInvalidPageIndex(element: HTMLInputElement): boolean {
    const page = Number(element.value);
    return element.value === '' || page > this.maxPage || page < 1;
  }

  /**
   * On page size change.
   * @param {HTMLInputElement} element HTML input element.
   */
  public onPageIndexChange(element: HTMLInputElement): void {
    if (this.isInvalidPageIndex(element)) {
      element.value = String(this.page);
      return;
    }

    const page = Number(element.value);
    if (this.page !== page) {
      this.config.offset = (page - 1) * this.config.limit;
      this.eventStateService.dataFetchStream.emit(DataFetchMode.SOFT_LOAD);
    }
  }

  /**
   * On page size revert.
   * @param {HTMLInputElement} element HTML input element.
   */
  public onPageIndexRevert(element: HTMLInputElement): void {
    element.value = String(this.page);
  }

  /**
   * Get has previous page state.
   * @return {boolean} True if there is a previous page.
   */
  public get hasPrevious(): boolean {
    return this.config.offset <= 0;
  }

  /**
   * Get has next page state.
   * @return {boolean} True if there is a next page.
   */
  public get hasNext(): boolean {
    return (this.config.offset + this.config.limit) >= this.dataStateService.itemCount;
  }

  /**
   * Get start roq index.
   * @return {number} Row index.
   */
  public get startRowIndex(): number {
    return this.config.offset + 1;
  }

  /**
   * Get end row index.
   * @return {number} End row index.
   */
  public get endRowIndex(): number {
    return Math.min(this.config.offset + this.config.limit, this.dataStateService.itemCount);
  }

  /**
   * Prevent invalid key press.
   * @param {KeyboardEvent} event Keyboard event object.
   */
  public preventInvalidKeyPress(event: KeyboardEvent): void {
    if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode !== 14 && event.keyCode !== 27)) {
      event.preventDefault();
    }
  }
}
