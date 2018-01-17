import {
  AfterContentInit, Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit,
  Output
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import {
  ClientFilterCallback, DataRequestParams, DropdownItem, DropdownItemGroup, SearchDropdownTranslations
} from '../../models/dropdown.model';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { ComponentLoaderFactoryService } from '../../../utility';
import { ComponentLoader } from '../../../utility/services/component-loader.class';
import { DropdownViewComponent } from '../dropdown-view/dropdown-view.component';
import { MenuPosition } from '../../models/menu-position.enum';

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

  public disabled = false;
  public isLoading = false;
  public currentItemCount = 0;

  private componentLoader: ComponentLoader<DropdownViewComponent>;

  private _translations: SearchDropdownTranslations;
  private _allSelected = false;
  private _selectedOptions: DropdownItem[] = [];
  private _selectedOption: DropdownItem;
  private offset = 0;
  private defaultTranslations: SearchDropdownTranslations = {
    searchEmptyResult: 'No Results Available',
    searchPlaceholder: 'Search',
    selectAll: 'Select All',
    selectedItems: 'Items',
    title: 'Select'
  };

  private searchFilterSubject = new Subject();
  private searchFilterSubscription: Subscription;
  private onChangeSubscription: Subscription;

  // Inputs

  /**
   * Search dropdown display text key translations.
   * @default defaultTranslations
   * @type {SearchDropdownTranslations}
   * @param {SearchDropdownTranslations} data The overridable translation values
   */
  @Input()
  public set translations(data: SearchDropdownTranslations) {
    this._translations = Object.assign(this.defaultTranslations, data);
  }

  /**
   * Returns translations.
   * @returns {SearchDropdownTranslations}
   */
  public get translations(): SearchDropdownTranslations {
    return this._translations;
  }

  @Input()
  public relativeParentElement: HTMLElement;

  /**
   * Represents the name of the attribute used for selection tracking.
   * @default key
   * @type {string}
   */
  @Input()
  public selectTrackBy = 'key';

  /**
   * Represents the name of the attribute used to show the selected item's display text.
   * @default value
   * @type {string}
   */
  @Input()
  public displayTrackBy = 'value';

  /**
   * Represents the additional data attribute track by field name.
   * @default data
   * @type {string}
   */
  @Input()
  public dataTrackBy = 'data';

  /**
   * Represent field name to group data by.
   * Group data only if provided.
   * @default empty
   * @type {string}
   */
  @Input()
  public groupByField: string;

  /**
   * Represents the name of the attribute used to disable the selection of dropdown item.
   * @default disabled
   * @type {string}
   */
  @Input()
  public disabledTrackBy = 'disabled';

  /**
   * Set dropdown items.
   * @param {any[]} value The dropdown item list.
   */
  @Input()
  public set items(value: any[]) {
    if (this.groupByField) {
      this._groupedItems = value.reduce((acc: DropdownItemGroup[], item: any) => {
        const groupIndex = acc.findIndex((group: DropdownItemGroup) => group.groupName === item[this.groupByField]);
        if (groupIndex > -1) {
          acc[groupIndex].items.push(this.extractDropdownItem(item));
        } else {
          acc.push({
            groupName: item[this.groupByField],
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

  /**
   * Enable/Disable triggerSelectChangeOnInit option.
   * @default true
   * @type {boolean}
   */
  @Input()
  public triggerSelectChangeOnInit = true;

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
   * @default 10
   * @type {number}
   */
  @Input()
  public limit = 10;

  /**
   * Number of items to display when selected.
   * Used to limit itm count shown when more items are selected.
   * @default undefined
   * @type {number}
   */
  @Input()
  public displaySelectedLimit: number;

  /**
   * Enable/Disable dropdown data loading on scrolling.
   * @default false
   * @type {boolean}
   */
  @Input()
  public loadOnScroll = false;

  /**
   * Sets the point which needs to trigger additional data loading functionality when scrolling.
   * @default 1 Gets data when scrolling one item from the drop down.
   * @type {number}
   */
  @Input()
  public loadViewDistance = 1;

  /**
   * Filter option for dropdown search.
   * @default ''
   * @type {string}
   */
  @Input()
  public filterText = '';

  /**
   * Enable/Disable dropdown items multi select option.
   * @default false
   * @type {boolean}
   */
  @Input()
  public multiSelectable = false;

  /**
   * Enable/Disable dropdown items filtering.
   * @default false
   * @type {boolean}
   */
  @Input()
  public filterable = false;

  /**
   * Enable/Disable show select all option.
   * @default false
   * @type {boolean}
   */
  @Input()
  public showSelectAll = false;

  /**
   * Enable/Disable load data in the on init event.
   * @default true
   * @type {boolean}
   */
  @Input()
  public loadDataOnInit = true;

  /**
   * Enable/Disable triggering on select change event one time when select all is selected.
   * @default true
   * @type {boolean}
   */
  @Input()
  public triggerOncePerSelectAll = true;

  /**
   * Enable/Disable show selected items remove icon.
   * @default true
   * @type {boolean}
   */
  @Input()
  public showSelectedOptionRemove = true;

  /**
   * Dropdown menu width.
   * @type {number}
   */
  @Input()
  public menuWidth = 320;

  /**
   * Dropdown menu height.
   * @type {number}
   */
  @Input()
  public menuHeight = 250;

  /**
   * Menu open position.
   * @type {MenuPosition}
   */
  @Input()
  public menuPosition: MenuPosition = MenuPosition.BOTTOM_LEFT;

  /**
   * Filter de-bounce time milliseconds.
   * @default 500
   * @type {number}
   */
  @Input()
  public filterDebounceTime = 500;

  /**
   * Filter de-bounce enabled state.
   * @default false
   * @type {boolean}
   */
  @Input()
  public filterDebounce = true;

  // Input - Event handlers

  /**
   * On client filter callback.
   * @default undefined
   * @type {ClientFilterCallback}
   */
  @Input()
  public onClientFilter: ClientFilterCallback;

  // Outputs : Event Handlers

  /**
   * On data fetch handler.
   * @type {EventEmitter<DataRequestParams>}
   */
  @Output()
  public onDataFetch = new EventEmitter<DataRequestParams>();

  /**
   * On dropdown initialize.
   * @type {EventEmitter<DropdownComponent>}
   */
  @Output()
  public onInit = new EventEmitter<DropdownComponent>();

  /**
   * On select change handler.
   * @type {EventEmitter<DropdownItem[] | DropdownItem>}
   */
  @Output()
  public onSelectChange = new EventEmitter<DropdownItem[] | DropdownItem>();

  constructor(private componentLoaderFactory: ComponentLoaderFactoryService) {
    this._translations = this.defaultTranslations;
    this.componentLoader = this.componentLoaderFactory.createLoader();
  }

  /**
   * Extract dropdown item out of generic item provided.
   * @param item Generic item object.
   * @return {DropdownItem} Dropdown item object.
   */
  private extractDropdownItem(item: any): DropdownItem {
    const id = item[this.selectTrackBy];
    const selectedOption = this.getSelectedOption(id);

    return {
      id: id,
      text: item[this.displayTrackBy],
      disabled: selectedOption ? selectedOption.disabled : item[this.disabledTrackBy],
      data: item[this.dataTrackBy],
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
        this.loadOnScroll ? this.loadData() : this.clientFilter();
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

    this.onInit.emit(this);
  }

  public ngAfterContentInit(): void {
    if (this.loadDataOnInit) {
      this.loadData();
    }

    if (this.triggerSelectChangeOnInit && (this._selectedOption || this._selectedOptions)) {
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
      id: option[this.selectTrackBy],
      text: option[this.displayTrackBy],
      disabled: option[this.disabledTrackBy],
      data: option[this.dataTrackBy]
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

    this.componentLoader.toggle(DropdownViewComponent, element, {
      props: {
        dropdown: this
      }
    }, floatLeft, floatTop, this.relativeParentElement);
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

    if (scrollTop >= scrollHeight - (1 + this.loadViewDistance) * scrollElementHeight - roundingPixel - gutterPixel) {
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
      this.loadOnScroll ? this.loadData() : this.clientFilter();
    }
  }

  /**
   * Performs clear search event when click on the close button appeared in the search box.
   * Loads data again.
   */
  public clearSearch(): void {
    this.offset = 0;
    this.filterText = '';
    this.loadOnScroll ? this.loadData() : this.clientFilter();
  }

  /**
   * Performs when clicks on the close icon appeared near the selected item when showSelectedOptionRemove is true.
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
    if (this.multiSelectable) {
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

    if (this.groupByField) {
      this._groupedItems.forEach((groupedItem: DropdownItemGroup) => {
        groupedItem.items.forEach((dropdownItem: DropdownItem) => {
          this.setSelected(dropdownItem, this._allSelected, !this.triggerOncePerSelectAll);
        });
      });
    } else {
      this._items.forEach((dropdownItem) => {
        this.setSelected(dropdownItem, this._allSelected, !this.triggerOncePerSelectAll);
      });
    }

    if (this.triggerOncePerSelectAll) {
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
    const selectedId = this._selectedOptions.find(selectedOption => selectedOption.id === option.id);
    return !!selectedId;
  }

  /**
   * Loads data to the dropdown when performing on init, searching, clearing search items and scrolling.
   * @param {boolean} fetchNext Boolean to get more data when scrolling.
   */
  private loadData(fetchNext?: boolean): void {

    if (!this.loadOnScroll) {
      this.isLoading = false;
      return;
    }

    if (this.isLoading) {
      return;
    }

    if (fetchNext && this.currentItemCount >= this.totalItemCount) {
      return;
    }

    if (fetchNext) {
      this.offset = this.offset + this.limit;
    }

    this.isLoading = true;

    this.onDataFetch.emit({
      filter: this.filterText,
      offset: this.offset,
      limit: this.limit
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
    if (this.multiSelectable) {
      return this._selectedOptions.find(option => option.id === id) || null;
    }

    if (this.selectedOption && this.selectedOption.id === id) {
      return this.selectedOption;
    }

    return null;
  }

  /**
   * Map option back to base type.
   * @param {DropdownItem} dropdownItem Dropdown item.
   * @return {any} Base dropdown item object.
   */
  private mapOptionToBaseType(dropdownItem: DropdownItem): any {
    const option = {};

    option[this.selectTrackBy] = dropdownItem ? dropdownItem.id : '';
    option[this.displayTrackBy] = dropdownItem ? dropdownItem.text : '';

    if (dropdownItem) {
      if (dropdownItem.disabled !== undefined) {
        option[this.disabledTrackBy] = dropdownItem.disabled;
      }

      if (dropdownItem.data !== undefined) {
        option[this.dataTrackBy] = dropdownItem.data;
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
    this.onSelectChange.emit(this.multiSelectable ? this.mapOptionsToBaseType(this._selectedOptions)
      : this.mapOptionToBaseType(this._selectedOption));
  }

  /**
   * Get show all selected item labels state.
   * @return {boolean} Show label if true.
   */
  public get showAllSelectedItemLabels(): boolean {
    return this.displaySelectedLimit !== undefined ? this._selectedOptions.length > this.displaySelectedLimit : false;
  }

  /**
   * Get selected items message.
   * @return {string} Selected items message.
   */
  public get selectedItemsMessage(): string {
    return `(${this._selectedOptions.length}) ${this.translations.selectedItems}`;
  }

  /**
   * Called when value selected value gets updated.
   * ControlValueAccessor implementation.
   * @param value Selected value.
   */
  public writeValue(value: any): void {
    if (this.multiSelectable) {
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
    this.onChangeSubscription = this.onSelectChange.subscribe((value) => {
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
    if (this.groupByField) {
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
}
