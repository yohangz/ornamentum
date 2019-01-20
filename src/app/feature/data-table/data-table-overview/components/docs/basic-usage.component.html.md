<ng-data-table
  [id]="'sales_products_detail_summery'"
  [title]="'Sales Products'"
  [items]="data">
  <ng-data-table-column
    [field]="'id'"
    [title]="'ID'">
  </ng-data-table-column>
  <ng-data-table-column
    [field]="'orderMethodType'"
    [title]="'Order Method Type'"
    [sortable]="true"
    [width]="130">
  </ng-data-table-column>
  <ng-data-table-column
    [field]="'grossMargin'"
    [title]="'Gross Margin'"
    [filterable]="true"
    [width]="100">
  </ng-data-table-column>
</ng-data-table>
