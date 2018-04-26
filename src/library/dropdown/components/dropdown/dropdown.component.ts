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
  TemplateRef
} from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { get } from 'lodash';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { DropdownMenuPosition } from '../../models/dropdown-menu-position.enum';
import { DropdownTranslations } from '../../models/dropdown-translations.model';
import { DropdownItem } from '../../models/dropdown-item.model';
import { DropdownItemGroup } from '../../models/dropdown-Item-group.model';
import { DropdownRequestParams } from '../../models/dropdown-request-params.model';
import { DropdownDataBindCallback } from '../../models/dropdown-data-bind-callback.model';
import { DropdownQueryResult } from '../../models/dropdown-query-result.model';
import { DropdownSelectMode } from '../../models/dropdown-select-mode.enum';

import { PopoverComponentLoaderFactoryService } from '../../../utility/utility.module';
import { DropdownConfigService } from '../../services/dropdown-config.service';
import { DropdownDataStateService } from '../../services/dropdown-data-state.service';
import { DropdownEventStateService } from '../../services/dropdown-event-state.service';
import { DropdownResourceService } from '../../services/dropdown-resource.service';

import { DropdownViewComponent } from '../dropdown-view/dropdown-view.component';

/**
 * Component class to represent search dropdown.
 * @implements OnInit, OnDestroy, ControlValueAccessor
 * @class SearchDropdownComponent
 */
