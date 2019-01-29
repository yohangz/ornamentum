  <ng-template #ngDataTableRowExpand let-row="row">
    <app-row-expand-template-detail-view *ngIf="row.expanded || row.dataLoaded"
                                       [row]="row"></app-row-expand-template-detail-view>
  </ng-template>
