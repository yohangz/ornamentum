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
    redirectTo: 'data-loading-template'
  },
  {
    loadChildren: './dropdown-data-loading-template/dropdown-data-loading-template.module#DropdownDataLoadingTemplateModule',
    // loadChildren: () => import('./dropdown-data-loading-template/dropdown-data-loading-template.module')
    //   .then((m) => m.DropdownDataLoadingTemplateModule),
    path: 'data-loading-template',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Dropdown | Templating | Data Loading Template',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren:
      './dropdown-option-group-header-template/dropdown-option-group-header-template.module#DropdownOptionGroupHeaderTemplateModule',
    // loadChildren: () => import('./dropdown-option-group-header-template/dropdown-option-group-header-template.module')
    //   .then((m) => m.DropdownOptionGroupHeaderTemplateModule),
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
    // loadChildren: () => import('./dropdown-option-template/dropdown-option-template.module')
    //   .then((m) => m.DropdownOptionTemplateModule),
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
