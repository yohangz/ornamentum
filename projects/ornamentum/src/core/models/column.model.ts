import { FilterStringOperator } from './filter-string-operator.model';
import { FilterOperator } from './filter-operator.model';
import { FilterLogic } from './filter-logic.model';
import { FilterType } from './filter-type.model';
import { SortOrder } from './sort-order.model';

export interface Column {
  id: string;
  title: string;
  displayTrackBy: string;

  cssClass: string;
  width: string;
  visible: boolean;
  showInContextMenu: boolean;

  sortable: boolean;
  sortTrackBy: string;
  sortPriority: number;
  sortOrder: SortOrder;

  resizeable: boolean;
  resizeMinLimit: number;

  filterable: boolean;
  filterTrackBy: string;
  filterType: FilterType;
  filterOperator: FilterOperator | FilterStringOperator;
  filterLogic: FilterLogic;
  filterIgnoreCase: boolean;
  filterValue: any;
}
