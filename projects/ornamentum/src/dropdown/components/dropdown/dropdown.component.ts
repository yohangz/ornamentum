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

import { Subscription, Observable, of } from 'rxjs';
import { catchError, debounceTime, switchMap } from 'rxjs/operators';

import { get } from '../../../utility/services/object-utility.class';

import { DropdownTranslations } from '../../models/dropdown-translations.model';
import { DropdownOption } from '../../models/dropdown-option.model';
import { DropdownOptionGroup } from '../../models/dropdown-option-group.model';
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
import { ValidatorService } from '../../../utility/services/validator.service';

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
  public set optionTemplate(value: TemplateRef<any>) {
    this.dataStateService.dropdownOptionTemplate = value;
  }

  @ContentChild('ngDropdownOptionGroupHeader', { static: true })
  public set optionGroupHeaderTemplate(value: TemplateRef<any>) {
    this.dataStateService.dropdownOptionGroupHeaderTemplate = value;
  }

  // Outputs : Event Handlers
  /**
   * Dropdown initialize event handler
   */
  @Output()
  public init: EventEmitter<DropdownComponent>;

  /**
   * Dropdown option select change event handler
   */
  @Output()
  public selectChange: EventEmitter<any[] | any>;

  /**
   * Dropdown data bind event handler
   */
  @Output()
  public dataBound: EventEmitter<void>;

  // Input - Event handlers

  /**
   * Set data bind callback. This handler is fired on each data fetch request.
   */
  @Input()
  public set onDataBind(value: DropdownDataBindCallback<any>) {
    this.dataStateService.onDataBind = value;
  }

  // Inputs

  /**
   * Set dropdown loading spinner template reference object. Used by data table component to explicitly pass the template reference.
   */
  @Input()
  public set loadingSpinnerTemplateRef(value: TemplateRef<any>) {
    this.loadingSpinnerTemplate = value;
  }

  /**
   * Set dropdown option template reference. Used by data table component to explicitly pass the template reference.
   */
  @Input()
  public set optionTemplateRef(value: TemplateRef<any>) {
    this.optionTemplate = value;
  }

  /**
   * Set dropdown options group header template reference. Used by data table component to explicitly pass the template reference.
   */
  @Input()
  public set optionGroupHeaderTemplateRef(value: TemplateRef<any>) {
    this.optionGroupHeaderTemplate = value;
  }

  /**
   * Set static dropdown options collection. No need to set data source when static options collection is provided.
   */
  @Input()
  public set options(value: any[]) {
    if (!value) {
      return;
    }

    this.eventStateService.staticDataSourceStream.next(value);
  }

  /**
   * Set data source observable. This observable is used to retrieve dropdown options for data binding.
   */
  @Input()
  public set dataSource(source: Observable<any[]>) {
    this.initDataSource(source);
  }

  /**
   * Set dropdown unique identifier.
   */
  @Input()
  public set id(value: string) {
    if (!ValidatorService.idPatternValidatorExpression.test(value)) {
      throw Error('Invalid [id] input value. Unique identifier parameter only accept string begin with a letter ([A-Za-z]) and may be followed by any number of letters, digits ([0-9]), hyphens ("-"), underscores ("_").');
    }

    this.dataStateService.id = value;
  }

  /**
   * Set translation data object. Used to localize table static label text.
   */
  @Input()
  public set translations(value: DropdownTranslations) {
    this.config.translations = value;
  }

  /**
   * Set select option track by field path which is used to uniquely identify options for selection tracking.
   * This field support object paths expressions 'root[0].nest'.
   */
  @Input()
  public set selectTrackBy(value: string) {
    this.config.selectTrackBy = value;
  }

  /**
   * Set display value track by field path which is used to extract dropdown option display value.
   * This field support object paths expressions 'root[0].nest'.
   */
  @Input()
  public set displayTrackBy(value: string) {
    this.config.displayTrackBy = value;
  }

  /**
   * Set options group field path which is used to group the dropdown options.
   * This field support object paths expressions 'root[0].nest'.
   */
  @Input()
  public set groupByField(value: string) {
    this.config.groupByField = value;
  }

  /**
   * Set dropdown option disable state field path which is used to disabled state dropdown options.
   * This field support object paths expressions 'root[0].nest'.
   */
  @Input()
  public set disabledTrackBy(value: string) {
    this.config.disabledTrackBy = value;
  }

  /**
   * Set selected options collection. These options will be set selected by default on initial load.
   * Applicable only when multi select mode is enabled.
   */
  @Input()
  public set selectedOptions(value: any[]) {
    this.dataStateService.selectedOptions = value || [];
  }

  /**
   * Set selected option. This option is selected by default on initial load.
   * Applicable only when single select mode is enabled.
   */
  @Input()
  public set selectedOption(value: any) {
    this.dataStateService.selectedOption = value;
  }

  /**
   * Set number of options to fetch on scroll to bottom action when load on scroll mode is enabled.
   */
  @Input()
  public set limit(value: number) {
    this.config.limit = value;
  }

  /**
   * Set wrap selected options in dropdown view and show the number of options selected instead when
   * limit is met or exceeded. Applicable only when multi select mode is enabled.
   */
  @Input()
  public set wrapDisplaySelectLimit(value: number) {
    this.config.wrapDisplaySelectLimit = value;
  }

  /**
   * Set infinite scrollable state to load data on demand with scroll motion. Dropdown data fetch call is
   * initiated with limit and offset when user scroll to bottom hence loading the full data set on init.
   */
  @Input()
  public set loadOnScroll(value: boolean) {
    this.config.loadOnScroll = value;
  }

  /**
   * Set view height ratio to trigger data fetch with infinite scrollable mode.
   * Higher ratio will will increase the scroll sensitivity.
   */
  @Input()
  public set loadViewDistanceRatio(value: number) {
    this.config.loadViewDistanceRatio = value;
  }

  /**
   * Set option select mode.
   * - 'multi' : Support selecting multiple options.
   * - 'single' : Support selecting a single option from options collection.
   * - 'single-toggle' : Support selecting a single option from options collection. Selection can not be removed but
   * only toggled by tapping on another option.
   */
  @Input()
  public set selectMode(value: DropdownSelectMode) {
    this.config.selectMode = value;
  }

  /**
   * Show dropdown option search filter text-box if true.
   */
  @Input()
  public set filterable(value: boolean) {
    this.config.filterable = value;
  }

  /**
   * Set default filter value to be applied on initial load. All options are displayed when filter text value is
   * empty string. Applicable only when dropdown is filterable.
   */
  @Input()
  public set filterText(value: string) {
    this.dataStateService.filterText = value;
  }

  /**
   * Set time based filter debounce to optimize performance and avoid request flooding by reducing the filter
   * request frequency if true. Applicable only when dropdown filterable state is enabled.
   */
  @Input()
  public set filterDebounce(value: boolean) {
    this.config.filterDebounce = value;
  }

  /**
   * Set filter debounce time in milliseconds. Applicable only when searchDebounce is true.
   */
  @Input()
  public set filterDebounceTime(value: number) {
    this.config.filterDebounceTime = value;
  }

  /**
   * Set load data on component initialize if true.
   */
  @Input()
  public set loadDataOnInit(value: boolean) {
    this.config.loadDataOnInit = value;
  }

  /**
   * Show selected option remove button if true.
   * Applicable only when multi select mode ios enabled.
   */
  @Input()
  public set showSelectedOptionRemoveButton(value: boolean) {
    this.config.showSelectedOptionRemoveButton = value;
  }

  /**
   * Set show all select options clear button if true.
   * Applicable only when multi select mode ios enabled.
   */
  @Input()
  public set showClearSelectionButton(value: boolean) {
    this.config.showClearSelectionButton = value;
  }

  /**
   * Set options menu width in pixels.
   */
  @Input()
  public set menuWidth(value: number) {
    this.config.menuWidth = value;
  }

  /**
   * Set options menu height in pixels.
   */
  @Input()
  public set menuHeight(value: number) {
    this.config.menuHeight = value;
  }

  /**
   * Set popup options menu display position relative to dropdown component.
   * Support 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' values.
   */
  @Input()
  public set menuPosition(value: ViewPosition) {
    this.config.menuPosition = value;
  }

  /**
   * Set dropdown view disabled state.
   */
  @Input()
  public set disabled(value: boolean) {
    this.dataStateService.disabled = value;
  }

  /**
   * Set Close dropdown menu on option select if true.
   */
  @Input()
  public set closeMenuOnSelect(value: boolean) {
    this.config.closeMenuOnSelect = value;
  }

  /**
   * Set show dropdown option select checkbox if true.
   */
  @Input()
  public set showOptionSelectCheckbox(value: boolean) {
    this.config.showOptionSelectCheckbox = value;
  }

  /**
   * Multi select option selected item maximum width. Apply ellipsis when selected option display text
   * exceed the max width.
   */
  @Input()
  public set multiSelectOptionMaxWidth(value: number) {
    this.config.multiSelectOptionMaxWidth = value;
  }

  /**
   * Set first dropdown option selected on data fetch if true.
   */
  @Input()
  public set setFirstOptionSelected(value: boolean) {
    this.config.setFirstOptionSelected = value;
  }

  /**
   * Trigger select change event on init if true.
   * Can be used to enable selectedOptions or selectedOption associated change trigger.
   */
  @Input()
  public set triggerSelectChangeOnInit(value: boolean) {
    this.config.triggerSelectChangeOnInit = value;
  }

  /**
   * Set trigger select change on explicit model update if true.
   * Applicable only when form binding is used.
   */
  @Input()
  public set triggerSelectChangeOnModelUpdate(value: boolean) {
    this.config.triggerSelectChangeOnModelUpdate = value;
  }

  /**
   * Set trigger select change on first option select change if true.
   * Applicable only when setFirstOptionSelected is true.
   */
  @Input()
  public set triggerSelectChangeOnFirstOptionSelect(value: boolean) {
    this.config.triggerSelectChangeOnFirstOptionSelect = value;
  }

  /**
   * Set dynamically calculate dropdown view dimensions relative to dropdown button width.
   * MenuWith and menuHeight values are ignored when true.
   */
  @Input()
  public set dynamicDimensionCalculation(value: boolean) {
    this.config.dynamicDimensionCalculation = value;
  }

  /**
   * Set dynamic dropdown options view dimensions calculation width ratio relative to dropdown selector.
   */
  @Input()
  public set dynamicWidthRatio(value: number) {
    this.config.dynamicWidthRatio = value;
  }

  /**
   * Set dynamic dropdown options view dimensions calculation height ratio relative to dropdown selector.
   */
  @Input()
  public set dynamicHeightRatio(value: number) {
    this.config.dynamicHeightRatio = value;
  }

  /**
   * Set relative parent element to render dropdown view container.
   */
  @Input()
  public set relativeParentElement(value: HTMLElement) {
    this.config.relativeParentElement = value;
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

  /**
   * Initialize data source.
   * @param source Data source stream.
   */
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
   * @param event Mouse click event args.
   * @param element Dropdown button element.
   */
  public toggleDropdown(event: MouseEvent, element: HTMLElement): void {
    const target = event.target as HTMLElement;
    if (target && target.classList && target.classList.contains('ng-ignore-propagation')) {
      return;
    }

    this.dataStateService.componentLoaderRef.toggle(DropdownViewComponent, element, this.injector, {
      relativeParentElement: this.config.relativeParentElement,
      position: this.config.menuPosition
    });

    if (this.config.dynamicDimensionCalculation) {
      this.config.menuWidth = element.offsetWidth * this.config.dynamicWidthRatio;
      this.config.menuHeight = element.offsetWidth * this.config.dynamicHeightRatio;
    }
  }

  /**
   * Get options wrapped state.
   */
  public get wrapSelectedOptions(): boolean {
    if (this.config.wrapDisplaySelectLimit !== undefined) {
      return this.dataStateService.selectedOptions.length > this.config.wrapDisplaySelectLimit;
    }

    return false;
  }

  /**
   * Get wrapped option display text.
   */
  public get wrappedOptionDisplayText(): string {
    return `(${this.dataStateService.selectedOptions.length}) ${this.config.translations.selectedOptionWrapPlaceholder}`;
  }

  /**
   * Lifecycle hook that is called when component is destroyed.
   */
  public ngOnDestroy(): void {
    if (this.onSelectChangeSubscription) {
      this.onSelectChangeSubscription.unsubscribe();
    }

    this.dataStateService.componentLoaderRef.dispose();
  }

  /**
   * Get selected options availability state.
   */
  public get hasSelectedOptions(): boolean {
    if (this.config.selectMode === 'multi') {
      return !!this.dataStateService.selectedOptions.length;
    }

    return !!this.dataStateService.selectedOption;
  }

  /**
   * Trigger select change.
   */
  public triggerSelectChange(): void {
    if (this.config.selectMode === 'multi') {
      this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOptions);
    } else {
      this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOption);
    }
  }

  /**
   * Clear selected options.
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

  /**
   * Lifecycle hook that is called when component is initialized.
   */
  public ngOnInit(): void {
    if (!this.dataStateService.id) {
      throw Error('Missing required parameter value for [id] input.');
    }

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

  /**
   * Map source data object to dropdown option model.
   * @param option Source dropdown option.
   * @param index Current index.
   */
  private mapDropdownOption(option: any, index: number): DropdownOption {
    const id = get(option, this.config.selectTrackBy);

    return {
      disabled: get(option, this.config.disabledTrackBy),
      id,
      index: index + this.dataStateService.offset + 1,
      option,
      text: get(option, this.config.displayTrackBy)
    };
  }

  /**
   *
   * Set dropdown options data.
   * @param queryResult Query result object reference.
   */
  private setDropdownOptions(queryResult: DropdownQueryResult<any>) {
    if (this.config.groupByField) {
      this.dataStateService.dropdownOptionGroups = queryResult.options.reduce(
        (accumulator: DropdownOptionGroup[], option: any, index: number) => {
          const groupFieldValue = get(option, this.config.groupByField);
          const currentGroup = accumulator.find((group: DropdownOptionGroup) => group.groupName === groupFieldValue);

          if (currentGroup) {
            currentGroup.options.push(this.mapDropdownOption(option, index));
          } else {
            accumulator.push({
              groupName: groupFieldValue,
              options: [this.mapDropdownOption(option, index)]
            });
          }

          return accumulator;
        },
        this.config.loadOnScroll && this.dataStateService.offset > 0 ? this.dataStateService.dropdownOptionGroups : []
      );
    } else {
      this.dataStateService.dropdownOptions = queryResult.options.reduce(
        (accumulator: DropdownOption[], option: any, index: number) => {
          accumulator.push(this.mapDropdownOption(option, index));
          return accumulator;
        },
        this.config.loadOnScroll && this.dataStateService.offset > 0 ? this.dataStateService.dropdownOptions : []
      );
    }

    if (this.config.setFirstOptionSelected && queryResult.options.length) {
      if (this.config.selectMode === 'multi') {
        this.dataStateService.selectedOptions = [queryResult.options[0]];
      } else {
        this.dataStateService.selectedOption = queryResult.options[0];
      }

      if (this.config.triggerSelectChangeOnFirstOptionSelect) {
        this.triggerSelectChange();
      }
    }

    this.dataStateService.totalOptionCount = queryResult.count;
    this.dataStateService.currentOptionCount += queryResult.options.length;
  }

  /**
   * On after data bind event handler.
   * @param queryResult Query result object reference.
   */
  private onAfterDataBind(queryResult: DropdownQueryResult<any>): void {
    this.setDropdownOptions(queryResult);
    this.dataStateService.dataLoading = false;
    this.eventStateService.dataBoundStream.emit();
  }

  /**
   * Fetch query results.
   * @param hardReload Hard reload state.
   */
  private fetchQueryResults(hardReload: boolean): Observable<DropdownQueryResult<any>> {
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

  /**
   * Initialize data fetch event.
   */
  private initDataFetchEvent(): void {
    const noop = {
      options: [],
      count: 0
    };

    this.eventStateService.dataFetchStream
      .pipe(
        debounceTime(20),
        switchMap((hardReload: boolean) => this.fetchQueryResults(hardReload)),
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

  /**
   * Trigger explicit data fetch.
   * @param hardReload Hard reload state.
   */
  public fetchData(hardReload: boolean = false): void {
    this.eventStateService.dataFetchStream.emit(hardReload);
  }

  /**
   * On select option remove event handler.
   * @param index Selected option index.
   */
  public onSelectOptionRemove(index: number): void {
    this.dataStateService.selectedOptions.splice(index, 1);
    this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOptions);
  }

  /**
   * Close dropdown options menu.
   */
  public close(): void {
    this.dataStateService.componentLoaderRef.hide();
  }
}
