import { Component } from '@angular/core';

import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';

/**
 * Data table pagination component.
 * @class DataTablePaginationComponent
 */
@Component({
  selector: 'ng-data-table-pagination',
  styleUrls: ['./data-table-pagination.component.scss'],
  templateUrl: './data-table-pagination.component.html'
})
export class DataTablePaginationComponent {
  constructor(public config: DataTableConfigService,
              public dataStateService: DataTableDataStateService) {
  }

  /**
   * First page click handler.
   */
  public firstPageClick(): void {
    this.config.offset = 0;
  }

  /**
   * Previous page click handler.
   */
  public previousPageClick(): void {
    this.config.offset = this.config.offset - Math.min(this.config.limit, this.config.offset);
  }

  /**
   * Next page click handler.
   */
  public nextPageClick(): void {
    this.config.offset = this.config.offset + this.config.limit;
  }

  /**
   * Last page click handler.
   */
  public lastPageClick(): void {
    this.config.offset = (this.maxPage - 1) * this.config.limit;
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
   * On page size change.
   * @param {HTMLInputElement} element HTML input element.
   */
  public onPageSizeChange(element: HTMLInputElement): void {
    const limit = parseInt(element.value);
    if (limit > this.config.maxLimit) {
      element.value = String(this.config.limit);
      return;
    }

    if (this.config.limit !== limit) {
      this.config.offset = 0;
      this.config.limit = limit;
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
   * On page size change.
   * @param {HTMLInputElement} element HTML input element.
   */
  public onPageIndexChange(element: HTMLInputElement): void {
    const page = parseInt(element.value);
    if (page > this.maxPage) {
      element.value = String(this.page);
      return;
    }

    if (this.page !== page) {
      this.config.offset = (page - 1) * this.config.limit;
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
}
