import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownServerSideBasicComponent } from './index';

/**
 * Represent dropdown server side basic data binding routes.
 */
const dropdownServerSideBasicRoutes: Routes = [
  {
    component: DropdownServerSideBasicComponent,
    path: ''
  }
];

/**
 * Dropdown server side basic data binding routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownServerSideBasicRoutes)]
})
export class DropdownServerSideBasicRoutingModule {
}
