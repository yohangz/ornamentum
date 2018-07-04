import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownTranslationsComponent } from './index';

/**
 * Represent dropdown translations routes.
 * @type Routes
 */
const dropdownTranslationsRoutes: Routes = [
  {
    component: DropdownTranslationsComponent,
    path: ''
  }
];

/**
 * Dropdown translations routing module.
 * @class DropdownTranslationsRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownTranslationsRoutes)]
})
export class DropdownTranslationsRoutingModule {
}
