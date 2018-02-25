import {
  AfterContentInit,
  Component,
  EventEmitter,
  forwardRef,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ClientFilterCallback } from '../../models/client-filter-callback.model';
import { MenuPosition } from '../../models/menu-position.enum';
import { DropdownTranslations } from '../../models/dropdown-translations.model';
import { DropdownItem } from '../../models/dropdown-item.model';
import { DropdownItemGroup } from '../../models/dropdownItem-group.model';
import { DataRequestParams } from '../../models/data-request-params.model';

import { PopoverComponentLoaderFactoryService, ComponentLoader } from '../../../utility';
import { DropdownConfigService } from '../../services/dropdown-config.service';

import { DropdownViewComponent } from '../dropdown-view/dropdown-view.component';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

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
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent implements OnInit, OnDestroy, AfterContentInit, ControlValueAccessor {
  public _items: DropdownItem[] = [];
  public _groupedItems: DropdownItemGroup[] = [];
  public _selectedOptions: DropdownItem[] = [];
  public _selectedOption: DropdownItem;

  public disabled = false;
  public isLoading = true;
  public currentItemCount = 0;

  private componentLoader: ComponentLoader<DropdownViewComponent>;

  private _allSelected = false;
  private offset = 0;

  private searchFilterSubject = new Subject();
  private searchFilterSubscription: Subscription;
  private onChangeSubscription: Subscription;

  // Outputs : Event Handlers

  /**
   * On data fetch handler.
   * @type {EventEmitter<DataRequestParams>}
   */
  @Output()
  public dataFetch = new EventEmitter<DataRequestParams>();

  /**
   * On dropdown initialize.
   * @type {EventEmitter<DropdownComponent>}
   */
  @Output()
  public init = new EventEmitter<DropdownComponent>();

  /**
   * On select change handler.
   * @type {EventEmitter<DropdownItem[] | DropdownItem>}
   */
  @Output()
  public selectChange = new EventEmitter<DropdownItem[] | DropdownItem>();

  // Inputs

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
   * Represents the additional data attribute track by field name.
   * @type {string}
   */
  @Input()
  public set dataTrackBy(value: string) {
    this.config.dataTrackBy = value;
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
   * Enable/Disable triggerSelectChangeOnInit option.
   * @default true
   * @type {boolean}
   */
  @Input()
  public set triggerSelectChangeOnInit(value: boolean) {
    this.config.triggerSelectChangeOnInit = value;
  }

  /**
   * Set previously selected dropdown items.
   * @param {any[]} value The selected dropdown item list.
   */
  @Input()
  public set selectedOptions(value: any[]) {
    this._selectedOptions = value ? value.map((option) => {
      return this.mapToDropdownItem(option);
    }) : [];

    this.updateAllSelectedState();
  }

  /**
   * Set previously selected dropdown item.
   * @param {any} value The selected dropdown item.
   */
  @Input()
  public set selectedOption(value: any) {
    this._selectedOption = value ? this.mapToDropdownItem(value) : undefined;

    this.updateAllSelectedState();
  }

  /**
   * Represents the total item count.
   * @type {number}
   */
  @Input()
  public totalItemCount: number;

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
  public filterText = '';

  /**
   * Enable/Disable dropdown items multi select option.
   * @type {boolean}
   */
  @Input()
  public set multiSelectable(value: boolean) {
    this.config.multiSelectable = value;
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
   * Enable/Disable show select all option.
   * @type {boolean}
   */
  @Input()
  public set showSelectAll(value: boolean) {
    this.config.showSelectAll = value;
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
   * Enable/Disable triggering on select change event one time when select all is selected.
   * @type {boolean}
   */
  @Input()
  public set triggerChangeOncePerSelectAll(value: boolean) {
    this.config.triggerChangeOncePerSelectAll = value;
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
  public showClearSelectionButton: boolean;

  /**
   * Dropdown menu width.
   * @type {number}
   */
  @Input()
  public menuWidth: number;

  /**
   * Dropdown menu height.
   * @type {number}
   */
  @Input()
  public menuHeight: number;

  /**
   * Menu open position.
   * @type {MenuPosition}
   */
  @Input()
  public menuPosition: MenuPosition;

  /**
   * Filter de-bounce time milliseconds.
   * @default 500
   * @type {number}
   */
  @Input()
  public filterDebounceTime: number;

  /**
   * Filter de-bounce enabled state.
   * @default false
   * @type {boolean}
   */
  @Input()
  public filterDebounce: boolean;

  // Input - Event handlers

  /**
   * On client filter callback.
   * @default undefined
   * @type {ClientFilterCallback}
   */
  @Input()
  public onClientFilter: ClientFilterCallback;

  /**
   * Set dropdown items.
   * @param {any[]} value The dropdown item list.
   */
  @Input()
  public set items(value: any[]) {
    if (!value) {
      return;
    }

    if (this.config.groupByField) {
      this._groupedItems = value.reduce((acc: DropdownItemGroup[], item: any) => {
        const groupIndex = acc.findIndex((group: DropdownItemGroup) => group.groupName === item[this.config.groupByField]);
        if (groupIndex > -1) {
          acc[groupIndex].items.push(this.extractDropdownItem(item));
        } else {
          acc.push({
            groupName: item[this.config.groupByField],
            items: [this.extractDropdownItem(item)]
          });
        }

        return acc;
      }, this.offset > 0 ? this._groupedItems : []);
    } else {
      const results = value.map((item) => {
        return this.extractDropdownItem(item);
      });

      this._items = this.offset > 0 ? this._items.concat(results) : results;
    }

    this.currentItemCount = value.length;
    this.updateAllSelectedState();
    this.isLoading = false;
  }

  public updateAllSelectedState(): void {
    this._allSelected = this.currentItemCount === this._selectedOptions.length;
  }

  constructor(private componentLoaderFactory: PopoverComponentLoaderFactoryService,
              private injector: Injector,
              public config: DropdownConfigService) {
    this.menuPosition = this.config.menuPosition;
    this.filterDebounce = this.config.filterDebounce;
    this.filterDebounceTime = this.config.filterDebounceTime;
    this.showClearSelectionButton = this.config.showClearSelectionButton;
    this.menuWidth = this.config.menuWidth;
    this.menuHeight = this.config.menuHeight;

    this.componentLoader = this.componentLoaderFactory.createLoader();
  }

  /**
   * Extract dropdown item out of generic item provided.
   * @param item Generic item object.
   * @return {DropdownItem} Dropdown item object.
   */
  private extractDropdownItem(item: any): DropdownItem {
    const id = item[this.config.selectTrackBy];
    const selectedOption = this.getSelectedOption(id);

    return {
      id: id,
      text: item[this.config.displayTrackBy],
      disabled: selectedOption ? selectedOption.disabled : item[this.config.disabledTrackBy],
      data: item[this.config.dataTrackBy],
      filter: true
    };
  }

  /**
   * Initialize filter event associated subscriptions.
   */
  private initFilterEvent(): void {
    this.searchFilterSubscription = this.searchFilterSubject
      .debounceTime(this.filterDebounceTime)
      .subscribe(() => {
        this.config.loadOnScroll ? this.loadData() : this.clientFilter();
      });
  }

  /**
   * ngOnInit handler.
   * Loads data when component is initialized.
   */
  public ngOnInit(): void {
    if (this.filterDebounce) {
      this.initFilterEvent();
    }

    this.init.emit(this);
  }

  public ngAfterContentInit(): void {
    if (this.config.loadDataOnInit) {
      this.loadData();
    }

    if (this.config.triggerSelectChangeOnInit) {
      this.emitOnSelectChange();
    }
  }

  /**
   * Map base option to dropdown item type.
   * @param option base option object.
   * @return {DropdownItem} Dropdown item object.
   */
  private mapToDropdownItem(option: any): DropdownItem {
    return {
      id: option[this.config.selectTrackBy],
      text: option[this.config.displayTrackBy],
      disabled: option[this.config.disabledTrackBy],
      data: option[this.config.dataTrackBy],
      filter: true
    };
  }

  public positionRight(): number {
    return this.menuPosition === MenuPosition.BOTTOM_RIGHT || this.menuPosition === MenuPosition.TOP_RIGHT ? 0 : undefined;
  }

  public positionBottom(): number {
    return this.menuPosition === MenuPosition.TOP_RIGHT || this.menuPosition === MenuPosition.TOP_LEFT ? 0 : undefined;
  }

  /**
   * Performs dropdown toggle event.
   * @param {HTMLElement} element Dropdown button element.
   */
  public toggleDropdown(element: HTMLElement): void {
    const floatLeft = this.menuPosition === MenuPosition.BOTTOM_RIGHT || this.menuPosition === MenuPosition.TOP_RIGHT
      ? element.offsetWidth : 0;
    const floatTop = this.menuPosition === MenuPosition.BOTTOM_RIGHT || this.menuPosition === MenuPosition.BOTTOM_LEFT
      ? element.offsetHeight : 0;

    this.componentLoader
      .withFloatLeft(floatLeft)
      .withFloatTop(floatTop)
      .withRelativeParentElement(this.relativeParentElement)
      .withContext({
        props: {
          dropdown: this,
        }
      })
      .toggle(DropdownViewComponent, element, this.injector);
  }

  /**
   * Triggers drop down close event.
   */
  public closeDropdown(): void {
    this.componentLoader.hide();
  }

  /**
   * Performs data loading when scrolling by checking the scroll position.
   * This will trigger only when loadOnScroll is true.
   * @param event
   */
  public checkScrollPosition(event: any) {
    const scrollTop = event.target.scrollTop;
    const scrollHeight = event.target.scrollHeight;
    const scrollElementHeight = event.target.clientHeight;

    const roundingPixel = 1;
    const gutterPixel = 1;

    if (scrollTop >= scrollHeight - (1 + this.config.loadViewDistance) * scrollElementHeight - roundingPixel - gutterPixel) {
      this.loadData(true);
    }
  }

  /**
   * Triggers only when keyboards key up event when user types something in the dropdown search box.
   */
  public filterKeyUp(): void {
    this.offset = 0;

    if (this.filterDebounce) {
      this.searchFilterSubject.next(this.filterText);
    } else {
      this.offset = 0;
      this.config.loadOnScroll ? this.loadData() : this.clientFilter();
    }
  }

  /**
   * Performs clear search event when click on the close button appeared in the search box.
   * Loads data again.
   */
  public clearSearch(): void {
    this.offset = 0;
    this.filterText = '';
    this.config.loadOnScroll ? this.loadData() : this.clientFilter();
  }

  /**
   * Performs when clicks on the close icon appeared near the selected item when showSelectedOptionRemoveButton is true.
   * @param {Event} event
   * @param {DropdownItem} option The DropdownItem to be removed from the selected items.
   */
  public onSelectOptionClose(event: Event, option: DropdownItem): void {
    event.stopPropagation();
    const selectedId = this._selectedOptions.findIndex(selectedOption => selectedOption.id === option.id);
    this._selectedOptions.splice(selectedId, 1);
    this.emitOnSelectChange();
  }

  /**
   * Trigger when selecting an item from the dropdown item list.
   * @param {DropdownItem} option
   * @param {boolean} state
   * @param {boolean} triggerOnSelect
   */
  public setSelected(option: DropdownItem, state?: boolean, triggerOnSelect?: boolean): void {
    if (this.config.multiSelectable) {
      const selectedIndex = this._selectedOptions.findIndex(selectedOption => selectedOption.id === option.id);
      if (state !== undefined) {
        if (!state && selectedIndex > -1) {
          this._selectedOptions.splice(selectedIndex, 1);
        }

        if (state && selectedIndex < 0) {
          this._selectedOptions.push(option);
        }
      } else {
        if (selectedIndex > -1) {
          this._selectedOptions.splice(selectedIndex, 1);
        } else {
          this._selectedOptions.push(option);
        }

        this._allSelected = this.currentItemCount === this._selectedOptions.length;
      }
    } else {
      this._selectedOption = option;
      this.closeDropdown();
    }

    if (triggerOnSelect === undefined || triggerOnSelect) {
      this.emitOnSelectChange();
    }
  }

  /**
   * Model binding attribute to the select all option.
   * @param {boolean} value
   */
  public set allSelected(value: boolean) {
    this._allSelected = value;

    if (this.config.groupByField) {
      this._groupedItems.forEach((groupedItem: DropdownItemGroup) => {
        groupedItem.items.forEach((dropdownItem: DropdownItem) => {
          this.setSelected(dropdownItem, this._allSelected, !this.config.triggerChangeOncePerSelectAll);
        });
      });
    } else {
      this._items.forEach((dropdownItem) => {
        this.setSelected(dropdownItem, this._allSelected, !this.config.triggerChangeOncePerSelectAll);
      });
    }

    if (this.config.triggerChangeOncePerSelectAll) {
      this.emitOnSelectChange();
    }
  }

  /**
   * Returns all selected boolean value.
   * @returns {boolean}
   */
  public get allSelected(): boolean {
    return this._allSelected;
  }

  /**
   * Performs toggle all selected event.
   */
  public toggleAllSelected(): void {
    this.allSelected = !this.allSelected;
  }

  /**
   * Returns true if the provided option is already selected else return false.
   * @param option The DropdownItem.
   * @returns {boolean}
   */
  public isSelected(option: DropdownItem): boolean {
    if (this.config.multiSelectable) {
      return !!this._selectedOptions.find(selectedOption => selectedOption.id === option.id);
    }

    return this._selectedOption && option.id === this._selectedOption.id;
  }

  /**
   * Loads data to the dropdown when performing on initStream, searching, clearing search items and scrolling.
   * @param {boolean} fetchNext Boolean to get more data when scrolling.
   */
  private loadData(fetchNext?: boolean): void {
    if (!this.config.loadOnScroll) {
      return;
    }

    if (this.isLoading) {
      return;
    }

    if (fetchNext && this.currentItemCount >= this.totalItemCount) {
      return;
    }

    if (fetchNext) {
      this.offset = this.offset + this.config.limit;
    }

    this.isLoading = true;

    this.dataFetch.emit({
      filter: this.filterText,
      offset: this.offset,
      limit: this.config.limit
    });
  }

  public dataBind(reset: boolean): void {
    if (reset) {
      this.offset = 0;
      this.filterText = '';
      this.writeValue(null);
      this.loadData(false);
    } else {
      this.loadData(true);
    }
  }

  /**
   * Return if the matched selected dropdown item is available for the provided id Else return null.
   * @param id The dropdown item id.
   * @returns {DropdownItem} The DropdownItem.
   */
  private getSelectedOption(id: any): DropdownItem {
    if (this.config.multiSelectable) {
      return this._selectedOptions.find(option => option.id === id) || null;
    }

    if (this._selectedOption && this._selectedOption.id === id) {
      return this._selectedOption;
    }

    return null;
  }

  /**
   * Map option back to base type.
   * @param {DropdownItem} dropdownItem Dropdown item.
   * @return {any} Base dropdown item object.
   */
  private mapOptionToBaseType(dropdownItem: DropdownItem): any {
    if (!dropdownItem) {
      return null;
    }

    const option = {};

    option[this.config.selectTrackBy] = dropdownItem.id;
    option[this.config.displayTrackBy] = dropdownItem.text;

    if (dropdownItem) {
      if (dropdownItem.disabled !== undefined) {
        option[this.config.disabledTrackBy] = dropdownItem.disabled;
      }

      if (dropdownItem.data !== undefined) {
        option[this.config.dataTrackBy] = dropdownItem.data;
      }
    }

    return option;
  }

  /**
   * Map options to bas type.
   * @param {DropdownItem[]} dropdownItems Dropdown items.
   * @return {any[]} Base dropdown item object array.
   */
  private mapOptionsToBaseType(dropdownItems: DropdownItem[]): any[] {
    return dropdownItems.map(item => this.mapOptionToBaseType(item));
  }

  /**
   * Emit the selected values from the dropdown.
   * If multiSelectable is true return all dropdown selected items else return the single selected item.
   */
  private emitOnSelectChange(): void {
    this.selectChange.emit(this.config.multiSelectable ? this.mapOptionsToBaseType(this._selectedOptions)
      : this.mapOptionToBaseType(this._selectedOption));
  }

  /**
   * Get show all selected item labels state.
   * @return {boolean} Show label if true.
   */
  public get showAllSelectedItemLabels(): boolean {
    return this.config.wrapDisplaySelectLimit !== undefined ? this._selectedOptions.length > this.config.wrapDisplaySelectLimit : false;
  }

  /**
   * Get selected items message.
   * @return {string} Selected items message.
   */
  public get selectedItemsMessage(): string {
    return `(${this._selectedOptions.length}) ${this.config.translations.selectedItemWrapPlaceholder}`;
  }

  /**
   * Called when value selected value gets updated.
   * ControlValueAccessor implementation.
   * @param value Selected value.
   */
  public writeValue(value: any): void {
    if (this.config.multiSelectable) {
      this.selectedOptions = value;
    } else {
      this.selectedOption = value;
    }
  }

  /**
   * Register on change event.
   * ControlValueAccessor implementation.
   * @param {(value: (DropdownItem[] | DropdownItem)) => void} onSelectChange On select change callback function.
   */
  public registerOnChange(onSelectChange: (value: DropdownItem[] | DropdownItem) => void): void {
    this.onChangeSubscription = this.selectChange.subscribe((value) => {
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
   * Set disabled state.
   * ControlValueAccessor implementation.
   * @param {boolean} isDisabled True if disabled.
   */
  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /**
   * ngOnDestroy handler.
   * Lifecycle hook that is called when component is destroyed.
   */
  public ngOnDestroy(): void {
    if (this.filterDebounce) {
      this.searchFilterSubscription.unsubscribe();
    }

    if (this.onChangeSubscription) {
      this.onChangeSubscription.unsubscribe();
    }

    this.componentLoader.dispose();
  }

  /**
   * Set dropdown item filter state.
   * @param {DropdownItem} dropdownItem Dropdown item object.
   */
  private setFilterState(dropdownItem: DropdownItem): void {
    const optionText = String(dropdownItem.text).toLowerCase();
    const filterText = String(this.filterText).toLowerCase();
    dropdownItem.filter = this.onClientFilter ? this.onClientFilter(dropdownItem, this.filterText) : optionText.includes(filterText);
  }

  /**
   * Filter data on client search.
   */
  private clientFilter(): void {
    if (this.config.groupByField) {
      this._groupedItems.forEach((dropdownItemGroup: DropdownItemGroup) => {
        dropdownItemGroup.items.forEach((dropdownItem: DropdownItem) => {
          this.setFilterState(dropdownItem);
        });
      });
    } else {
      this._items.forEach((dropdownItem: DropdownItem) => {
        this.setFilterState(dropdownItem);
      });
    }
  }

  /**
   * Has visible dropdown items
   * @param {DropdownItem[]} items Dropdown items
   * @return {boolean} True if any of the item in dropdown is visible.
   */
  public hasVisibleItems(items: DropdownItem[]): boolean {
    return items.some((item: DropdownItem) => item.filter);
  }

  /**
   * Dropdown item selected state.
   * @return {boolean} - true if has selected items.
   */
  public get hasSelectedItems(): boolean {
    return this.config.multiSelectable ? !!this._selectedOptions.length : !!this._selectedOption;
  }

  /**
   * Clear selected items.
   */
  public clearSelected(): void {
    if (this.config.multiSelectable) {
      this._selectedOptions = [];
    } else {
      this._selectedOption = undefined;
    }

    this.emitOnSelectChange();
  }
}
