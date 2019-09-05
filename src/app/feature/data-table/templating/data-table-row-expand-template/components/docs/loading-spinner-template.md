  <ng-template #ngDataTableRowExpand let-row="row">
    <app-show-row-expand-loading-spinner-detail-view *ngIf="row.expanded || row.dataLoaded"
                                       [row]="row"></app-show-row-expand-loading-spinner-detail-view>
  </ng-template>
