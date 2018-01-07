import { Component, forwardRef, Inject } from '@angular/core';

import { DataTableComponent } from '../data-table/data-table.component';

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

  constructor(@Inject(forwardRef(() => DataTableComponent)) public dataTable: DataTableComponent) {
  }

  /**
   * First page click handler.
   */
  public firstPageClick(): void {
    this.dataTable.offset = 0;
  }

  /**
   * Previous page click handler.
   */
  public previousPageClick(): void {
    this.dataTable.offset -= Math.min(this.dataTable.limit, this.dataTable.offset);
  }

  /**
   * Next page click handler.
   */
  public nextPageClick(): void {
    this.dataTable.offset += this.dataTable.limit;
  }

  /**
   * Last page click handler.
   */
  public lastPageClick(): void {
    this.dataTable.offset = (this.maxPage - 1) * this.dataTable.limit;
  }

  /**
   * Get maximum page count.
   * @return {number} Page count.
   */
  public get maxPage(): number {
    return Math.ceil(this.dataTable.itemCount / this.dataTable.limit);
  }

  /**
   * Get current page limit.
   * @return {number} Page limit.
   */
  public get limit(): number {
    return this.dataTable.limit;
  }

  /**
   * Set current page limit.
   * @param {number} value Page limit.
   */
  public set limit(value: number) {
    this.dataTable.limit = value;
  }

  /**
   * Get current page number.
   * @return {number} Page number.
   */
  public get page() {
    return this.dataTable.page;
  }

  /**
   * Set current page number.
   * @param {number} value page number.
   */
  public set page(value: number) {
    this.dataTable.page = value;
  }

  /**
   * On page size change.
   * @param {HTMLInputElement} element HTML input element.
   */
  public onPageSizeChange(element: HTMLInputElement): void {
    const limit = parseInt(element.value);
    if (this.limit !== limit) {
      this.limit = limit;
    }
  }

  /**
   * On page size revert.
   * @param {HTMLInputElement} element HTML input element.
   */
  public onPageSizeRevert(element: HTMLInputElement): void {
    element.value = String(this.limit);
  }

  /**
   * On page size change.
   * @param {HTMLInputElement} element HTML input element.
   */
  public onPageIndexChange(element: HTMLInputElement): void {
    const page = parseInt(element.value);
    if (this.page !== page) {
      this.page = page;
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
    return this.dataTable.offset <= 0;
  }

  /**
   * Get has next page state.
   * @return {boolean} True if there is a next page.
   */
  public get hasNext(): boolean {
    return (this.dataTable.offset + this.dataTable.limit) >= this.dataTable.itemCount;
  }

  /**
   * Get start roq index.
   * @return {number} Row index.
   */
  public get startRowIndex(): number {
    return this.dataTable.offset + 1;
  }

  /**
   * Get end row index.
   * @return {number} End row index.
   */
  public get endRowIndex(): number {
    return Math.min(this.dataTable.offset + this.dataTable.limit, this.dataTable.itemCount);
  }
}
