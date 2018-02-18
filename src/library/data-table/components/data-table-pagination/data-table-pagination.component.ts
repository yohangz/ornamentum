import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { DataTableTranslations } from '../../models/data-tabl-translations.model';

/**
 * Data table pagination component.
 * @class DataTablePaginationComponent
 */
@Component({
  selector: 'ng-data-table-pagination',
  styleUrls: ['./data-table-pagination.component.scss'],
  templateUrl: './data-table-pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTablePaginationComponent {

  @Input()
  public translations: DataTableTranslations;

  @Input()
  public itemCount: number;

  @Input()
  public offset: number;

  @Input()
  public limit: number;

  @Input()
  public maxLimit: number;

  @Output()
  public limitChange = new EventEmitter();

  @Output()
  public offsetChange = new EventEmitter();

  /**
   * First page click handler.
   */
  public firstPageClick(): void {
    this.offsetChange.emit(0);
  }

  /**
   * Previous page click handler.
   */
  public previousPageClick(): void {
    this.offsetChange.emit(this.offset - Math.min(this.limit, this.offset));
  }

  /**
   * Next page click handler.
   */
  public nextPageClick(): void {
    this.offsetChange.emit(this.offset + this.limit);
  }

  /**
   * Last page click handler.
   */
  public lastPageClick(): void {
    this.offsetChange.emit((this.maxPage - 1) * this.limit);
  }

  /**
   * Get maximum page count.
   * @return {number} Page count.
   */
  public get maxPage(): number {
    return Math.ceil(this.itemCount / this.limit);
  }

  /**
   * Get page number.
   * @return {number}
   */
  public get page(): number {
    return Math.floor(this.offset / this.limit) + 1;
  }

  /**
   * On page size change.
   * @param {HTMLInputElement} element HTML input element.
   */
  public onPageSizeChange(element: HTMLInputElement): void {
    const limit = parseInt(element.value);
    if (limit > this.maxLimit) {
      element.value = String(this.limit);
      return;
    }

    if (this.limit !== limit) {
      this.offsetChange.emit(0);
      this.limitChange.emit(limit);
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
    if (page > this.maxPage) {
      element.value = String(this.page);
      return;
    }

    if (this.page !== page) {
      const offset = (page - 1) * this.limit;
      this.offsetChange.emit(offset);
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
    return this.offset <= 0;
  }

  /**
   * Get has next page state.
   * @return {boolean} True if there is a next page.
   */
  public get hasNext(): boolean {
    return (this.offset + this.limit) >= this.itemCount;
  }

  /**
   * Get start roq index.
   * @return {number} Row index.
   */
  public get startRowIndex(): number {
    return this.offset + 1;
  }

  /**
   * Get end row index.
   * @return {number} End row index.
   */
  public get endRowIndex(): number {
    return Math.min(this.offset + this.limit, this.itemCount);
  }
}
