export class DataTableDataStateService {  
  public persistTableState = false;
  public storageMode: DataTableStorageMode = 'session';
  public multiColumnSortable = false;
  public showHeader = false;
  .
  .
  .
  public pageable = false;
  public showIndexColumn = false;
  public indexColumnTitle = '#';
  public rowSelectable = false;
  public selectMode: DataTableSelectMode = 'single';
}
