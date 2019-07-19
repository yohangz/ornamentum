import {
  Component,
  ContentChild,
  EventEmitter,
  forwardRef,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  TemplateRef,
} from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Subscription, Observable } from 'rxjs';
import { catchError, debounceTime, switchMap } from 'rxjs/operators';

import get from 'lodash/get';

import { DropdownTranslations } from '../../models/dropdown-translations.model';
import { DropdownItem } from '../../models/dropdown-item.model';
import { DropdownItemGroup } from '../../models/dropdown-Item-group.model';
import { DropdownRequestParams } from '../../models/dropdown-request-params.model';
import { DropdownDataBindCallback } from '../../models/dropdown-data-bind-callback.model';
import { DropdownQueryResult } from '../../models/dropdown-query-result.model';

import { DropdownSelectMode } from '../../models/dropdown-select-mode.model';

import { DropdownViewComponent } from '../dropdown-view/dropdown-view.component';

import { PopoverComponentLoaderFactoryService } from '../../../utility/utility.module';
import { DropdownConfigService } from '../../services/dropdown-config.service';
import { DropdownDataStateService } from '../../services/dropdown-data-state.service';
import { DropdownEventStateService } from '../../services/dropdown-event-state.service';
import { DropdownResourceService } from '../../services/dropdown-resource.service';
import { ViewPosition } from '../../../utility/models/view-position.model';
import { of } from 'rxjs/internal/observable/of';

/**
 * Dropdown main component.
 */
