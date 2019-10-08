<ng-data-table
  [id]="'sales_products_overview_03'"
  [title]="'Sales Products'"
  [items]="data"
  [indexColumnTitle]="'#'"
  [showIndexColumn]="true"
  [indexColumnWidth]="10">
  <ng-data-table-column
    [displayTrackBy]="'id'"
    [title]="'ID'"
    [width]="20">
  </ng-data-table-column>
  <ng-data-table-column
    [displayTrackBy]="'orderMethodType'"
    [title]="'Order Method Type'"
    [sortable]="true"
    [width]="130">
  </ng-data-table-column>
  <ng-data-table-column
    [displayTrackBy]="'grossMargin'"
    [title]="'Gross Margin'"
    [filterable]="true"
    [width]="100">
  </ng-data-table-column>
</ng-data-table>
