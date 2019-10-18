export interface Data {
  offset: number;
  limit: number;
  page: number;
  count: number;
  rows: Array<{
    id: string;
    item: any;
    selected: boolean;
    disabled: boolean;
    color: string;
    cssClass: string;
    tooltip: string;
    index: number;
    expanded: boolean;
    dataLoaded: boolean;
  }>;
}
