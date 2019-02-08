import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownMenuWidthHeightComponent } from './index';

/**
 * Represent dropdown menu width height routes.
 */
const dropdownMenuWidthHeightRoutes: Routes = [
  {
    component: DropdownMenuWidthHeightComponent,
    path: ''
  }
];

/**
 * Dropdown menu width height routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownMenuWidthHeightRoutes)]
})
export class DropdownMenuWidthHeightRoutingModule {
}