@Component({
  selector: 'ng-dropdown',
  templateUrl: './dropdown.component.html',
  providers: [
    DropdownConfigService,
    DropdownDataStateService,
    DropdownEventStateService,
    DropdownResourceService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent implements OnInit, OnDestroy, ControlValueAccessor {
  private onSelectChangeSubscription: Subscription;

  @ContentChild('ngDropdownLoadingSpinner', { static: true })
  public loadingSpinnerTemplate: TemplateRef<any>;

  @ContentChild('ngDropdownOption', { static: true })
  public set dropdownOptionTemplate(value: TemplateRef<any>) {
    this.dataStateService.dropdownOptionTemplate = value;
  }

  @ContentChild('ngDropdownOptionGroupHeader', { static: true })
  public set dropdownOptionGroupHeaderTemplate(value: TemplateRef<any>) {
    this.dataStateService.dropdownOptionGroupHeaderTemplate = value;
  }

  // Outputs : Event Handlers
  /**
   * Dropdown initialize event handler.
   */
  @Output()
  public init: EventEmitter<DropdownComponent>;

  /**
   * Dropdown option select change event handler.
   */
  @Output()
  public selectChange: EventEmitter<any[] | any>;

  /**
   * Dropdown data bind event handler.
   */
  @Output()
  public dataBound: EventEmitter<void>;

  // Input - Event handlers

  /**
   * Set data bind callback; This handler is fired on each data fetch request
   * @param value Dropdown data bind callback function reference
   */
  @Input()
  public set onDataBind(value: DropdownDataBindCallback<any>) {
    this.dataStateService.onDataBind = value;
  }

  // Inputs

  /**
   * Set static data item collection; No need to set data source when static items collection is provided
   * @param value Any array of objects containing dropdown data
   */
  @Input()
  public set items(value: any[]) {
    if (!value) {
      return;
    }

    this.eventStateService.staticDataSourceStream.next(value);
  }

  /**
   * Set data source observable; This stream is used to retrieve dropdown binding data
   * @param source Any object collecting of observable
   */
  @Input()
  public set dataSource(source: Observable<any[]>) {
    this.initDataSource(source);
  }

  /**
   * Set translation data object; Used to localize table display text labels
   * @param value Translation data object
   */
  @Input()
  public set translations(value: DropdownTranslations) {
    this.config.translations = value;
  }

  /**
   * Selected option track by field; Key to tack selected options uniquely
   * @param value Select track by field key
   */
  @Input()
  public set selectTrackBy(value: string) {
    this.config.selectTrackBy = value;
  }

  /**
   * Display value track by field; Key to track display value of a given dropdown option
   * @param value Display track by field key
   */
  @Input()
  public set displayTrackBy(value: string) {
    this.config.displayTrackBy = value;
  }

  /**
   * Group data by field; This key will be used to group the options list
   * @param value Group by field key
   */
  @Input()
  public set groupByField(value: string) {
    this.config.groupByField = value;
  }

  /**
   * Represents the name of the attribute used to disable the select options
   * @param value Disabled state track by field key
   */
  @Input()
  public set disabledTrackBy(value: string) {
    this.config.disabledTrackBy = value;
  }

  /**
   * Selected options collection; These options will be set selected by default on initial load;
   * Applicable only when multi select mode is enabled
   * @param value The selected dropdown item value collection
   */
  @Input()
  public set selectedOptions(value: any[]) {
    this.dataStateService.selectedOptions = value || [];
  }

  /**
   * Selected option; These option will be set selected by default on initial load; Applicable for single select mode only
   * @param value The selected dropdown option item value
   */
  @Input()
  public set selectedOption(value: any) {
    this.dataStateService.selectedOption = value;
  }

  /**
   * Number of options to fetch on a single load when loadOnScroll is true
   * @param value Data fetch limit
   */
  @Input()
  public set limit(value: number) {
    this.config.limit = value;
  }

  /**
   * Wrap selected options and show the number of options selected instead when this limit is met or exceeded.
   * Applicable only when multi select mode is enabled.
   * @param value Wrap display selected options limit
   */
  @Input()
  public set wrapDisplaySelectLimit(value: number) {
    this.config.wrapDisplaySelectLimit = value;
  }

  /**
   * Load additional dropdown options on scroll if true
   * @param value Load on scroll state.
   */
  @Input()
  public set loadOnScroll(value: boolean) {
    this.config.loadOnScroll = value;
  }

  /**
   * Additional dropdown options fetch call is initiated when user scroll to this point.
   * Distance is calculated from bottom of the options list. Applicable only when load on scroll mode is enabled.
   * @param value Load view distance value in pixels.
   */
  @Input()
  public set loadViewDistance(value: number) {
    this.config.loadViewDistance = value;
  }

  /**
   * Dropdown option select mode.
   * - 'multi' : Support selecting multiple options.
   * - 'single' : Support selecting a single item from options collection.
   * - 'single-toggle' : Support selecting a single item from options collection.
   * Selection can not be removed but only toggled by tapping on another option.
   */
  @Input()
  public set selectMode(value: DropdownSelectMode) {
    this.config.selectMode = value;
  }

  /**
   * Display dropdown options filter search input if true. This will filter dropdown options by display text field.
   * @param value Dropdown options filterable state.
   */
  @Input()
  public set filterable(value: boolean) {
    this.config.filterable = value;
  }

  /**
   * Default options filter applied on initial load. All options are displayed when filter text value is empty.
   * @param value Filter text value.
   */
  @Input()
  public set filterText(value: string) {
    this.dataStateService.filterText = value;
  }

  /**
   * Filter de-bounce enabled state.v
   */
  @Input()
  public set filterDebounce(value: boolean) {
    this.config.filterDebounce = value;
  }

  /**
   * Filter de-bounce time milliseconds.
   */
  @Input()
  public set filterDebounceTime(value: number) {
    this.config.filterDebounceTime = value;
  }

  /**
   *
   */
  @Input()
  public set loadDataOnInit(value: boolean) {
    this.config.loadDataOnInit = value;
  }

  /**
   * Enable/Disable show selected items remove icon.
   */
  @Input()
  public set showSelectedOptionRemoveButton(value: boolean) {
    this.config.showSelectedOptionRemoveButton = value;
  }

  /**
   * Show all select options clear button if true.
   */
  @Input()
  public set showClearSelectionButton(value: boolean) {
    this.config.showClearSelectionButton = value;
  }

  /**
   * Dropdown menu width.
   */
  @Input()
  public set menuWidth(value: number) {
    this.config.menuWidth = value;
  }

  /**
   * Dropdown menu height.
   */
  @Input()
  public set menuHeight(value: number) {
    this.config.menuHeight = value;
  }

  /**
   * Menu open position.
   */
  @Input()
  public set menuPosition(value: ViewPosition) {
    this.config.menuPosition = value;
  }

  /**
   * Control disabled state
   * @param value Disabled if true.
   */
  @Input()
  public set disabled(value: boolean) {
    this.dataStateService.disabled = value;
  }

  @Input()
  public set closeMenuOnSelect(value: boolean) {
    this.config.closeMenuOnSelect = value;
  }

  @Input()
  public set showOptionSelectCheckbox(value: boolean) {
    this.config.showOptionSelectCheckbox = value;
  }

  @Input()
  public set multiSelectOptionMaxWidth(value: number) {
    this.config.multiSelectOptionMaxWidth = value;
  }

  @Input()
  public set setFirstOptionSelected(value: boolean) {
    this.config.setFirstOptionSelected = value;
  }

  @Input()
  public set triggerSelectChangeOnInit(value: boolean) {
    this.config.triggerSelectChangeOnInit = value;
  }

  @Input()
  public set triggerSelectChangeOnModelUpdate(value: boolean) {
    this.config.triggerSelectChangeOnModelUpdate = value;
  }

  @Input()
  public set triggerSelectChangeOnFirstOptionSelect(value: boolean) {
    this.config.triggerSelectChangeOnFirstOptionSelect = value;
  }

  @Input()
  public set dynamicDimensionCalculation(value: boolean) {
    this.config.dynamicDimensionCalculation = value;
  }

  @Input()
  public set dynamicWidthRatio(value: number) {
    this.config.dynamicWidthRatio = value;
  }

  @Input()
  public set dynamicHeightRatio(value: number) {
    this.config.dynamicHeightRatio = value;
  }

  constructor(
    private componentLoaderFactory: PopoverComponentLoaderFactoryService,
    private injector: Injector,
    private eventStateService: DropdownEventStateService,
    private dropdownResourceService: DropdownResourceService<any>,
    private renderer: Renderer2,
    public dataStateService: DropdownDataStateService,
    public config: DropdownConfigService
  ) {
    this.dataStateService.componentLoaderRef = this.componentLoaderFactory.createLoader(this.renderer);

    this.dataBound = this.eventStateService.dataBoundStream;
    this.selectChange = this.eventStateService.selectChangeStream;
    this.init = this.eventStateService.initStream;
  }

  private initDataSource(source: Observable<any>): void {
    this.dropdownResourceService.setDataSource(source);

    this.dataStateService.onDataBind = (params: DropdownRequestParams): Observable<DropdownQueryResult<any>> => {
      if (params.hardReload) {
        this.dropdownResourceService.setDataSource(source);
      }

      return this.dropdownResourceService.query(params);
    };
  }

  /**
   * Performs dropdown toggle event.
   * @param element Dropdown button element.
   */
  public toggleDropdown(event: MouseEvent, element: HTMLElement): void {
    const target = event.target as HTMLElement;
    if (target && target.classList && target.classList.contains('ng-ignore-propagation')) {
      return;
    }

    this.dataStateService.componentLoaderRef.toggle(DropdownViewComponent, element, this.injector, {
      // relativeParent: element,
      position: this.config.menuPosition
    });

    if (this.config.dynamicDimensionCalculation) {
      this.config.menuWidth = element.offsetWidth * this.config.dynamicWidthRatio;
      this.config.menuHeight = element.offsetWidth * this.config.dynamicHeightRatio;
    }
  }

  public get wrapSelectedOptions(): boolean {
    if (this.config.wrapDisplaySelectLimit !== undefined) {
      return this.dataStateService.selectedOptions.length > this.config.wrapDisplaySelectLimit;
    }

    return false;
  }

  public get wrappedSelectedOptions(): string {
    return `(${this.dataStateService.selectedOptions.length}) ${this.config.translations.selectedItemWrapPlaceholder}`;
  }

  /**
   * ngOnDestroy handler.
   * Lifecycle hook that is called when component is destroyed.
   */
  public ngOnDestroy(): void {
    if (this.onSelectChangeSubscription) {
      this.onSelectChangeSubscription.unsubscribe();
    }

    this.dataStateService.componentLoaderRef.dispose();
  }

  public get hasSelectedItems(): boolean {
    if (this.config.selectMode === 'multi') {
      return !!this.dataStateService.selectedOptions.length;
    }

    return !!this.dataStateService.selectedOption;
  }

  public triggerSelectChange(): void {
    if (this.config.selectMode === 'multi') {
      this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOptions);
    } else {
      this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOption);
    }
  }

  /**
   * Clear selected items.
   */
  public clearSelectedOptions(): void {
    if (this.config.selectMode === 'multi') {
      this.dataStateService.selectedOptions = [];
      this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOptions);
    } else {
      this.dataStateService.selectedOption = undefined;
      this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOption);
    }
  }

  /**
   * Set disabled state.
   * ControlValueAccessor implementation.
   * @param isDisabled True if disabled.
   */
  public setDisabledState?(isDisabled: boolean): void {
    this.dataStateService.disabled = isDisabled;
  }

  /**
   * Called when value selected value gets updated.
   * ControlValueAccessor implementation.
   * @param value Selected value.
   */
  public writeValue(value: any): void {
    if (this.config.selectMode === 'multi') {
      this.dataStateService.selectedOptions = value || [];
    } else {
      this.dataStateService.selectedOption = value;
    }

    if (this.config.triggerSelectChangeOnModelUpdate) {
      this.triggerSelectChange();
    }
  }

  /**
   * Register on change event.
   * ControlValueAccessor implementation.
   * @param onSelectChange On select change callback function.
   */
  public registerOnChange(onSelectChange: (value: any[] | any) => void): void {
    this.onSelectChangeSubscription = this.selectChange.subscribe(value => {
      onSelectChange(value);
    });
  }

  /**
   * Register on touched event.
   * ControlValueAccessor implementation.
   * @param fn Function reference.
   */
  public registerOnTouched(fn: any): void {
    // TODO: Implement touch event handler
  }

  public ngOnInit(): void {
    if (!this.dataStateService.onDataBind) {
      this.dataSource = this.eventStateService.staticDataSourceStream;
    }

    this.initDataFetchEvent();

    if (this.config.loadDataOnInit) {
      this.eventStateService.dataFetchStream.emit(false);
    }

    if (this.config.triggerSelectChangeOnInit) {
      this.triggerSelectChange();
    }

    this.eventStateService.initStream.emit(this);
  }

  private extractDropdownItem(item: any): DropdownItem {
    const id = get(item, this.config.selectTrackBy);

    return {
      disabled: get(item, this.config.disabledTrackBy),
      id,
      item,
      text: get(item, this.config.displayTrackBy)
    };
  }

  private setDropdownOptions(queryResult: DropdownQueryResult<any>) {
    if (this.config.groupByField) {
      this.dataStateService.dropdownItemGroups = queryResult.items.reduce(
        (accumulator: DropdownItemGroup[], item: any) => {
          const groupFieldValue = get(item, this.config.groupByField);
          const currentGroup = accumulator.find((group: DropdownItemGroup) => group.groupName === groupFieldValue);

          if (currentGroup) {
            currentGroup.items.push(this.extractDropdownItem(item));
          } else {
            accumulator.push({
              groupName: groupFieldValue,
              items: [this.extractDropdownItem(item)]
            });
          }

          return accumulator;
        },
        this.config.loadOnScroll && this.dataStateService.offset > 0 ? this.dataStateService.dropdownItemGroups : []
      );
    } else {
      this.dataStateService.dropdownItems = queryResult.items.reduce(
        (accumulator: DropdownItem[], item: any) => {
          accumulator.push(this.extractDropdownItem(item));
          return accumulator;
        },
        this.config.loadOnScroll && this.dataStateService.offset > 0 ? this.dataStateService.dropdownItems : []
      );
    }

    if (this.config.setFirstOptionSelected && queryResult.items.length) {
      if (this.config.selectMode === 'multi') {
        this.dataStateService.selectedOptions = [queryResult.items[0]];
      } else {
        this.dataStateService.selectedOption = queryResult.items[0];
      }

      if (this.config.triggerSelectChangeOnFirstOptionSelect) {
        this.triggerSelectChange();
      }
    }

    this.dataStateService.totalOptionCount = queryResult.count;
    this.dataStateService.currentItemCount += queryResult.items.length;
  }

  private onAfterDataBind(queryResult: DropdownQueryResult<any>): void {
    this.setDropdownOptions(queryResult);
    this.dataStateService.dataLoading = false;
    this.eventStateService.dataBoundStream.emit();
  }

  private mapToDataBindRequest(hardReload: boolean): Observable<DropdownQueryResult<any>> {
    this.dataStateService.dataLoading = true;

    if (hardReload) {
      this.dataStateService.offset = 0;
      this.dataStateService.filterText = '';
    }

    const requestParams: DropdownRequestParams = {
      hardReload
    };

    if (this.config.loadOnScroll) {
      requestParams.limit = this.config.limit;
      requestParams.offset = this.dataStateService.offset;
    }

    if (this.config.filterable) {
      requestParams.filter = {
        key: this.config.displayTrackBy,
        value: this.dataStateService.filterText
      };
    }

    return this.dataStateService.onDataBind(requestParams);
  }

  // Do not emit dataFetchStream true unless it is required to hard reload the dropdown options.
  private initDataFetchEvent(): void {
    const noop = {
      items: [],
      count: 0
    };

    this.eventStateService.dataFetchStream
      .pipe(
        debounceTime(20),
        switchMap((hardReload: boolean) => this.mapToDataBindRequest(hardReload)),
        catchError(() => {
          return of(noop);
        })
      )
      .subscribe(
        (queryResult: DropdownQueryResult<any>) => {
          this.onAfterDataBind(queryResult);
        },
        () => {
          this.onAfterDataBind(noop);
        }
      );
  }

  // Can be used to explicitly trigger data bind event.
  public fetchData(hardReload: boolean = false): void {
    this.eventStateService.dataFetchStream.emit(hardReload);
  }

  public onSelectOptionRemove(index: number): void {
    this.dataStateService.selectedOptions.splice(index, 1);
    this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOptions);
  }
}