@Component({
  selector: 'ng-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
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
  public DropdownSelectMode = DropdownSelectMode;

  private onSelectChangeSubscription: Subscription;

  @ContentChild('ngDropdownLoadingSpinner')
  public loadingSpinnerTemplate: TemplateRef<any>;

  @ContentChild('ngDropdownOption')
  public set dropdownOptionTemplate(value: TemplateRef<any>) {
    this.dataStateService.dropdownOptionTemplate = value;
  }

  @ContentChild('ngDropdownOptionGroupHeader')
  public set dropdownOptionGroupHeaderTemplate(value: TemplateRef<any>) {
    this.dataStateService.dropdownOptionGroupHeaderTemplate = value;
  }

  // Outputs : Event Handlers
  /**
   * On dropdown initialize.
   * @type {EventEmitter<DropdownComponent>}
   */
  @Output()
  public init: EventEmitter<DropdownComponent>;

  /**
   * On select change handler.
   * @type {EventEmitter<DropdownItem[] | DropdownItem>}
   */
  @Output()
  public selectChange: EventEmitter<any[] | any>;


  @Output()
  public dataBound: EventEmitter<void>;

  // Input - Event handlers

  @Input()
  public set onDataBind(value: DropdownDataBindCallback) {
    this.dataStateService.onDataBind = value;
  }

  // Inputs

  @Input()
  public set items(value: any[]) {
    if (!value) {
      return;
    }

    this.eventStateService.staticDataSourceStream.next(value);
  }

  @Input()
  public set dataSource(source: Observable<any[]>) {
    this.initDataSource(source);
  }

  /**
   * Search dropdown display text key translations.
   * @type {DropdownTranslations}
   */
  @Input()
  public set translations(value: DropdownTranslations) {
    this.config.translations = value;
  }

  @Input()
  public relativeParentElement: HTMLElement;

  /**
   * Represents the name of the attribute used for selection tracking.
   * @type {string}
   */
  @Input()
  public set selectTrackBy(value: string) {
    this.config.selectTrackBy = value;
  }

  /**
   * Represents the name of the attribute used to show the selected item's display text.
   * @type {string}
   */
  @Input()
  public set displayTrackBy(value: string) {
    this.config.displayTrackBy = value;
  }

  /**
   * Represent field name to group data by.
   * Group data only if provided.
   * @type {string}
   */
  @Input()
  public set groupByField(value: string) {
    this.config.groupByField = value;
  }

  /**
   * Represents the name of the attribute used to disable the selection of dropdown item.
   * @type {string}
   */
  @Input()
  public set disabledTrackBy(value: string) {
    this.config.disabledTrackBy = value;
  }

  /**
   * Set previously selected dropdown items.
   * @param {any[]} value The selected dropdown item list.
   */
  @Input()
  public set selectedOptions(value: any[]) {
    this.dataStateService.selectedOptions = value || [];
  }

  /**
   * Set previously selected dropdown item.
   * @param {any} value The selected dropdown item.
   */
  @Input()
  public set selectedOption(value: any) {
    this.dataStateService.selectedOption = value;
  }

  /**
   * Represents the limit of the items that can be shown in the dropdown at a single time.
   * @type {number}
   */
  @Input()
  public set limit(value: number) {
    this.config.limit = value;
  }

  /**
   * Number of items to display when selected.
   * Used to limit itm count shown when more items are selected.
   * @type {number}
   */
  @Input()
  public set wrapDisplaySelectLimit(value: number) {
    this.config.wrapDisplaySelectLimit = value;
  }

  /**
   * Enable/Disable dropdown data loading on scrolling.
   * @type {boolean}
   */
  @Input()
  public set loadOnScroll(value: boolean) {
    this.config.loadOnScroll = value;
  }

  /**
   * Sets the point which needs to trigger additional data loading functionality when scrolling.
   * @type {number}
   */
  @Input()
  public set loadViewDistance(value: number) {
    this.config.loadViewDistance = value;
  }

  /**
   * Filter option for dropdown search.
   * @type {string}
   */
  @Input()
  public set filterText(value: string) {
    this.dataStateService.filterText = value;
  }

  /**
   * Dropdown select mode.
   * @type {DropdownSelectMode}
   */
  @Input()
  public set selectMode(value: DropdownSelectMode) {
    this.config.selectMode = value;
  }

  /**
   * Enable/Disable dropdown items filtering.
   * @type {boolean}
   */
  @Input()
  public set filterable(value: boolean) {
    this.config.filterable = value;
  }

  /**
   * Enable/Disable load data in the on initStream event.
   * @type {boolean}
   */
  @Input()
  public set loadDataOnInit(value: boolean) {
    this.config.loadDataOnInit = value;
  }

  /**
   * Enable/Disable show selected items remove icon.
   * @type {boolean}
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
   * @type {number}
   */
  @Input()
  public set menuWidth(value: number) {
    this.config.menuWidth = value;
  }

  /**
   * Dropdown menu height.
   * @type {number}
   */
  @Input()
  public set menuHeight(value: number) {
    this.config.menuHeight = value;
  }

  /**
   * Menu open position.
   * @type {DropdownMenuPosition}
   */
  @Input()
  public set menuPosition(value: DropdownMenuPosition) {
    this.config.menuPosition = value;
  }

  /**
   * Filter de-bounce enabled state.
   * @default false
   * @type {boolean}
   */
  @Input()
  public set filterDebounce(value: boolean) {
    this.config.filterDebounce = value;
  }

  /**
   * Filter de-bounce time milliseconds.
   * @default 500
   * @type {number}
   */
  @Input()
  public set filterDebounceTime(value: number) {
    this.config.filterDebounceTime = value;
  }

  /**
   * Control disabled state
   * @param {boolean} value Disabled if true.
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

  constructor(private componentLoaderFactory: PopoverComponentLoaderFactoryService,
              private injector: Injector,
              private eventStateService: DropdownEventStateService,
              private dropdownResourceService: DropdownResourceService<any>,
              public dataStateService: DropdownDataStateService,
              public config: DropdownConfigService) {
    this.dataStateService.componentLoaderRef = this.componentLoaderFactory.createLoader();

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
   * @param {HTMLElement} element Dropdown button element.
   */
  public toggleDropdown(element: HTMLElement): void {
    let floatLeft = 0;
    let floatTop = 0;

    if (this.config.menuPosition === DropdownMenuPosition.BOTTOM_RIGHT || this.config.menuPosition === DropdownMenuPosition.TOP_RIGHT) {
      floatLeft = element.offsetWidth;
    }

    if (this.config.menuPosition === DropdownMenuPosition.BOTTOM_RIGHT || this.config.menuPosition === DropdownMenuPosition.BOTTOM_LEFT) {
      floatTop = element.offsetHeight;
    }

    this.dataStateService.componentLoaderRef
      .withFloatLeft(floatLeft)
      .withFloatTop(floatTop)
      .withRelativeParentElement(this.relativeParentElement)
      .toggle(DropdownViewComponent, element, this.injector);
  }

  /**
   * Triggers drop down close event.
   */
  public closeDropdown(): void {
    this.dataStateService.componentLoaderRef.hide();
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
    if (this.config.selectMode === DropdownSelectMode.MULTI) {
      return !!this.dataStateService.selectedOptions.length;
    }

    return !!this.dataStateService.selectedOption;
  }

  public triggerSelectChange(): void {
    if (this.config.selectMode === DropdownSelectMode.MULTI) {
      this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOptions);
    } else {
      this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOption);
    }
  }

  /**
   * Clear selected items.
   */
  public clearSelectedOptions(event: Event): void {
    event.stopPropagation();

    if (this.config.selectMode === DropdownSelectMode.MULTI) {
      this.dataStateService.selectedOptions = [];
      this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOptions);
    } else {
      this.dataStateService.selectedOption = undefined;
      this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOption);
    }

    this.closeDropdown();
  }

  /**
   * Set disabled state.
   * ControlValueAccessor implementation.
   * @param {boolean} isDisabled True if disabled.
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
    if (this.config.selectMode === DropdownSelectMode.MULTI) {
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
   * @param {(value: (DropdownItem[] | DropdownItem)) => void} onSelectChange On select change callback function.
   */
  public registerOnChange(onSelectChange: (value: any[] | any) => void): void {
    this.onSelectChangeSubscription = this.selectChange.subscribe((value) => {
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
      id: id,
      text: get(item, this.config.displayTrackBy),
      disabled: get(item, this.config.disabledTrackBy),
      item: item
    };
  }

  private setDropdownOptions(queryResult: DropdownQueryResult<any>) {
    if (this.config.groupByField) {
      this.dataStateService.dropdownItemGroups = queryResult.items.reduce((accumulator: DropdownItemGroup[], item: any) => {
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
      }, this.config.loadOnScroll && this.dataStateService.offset > 0 ? this.dataStateService.dropdownItemGroups : []);
    } else {
      this.dataStateService.dropdownItems = queryResult.items.reduce((accumulator: DropdownItem[], item: any) => {
        accumulator.push(this.extractDropdownItem(item));
        return accumulator;
      }, this.config.loadOnScroll && this.dataStateService.offset > 0 ? this.dataStateService.dropdownItems : []);
    }

    if (this.config.setFirstOptionSelected && queryResult.items.length) {
      if (this.config.selectMode === DropdownSelectMode.MULTI) {
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
      hardReload: hardReload
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
    this.eventStateService.dataFetchStream
      .debounceTime(20)
      .switchMap((hardReload: boolean) => this.mapToDataBindRequest(hardReload))
      .subscribe((queryResult: DropdownQueryResult<any>) => {
        this.onAfterDataBind(queryResult);
      });
  }

  // Can be used to explicitly trigger data bind event.
  public fetchData(hardReload: boolean = false): void {
    this.eventStateService.dataFetchStream.emit(hardReload);
  }

  public onSelectOptionRemove(event: Event, index: number): void {
    event.stopPropagation();
    this.dataStateService.selectedOptions.splice(index, 1);
    this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOptions);

    this.closeDropdown();
  }
}
