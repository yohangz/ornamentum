export interface Config {
  id: string;
  title: string;

  dataBindOnInit: boolean;

  width: string;
  contentHeight: string;
  minContentWidth: string;
  minContentHeight: string;

  multiColumnSortable: boolean;

  refreshButton: boolean;
  loadingSpinner: boolean;

  persistState: 'local' | 'session' | '';

  filterDebounce: number;

  pageable: boolean;
  substituteRows: boolean;

  infiniteScrollable: boolean;
  infiniteScrollViewDistanceRatio: number;

  indexColumn: boolean;
  indexColumnWidth: string;

  columnMenu: boolean;
  columnMenuWidth: string;

  selectable: boolean;
  selectTrackBy: string;
  selectedValue: any[];
  selectOnClick: boolean;
  selectMode: 'single' | 'multi' | 'single-toggle';
  selectCheckbox: boolean;
  selectCheckboxColumnWidth: string;
  selectAllCheckbox: boolean;

  expandable: boolean;
  expandOnClick: boolean;
  expandColumnWidth: string;
  expandLoadingSpinner: boolean;
}
