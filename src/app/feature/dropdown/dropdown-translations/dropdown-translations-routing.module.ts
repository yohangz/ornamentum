import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownTranslationsComponent } from './index';

/**
 * Represent dropdown translations routes.
 */
const dropdownTranslationsRoutes: Routes = [
  {
    component: DropdownTranslationsComponent,
    path: ''
  }
];

/**
 * Dropdown translations routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownTranslationsRoutes)]
})
export class DropdownTranslationsRoutingModule {}
