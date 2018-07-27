<ng-template #ngDataTableCell let-row="row">
   <td style="color: #4dc71f;font-style: oblique">
       {{row.item.side.toUpperCase()}}
   </td>
</ng-template>
