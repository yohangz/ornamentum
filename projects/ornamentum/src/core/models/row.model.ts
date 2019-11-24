export interface Row {
  id: any;
  index: number;
  item: any;
  cssClass: string;
  selected: boolean;
  disabled: boolean;
  detailView: 'collapsed' | 'expanding' | 'expanded';
}
