  // Table level configuration
  <ng-data-table
    ...
    [onDynamicRowSpanExtract]="onDynamicRowSpanExtract">
  
    // Column level configuration
    <ng-data-table-column>
        ...
        <ng-template #ngDataTableCell let-row="row" let-spanIndex="spanIndex">
          <td>
            <span>{{getStoreName(row.item, spanIndex, 'storeName')}}</span> // custom template to set data in the grouped rows
          </td>
        </ng-template>
    </ng-data-table-column>
  </ng-data-table>
