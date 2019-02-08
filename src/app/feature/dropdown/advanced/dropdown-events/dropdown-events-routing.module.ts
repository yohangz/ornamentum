import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownEventsComponent } from './index';

/**
 * Represent dropdown events routes.
 */
const dropdownEventsRoutes: Routes = [
  {
    component: DropdownEventsComponent,
    path: ''
  }
];

/**
 * dropdown events routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownEventsRoutes)]
})
export class DropdownEventsRoutingModule {
}
