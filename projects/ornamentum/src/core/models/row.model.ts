export interface Row {
  id: string;
  index: number;
  item: any;
  color: string;
  cssClass: string;
  tooltip: string;
  selected: boolean;
  disabled: boolean;
  expanded: boolean;
  expanderLoaded: boolean;
}
