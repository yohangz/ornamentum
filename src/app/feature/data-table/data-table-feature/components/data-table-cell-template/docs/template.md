<ng-template #ngDataTableCell let-row="row">
  <td>
     {{row.item.statusValue.toUpperCase()}}
  </td>
</ng-template>
