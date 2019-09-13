 <ng-data-table
   // Table level property binding goes here 
   [id]="'sales_products_demo_01'"
   [title]="'Sales Products'"
   [selectTrackBy]="'key'"
   [minHeight]="140"
   [minWidth]="1024"
   [items]="items"
   [dataSource]="dataSource"
   [limit]="14"
   [minContentHeight]="400"
   [minContentWidth]="1080"
   [showHeader]="true"
   [pageable]="true"
   [showRefreshButton]="true"
   [showRowSelectCheckbox]="true"
   [rowSelectable]="true"
   [selectOnRowClick]="true"
   [showSubstituteRows]="true"
   [persistTableState]="false"
   [expandableRows]="false"
   [showRowExpandLoadingSpinner]="false"
   [selectMode]="'multi'">
   <ng-data-table-column
     // Column level property binding goes here 
     [field]="'key'"
     [title]="'Key'"
     [showInColumnSelector]="false"
     [sortable]="true"
     [filterable]="true"
     [width]="70">
 </ng-data-table>
