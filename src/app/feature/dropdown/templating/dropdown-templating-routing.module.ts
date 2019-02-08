import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeoGuard } from '../../../core/seo.guard';

/**
 * Represent application dropdown templating module routes.
 */
const dropdownTemplatingRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'loading-spinner-template'
  },
  {
    loadChildren: './dropdown-loading-spinner-template/dropdown-loading-spinner-template.module#DropdownLoadingSpinnerTemplateModule',
    path: 'loading-spinner-template',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Templating | Loading Spinner Template',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-option-group-header-template/dropdown-option-group-header-template.module#DropdownOptionGroupHeaderTemplateModule',
    path: 'option-group-header-template',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Templating | Dropdown Option Group Header Template',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './dropdown-option-template/dropdown-option-template.module#DropdownOptionTemplateModule',
    path: 'option-template',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Templating | Dropdown Option Template',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  }
];

/**
 * Application dropdown templating routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownTemplatingRoutes)]
})
export class DropdownTemplatingRoutingModule {
}
