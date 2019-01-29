  <ng-template #ngDataTableRowExpand let-row="row">
    <app-row-expand-loading-spinner-detail-view *ngIf="row.expanded || row.dataLoaded"
                                       [row]="row"></app-row-expand-loading-spinner-detail-view>
  </ng-template>
