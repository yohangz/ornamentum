import { FilterStringOperator } from './filter-string-operator.model';
import { FilterNumberOperator } from './filter-number-operator.model';
import { FilterType } from './filter-type.model';

export interface Column {
  title: string;
  field: string;

  cssClass: string;
  width: string;
  visible: boolean;
  suppressInContextMenu: boolean;

  sortable: boolean;
  sortTrackBy: string;

  resizeable: boolean;
  resizeMinLimit: number;

  filterable: boolean;
  filterTrackBy: string;
  filterType: FilterType;
  filterOperator: FilterNumberOperator | FilterStringOperator;
  filterIgnoreCase: boolean;
  filterValue: any;
}
