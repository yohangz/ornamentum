import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { debounceTime } from 'rxjs/operators';

import { DataFetchMode } from '../../models/data-fetch-mode.enum';

import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { ResizeService } from '../../../utility/services/resize.service';

/**
 * Data table pagination component; Render data table paginator widget
 */
@Component({
  selector: 'ng-data-table-pagination',
  templateUrl: './data-table-pagination.component.html'
})
export class DataTablePaginationComponent implements OnInit {
  @ViewChild('paginationContainer', { static: true })
  private paginationContainer: ElementRef<HTMLElement>;

  public isMobile = false;

  constructor(
    public config: DataTableConfigService,
    public dataStateService: DataTableDataStateService,
    private eventStateService: DataTableEventStateService,
    private resizeService: ResizeService
  ) {}

  /**
   * First page click event handler
   */
  public firstPageClick(): void {
    this.config.offset = 0;
    this.eventStateService.dataFetchStream.emit(DataFetchMode.SOFT_LOAD);
  }

  /**
   * Previous page click event handler
   */
  public previousPageClick(): void {
    this.config.offset = this.config.offset - Math.min(this.config.limit, this.config.offset);
    this.eventStateService.dataFetchStream.emit(DataFetchMode.SOFT_LOAD);
  }

  /**
   * Next page click event handler
   */
  public nextPageClick(): void {
    this.config.offset = this.config.offset + this.config.limit;
    this.eventStateService.dataFetchStream.emit(DataFetchMode.SOFT_LOAD);
  }

  /**
   * Last page click event handler
   */
  public lastPageClick(): void {
    this.config.offset = (this.maxPage - 1) * this.config.limit;
    this.eventStateService.dataFetchStream.emit(DataFetchMode.SOFT_LOAD);
  }

  /**
   * Get maximum page count
   * @return Max page count
   */
  public get maxPage(): number {
    return Math.ceil(this.dataStateService.itemCount / this.config.limit);
  }

  /**
   * Get page number
   * @return Current page number
   */
  public get page(): number {
    return Math.floor(this.config.offset / this.config.limit) + 1;
  }

  /**
   * Check limit invalid status. True if limit is invalid
   * @param element Limit input DOM element
   * @return Invalid status
   */
  public isInvalidLimit(element: HTMLInputElement): boolean {
    const limit = Number(element.value);
    return element.value === '' || limit > this.config.maxLimit || limit < 1;
  }

  /**
   * On page size change event handler
   * @param element HTML input element
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
   * On page size revert event handler
   * @param element HTML input element
   */
  public onPageSizeRevert(element: HTMLInputElement): void {
    element.value = String(this.config.limit);
  }

  /**
   * Is invalid page index; True if page index is invalid
   * @param element Page index DOM element
   * @return Invalid status
   */
  public isInvalidPageIndex(element: HTMLInputElement): boolean {
    const page = Number(element.value);
    return element.value === '' || page > this.maxPage || page < 1;
  }

  /**
   * On page size change event handler
   * @param element HTML input element
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
   * On page size revert event handler.
   * @param element HTML input element.
   */
  public onPageIndexRevert(element: HTMLInputElement): void {
    element.value = String(this.page);
  }

  /**
   * Get previous page availability status
   * @return True if there is a previous page.
   */
  public get hasPrevious(): boolean {
    return this.config.offset <= 0;
  }

  /**
   * Get next page availability status
   * @return True if there is a next page
   */
  public get hasNext(): boolean {
    return this.config.offset + this.config.limit >= this.dataStateService.itemCount;
  }

  /**
   * Get start row index
   * @return Start row index
   */
  public get startRowIndex(): number {
    return this.config.offset + 1;
  }

  /**
   * Get end row index
   * @return End row index
   */
  public get endRowIndex(): number {
    return Math.min(this.config.offset + this.config.limit, this.dataStateService.itemCount);
  }

  /**
   * Prevent invalid key press
   * @param event Keyboard event argument object
   */
  public preventInvalidKeyPress(event: KeyboardEvent): void {
    if (
      (event.key >= '0' && event.key <= '9') ||
      event.key === 'ArrowLeft' ||
      event.key === 'ArrowRight' ||
      event.key === 'Delete' ||
      event.key === 'Backspace' ||
      event.key === 'Escape' ||
      event.key === 'Enter'
    ) {
      return;
    } else {
      event.preventDefault();
    }
  }

  /**
   * component init lifecycle event handler
   */
  public ngOnInit(): void {
    this.resizeService.resize.pipe(debounceTime(200)).subscribe(() => {
      this.isMobile = this.paginationContainer.nativeElement.clientWidth < 767;
    });
  }
}
