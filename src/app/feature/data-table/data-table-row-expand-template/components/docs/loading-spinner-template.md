<ng-template #ngDataTableRowExpand let-row="row">
  <app-expand-expandable-detail-view *ngIf="row.expanded || row.dataLoaded"
                                       [row]="row"></app-expand-expandable-detail-view>
</ng-template>
